'use client'

import Site from '@/template/Site'
import Products from "../../components/Products";
import ProductCard from '../../components/ProductCard';

import { GetProductsQuery } from "../../../generated/graphql";
import { GET_PRODUCTS } from "../../../graphql/queries";

import { useSuspenseQuery } from '@apollo/client';

import ListCategories from '@/components/List';
import ListMobileCategories from '@/components/MobileList';

export default function Page() {
    const dataProducts = useSuspenseQuery<GetProductsQuery>(GET_PRODUCTS)

    const cursor = dataProducts.data.products?.pageInfo?.startCursor || '';

    return (
        <Site>
            <div className='flex justify-center flex-col md:flex-row'>
                <ListMobileCategories className='flex'></ListMobileCategories>
                <div className='pr-2 hidden md:block'>
                    <ListCategories className='border inline-grid ml-2'/>
                </div>
                <div className='inline-grid w-full md:w-5/6'>
                    <div className="w-full  px-2 xl:px-4 2xl:px-28 inline-grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {dataProducts.data.products?.edges.map(({ node: product }) => {
                            return (
                                <div key={product.id}><ProductCard product={product} ><></></ProductCard></div>
                            );
                        })}
                    </div>
                    <Products cursor={cursor} className='w-full px-2 xl:px-4' />
                </div>
            </div>
        </Site>
    );   
}