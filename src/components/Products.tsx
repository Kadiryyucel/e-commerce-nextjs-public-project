"use client";

import { useLazyQuery } from '@apollo/client';

import { useState, useEffect, useRef, memo } from "react";
import { GetProductsQuery } from "@/generated/graphql";
import { GET_PRODUCTS } from "../../graphql/queries";


import Link from "next/link";
import Image from "next/image";
import ShowSpinner from "@/components/MainSpinner"
import ProductCard from './ProductCard';

interface ProductsValues {
    cursor?: string
    className?: string
}

const Products = (props: ProductsValues) => {

    const cursor = props.cursor != null ? props.cursor : "";

    const [dataProducts, setProducts] = useState<any[]>([])
    const currentCursor = useRef<string>('')
    const [runQuery, { error, data, fetchMore }] = useLazyQuery<GetProductsQuery>(GET_PRODUCTS)

    const [hasNextPage, setNextPage] = useState(true)
    const [hasSpinner, setSpinner] = useState('invisible')

    useEffect(() => {
        currentCursor.current = data?.products?.pageInfo?.startCursor || cursor;

        window.scrollTo({
            top: 0,
        })

        async function getDataProducts() {
            const { data: newData } = await fetchMore({ variables: { after: currentCursor.current } })
            setSpinner('invisible')

            currentCursor.current = newData.products?.pageInfo.startCursor || '';
            let hasNextPage = newData.products?.pageInfo?.hasNextPage;

            if (hasNextPage === false) {
                setNextPage(hasNextPage)
            }


            let collect: any = [];
            newData.products?.edges.forEach((cur) => {
                collect = [...collect, cur.node]
            })

            setProducts(prev => [...prev, ...collect])
        }

        let buffered: any;
        async function whenScroll() {
            if ((window.innerHeight + window.scrollY) === document.body.scrollHeight) {

                clearTimeout(buffered)

                setSpinner('visible');
                buffered = setTimeout(async () => {
                    getDataProducts();
                }, 1000);
            }
        }

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', whenScroll)
        }


        return () => window.removeEventListener('scroll', whenScroll)


    }, [fetchMore,cursor,data?.products?.pageInfo?.startCursor])

    if (error) return <div></div>



    return (
        <>
            <div className={`mt-4 xl:px-28 inline-grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 ${props.className}`}>
                {dataProducts.map((product, index) => {
                    return (
                        <div key={index}><ProductCard product={product} key={index}><></></ProductCard></div>
                    );
                })
                }
            </div>
            <ShowSpinner hasNextPage={hasNextPage} hasSpinner={hasSpinner} />
        </>
    )
}

export default memo(Products)