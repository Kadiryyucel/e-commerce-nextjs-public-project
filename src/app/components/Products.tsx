"use client";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import { useState, useEffect, useRef, useMemo, memo } from "react";
import { GetProductsQuery } from "@/generated/graphql";
import { GET_PRODUCTS } from "../../../graphql/queries";


import Link from "next/link";
import Image from "next/image";
import ShowSpinner from "@/app/components/MainSpinner"



const Products = (props: { cursor: string }) => {

    const { cursor } = props

    const [dataProducts, setProducts] = useState<any[]>([])
    const currentCursor = useRef<string>('')
    const { data, error, fetchMore } = useSuspenseQuery<GetProductsQuery>(GET_PRODUCTS, { variables: { after: cursor } })

    const [hasNextPage, setNextPage] = useState(true)
    const [hasSpinner, setSpinner] = useState('invisible')

    useEffect(() => {

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


    }, [fetchMore])

    if (error) return <div></div>


    currentCursor.current = data.products?.pageInfo?.startCursor || '';



    return (
        <>
            <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {dataProducts.map((product, index) => {
                    return (
                        <Link href={`/products/${product.id}`} key={index}>
                            <div>
                                <div className="min-h-80 h-80 overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
                                    {product.thumbnail && (
                                        <Image
                                            width={256}
                                            height={256}
                                            alt={product.thumbnail.alt || ""}
                                            src={product.thumbnail.url}
                                            className="h-full w-full object-cover object-center p-4 hover:scale-105"
                                        />
                                    )}
                                </div>
                                <div className="mt-2 flex justify-between">
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-700">{product.name}</h3>
                                        <p className="text-sm text-gray-500">{product.category?.name}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">
                                        ${product.pricing?.priceRange?.start?.gross.amount}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    );
                })
                }
            </div>
            <ShowSpinner hasNextPage={hasNextPage} hasSpinner={hasSpinner} />
        </>
    )
}

export default memo(Products)