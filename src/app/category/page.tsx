'use client'
import { useEffect, useRef, useState } from 'react';

import Site from '@/template/Site'
import Products from "../../components/Products";
import ProductCard from '../../components/ProductCard';

import { GetProductsQuery } from "../../../generated/graphql";
import { GET_PRODUCTS } from "../../../graphql/queries";

import { useSuspenseQuery } from '@apollo/client';

import ListCategories from '@/components/List';
import ListMobileCategories from '@/components/MobileList';

import { LuArrowDownUp } from "react-icons/lu";


export default function Page() {

    const dataProducts = useSuspenseQuery<GetProductsQuery>(GET_PRODUCTS)
    const cursor = dataProducts.data.products?.pageInfo?.startCursor || '';

    const [onOpenOrder, setOrderOpen] = useState<boolean>(false)
    const orders = [
        'Önerilen sıralama',
        'En düşük fiyat',
        'En yüksek fiyat',
        'En yeniler',
        'En çok satanlar',
        'En çok begenilenler',
        'En çok değerlendirilenler'
    ]
    const [selectedOrder, setOrder] = useState<string>('Önerilen sıralama')
    const [openCategories, setCategories] = useState<boolean>(false)

    const setCategoriesEl = useRef<HTMLDivElement>(null)
    const categoriesEl = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const whenClickBody = (e: MouseEvent) => {
            const el = e.target;
            if (el instanceof Element) {
                if (el === setCategoriesEl.current ||
                    el === categoriesEl.current ||
                    setCategoriesEl.current?.contains(el) ||
                    categoriesEl.current?.contains(el)) {

                    setCategories(prev => !prev)
                }
                else {
                    setCategories(false)
                }
            }
        }

        document.body.addEventListener('click', whenClickBody)

        return () => {
            document.body.removeEventListener('click', whenClickBody)
        }
    }, [])

    return (
        <Site>
            <div className='flex justify-center flex-col md:flex-row'>
                <ListMobileCategories className='flex flex-col md:hidden' ></ListMobileCategories>
                <div className='pr-2 hidden md:block'>
                    <ListCategories className='hidden md:inline-grid border ml-2' />
                </div>
                <div className='flex flex-col h-full w-full'>
                    <div className='hidden md:flex justify-end mb-6 w-full  pr-2 lg:pr-4 2xl:pr-28'>
                        <div className='flex w-2/6 md:w-3/6 lg:w-2/6 relative flex-col cursor-pointer products'>
                            <div className={`flex items-center justify-between p-4 ${selectedOrder ? 'border' : ''}`}>
                                <div ref={setCategoriesEl}>{selectedOrder}</div>
                                <div className='pl-2'><LuArrowDownUp size={20} /></div>
                            </div>
                            <div ref={categoriesEl} className={`categories w-full absolute border bg-white z-20 bottom-0 py-2 products ${openCategories ? 'block translate-y-full' : 'hidden'}`}>
                                {
                                    orders.map((order: string, index: number) => {
                                        return (
                                            <div className='px-4 py-2 text-sm' onClick={() => setOrder(order)} key={index}>{order}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='inline-grid w-full products'>
                        <div className="w-full  px-2 xl:px-4 2xl:px-28 inline-grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-4">
                            {dataProducts.data.products?.edges.map(({ node: product }) => {
                                return (
                                    <div key={product.id}>
                                        <ProductCard product={product} ><></></ProductCard>
                                    </div>
                                );
                            })}
                        </div>
                        <Products cursor={cursor} className='w-full px-2 xl:px-4' />
                    </div>
                </div>

            </div>
        </Site>
    );
}