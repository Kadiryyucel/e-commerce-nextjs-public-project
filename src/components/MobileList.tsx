'use client'
import { useCallback, useState } from 'react';

import { useSearchParams, usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

import { Checkbox } from '@mui/material';


export default function MobileList(props: { className: string }) {

    const [selectedCategory, setSelected] = useState<number>(0)

    const searchParams = useSearchParams()! as unknown as URLSearchParams
    const router = useRouter()


    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const pathname = usePathname();
    function searchProcess(parentQuery:any,childQuery:string) {
        console.log(parentQuery)
        console.log(childQuery)
        console.log(pathname)
        console.log(createQueryString(parentQuery.category, childQuery))
           window.history.pushState(pathname,'',pathname +'?' + createQueryString(parentQuery.category, childQuery))
    }

    let categories = [
        {
            category: 'Kategori',
            childCategories: [{ category: 'toto' }, { category: 'toto' }, { category: 'toto' }, { category: 'toto' }]
        },
        {
            category: 'Beden',
            childCategories: [{ category: 'totoadfadfadsfsafads' }, { category: 'toto' }, { category: 'toto' }, { category: 'toto' }]
        },
        {
            category: 'Fiyat',
            childCategories: [{ category: 'toto' }, { category: 'toto' }, { category: 'toto' }, { category: 'toto' }]
        },
        {
            category: 'Kalıp',
            childCategories: [{ category: 'toto' }, { category: 'toto' }, { category: 'toto' }, { category: 'toto' }]
        },
        {
            category: 'Avantajlı Ürünler',
            childCategories: [{ category: 'toto' }, { category: 'toto' }, { category: 'toto' }, { category: 'toto' }]
        }
    ]
    return (
        <div>
            <div className={`w-full relative ${props.className}`}>
                <div className='flex justify-between gap-x-1 w-full h-10'>
                    <div className='flex justify-center items-center w-6/12 bg-gray-200'>Sırala</div>
                    <div className='flex justify-center items-center w-6/12 bg-gray-200'>Filtrele</div>
                </div>

                <div className='mobile-categories-wrapper flex w-full h-12 px-1 items-center bg-slate-300 overflow-x-scroll no-scrollbar'>
                    {categories.map((data, index) => {
                        return (<div className='mobile-category shrink-0 border rounded-full py-1 px-2 mx-2' onClick={() => { setSelected(index) }} key={index}>{data.category}</div>)
                    })}
                </div>

                <div className='categories absolute z-20 bg-slate-400' style={{ top: 88 }}>
                    {categories.map((data, index) => {
                        return (<div className={`${selectedCategory === index ? 'flex' : 'hidden'} flex-wrap py-4 w-full`} key={index}>{data.childCategories.map((datachild, i) => {
                            return (
                            <div className='flex p-2' key={i} onClick={() => {
                                searchProcess(categories[selectedCategory],datachild.category)
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
            </div >
        </div >
    );
}