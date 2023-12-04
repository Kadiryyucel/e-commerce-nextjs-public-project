'use client'

import { register } from 'swiper/element/bundle';
import { FreeMode, Thumbs, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import types from 'swiper/types';

import 'swiper/css';

import ProductCard from './ProductCard';

import { GetProductsQuery } from "../../generated/graphql";
import { GET_PRODUCTS } from "../../graphql/queries";

import { useSuspenseQuery } from '@apollo/client';

register();

export default function Slider() {

    const dataProducts = useSuspenseQuery<GetProductsQuery>(GET_PRODUCTS);

    return (
        <div className='flex w-full overflow-x-scroll px-2 no-scrollbar'>
            {dataProducts.data.products?.edges.map(({ node: product }) => {
                return (
                    <div className='w-3/6 md:w-4/12 lg:w-2/12 shrink-0 mx-2' key={product.id}>
                        <ProductCard product={product} key={product.id}><></></ProductCard>
                    </div>
                );
            })}
        </div>
    )
}