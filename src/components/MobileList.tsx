'use client'
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams, usePathname } from 'next/navigation'


import { Checkbox } from '@mui/material';
import BottomMenu from '@/components/BottomMenu';

import { LuArrowDownUp } from "react-icons/lu";
import { CiFilter } from "react-icons/ci";


export default function MobileList(props: { className: string }) {

    const [selectedCategory, setSelected] = useState<number | null>(null)
    const searchParams = useSearchParams()! as unknown as URLSearchParams

    const [onOpenOrder, setOpenOrder] = useState<boolean>(false)

    function getSearcParam(category:string,childCategory:string){
        const params = new URLSearchParams(searchParams)
        let check = params.has(category)
        if(check)[
            params.append(category,childCategory)
        ]
    }

    function delSearchParam(category:string,childCategory:string){
        const params = new URLSearchParams(searchParams)
        let check = params.has(category)
        if(check)[
            params.delete(category,childCategory)
        ]
    }


    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const pathname = usePathname();
    function searchProcess(parentQuery: any, childQuery: string) {
        console.log(parentQuery.category)
        console.log(createQueryString(parentQuery.category, childQuery))
        window.history.pushState({}, '', pathname + '?' + createQueryString(parentQuery.category, childQuery))
    }



    let categories = [
        {
            category: 'Kategori',
            childCategories: [{ category: 'Sweatshirt' }, { category: 'Gömlek' }, { category: 'Kazak' }, { category: 'Sneaker' }]
        },
        {
            category: 'Beden',
            childCategories: [{ category: 'XXS' }, { category: 'XS' }, { category: 'S' }, { category: 'M' }]
        },
        {
            category: 'Fiyat',
            childCategories: [{ category: '0 TL - 125 TL' }, { category: '125 TL - 250 TL' }, { category: '250 TL - 300 TL' }, { category: '350 TL - 600 TL' }]
        },
        {
            category: 'Kalıp',
            childCategories: [{ category: 'Baggy Fit' }, { category: 'Basic' }, { category: 'Bol' }, { category: 'Büyük Beden' }]
        },
        {
            category: 'Avantajlı Ürünler',
            childCategories: [{ category: 'Süper Avantajlı Ürün' }, { category: 'Çok Avantajlı Ürün' }, { category: 'Avantajlı Ürün' }, { category: 'Taksit Erteleme' }]
        }
    ]


    const [showFilter, setFilter] = useState<boolean>(false)

    return (
        <div>
            <div className={`w-full relative z-20 ${props.className}`}>
                <div className='flex justify-between gap-x-1 w-full h-10 z-20 bg-white'>
                    <div className='flex justify-center items-center w-6/12 bg-gray-200' onClick={() => {
                        setOpenOrder(true)
                        setSelected(null)
                    }}>
                        <div className='pr-2'><LuArrowDownUp size={20} /></div>
                        <div>Sırala</div>
                    </div>
                    <div className='flex justify-center items-center w-6/12 bg-gray-200' onClick={() => {
                        setFilter(prev => !prev)
                    }}>
                        <div className='pr-2'><CiFilter size={20} /></div>
                        <div>Filtrele</div>
                    </div>
                </div>

                <div className={`mobile-categories-wrapper z-20 w-full h-12 px-1 pt-2 items-center bg-white overflow-x-scroll no-scrollbar ${showFilter && !onOpenOrder ? 'flex' : 'hidden'}`}>
                    {categories.map((data, index) => {
                        return (<div className={`mobile-category shrink-0 border rounded-full py-1 px-2 mx-2 ${selectedCategory === index ? 'border-orange-500' : 'border-slate-300'}`} onClick={() => {
                            if (selectedCategory === index) {
                                setSelected(null)
                                return
                            }
                            setSelected(index)
                        }} key={index}>{data.category}</div>)
                    })}
                </div>

                <div className={`categories absolute z-20 bg-white pb-4`} style={{ top: 88 }}>
                    {categories.map((data, index) => {
                        return (<div className={`${(selectedCategory === index) && showFilter ? 'flex' : 'hidden'} flex-wrap py-4 w-full`} key={index}>{data.childCategories.map((datachild, i) => {
                            return (
                                <div className='flex p-2' key={i} onClick={() => {
                                    searchProcess(categories[selectedCategory as number], datachild.category)
                                }}>
                                    <div className="flex shrink-0 items-start w-1/12">
                                        <Checkbox
                                            className="pt-0"
                                            inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                    </div>
                                    <div className='pl-8'>{datachild.category}</div>
                                </div>)
                        })}</div>)
                    })}
                </div>
                <div className={`w-full h-full fixed bg-black bg-opacity-40 z-10 top-0 ${typeof selectedCategory === 'number' ? 'block' : 'hidden'}`} onClick={() => {
                    setSelected(null)
                }}></div>
            </div >

            <BottomMenu onOpen={onOpenOrder} setOpen={setOpenOrder} />
        </div >
    );
}