'use client'
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../storiesRedux/store';

import Image from 'next/image'
import Link from 'next/link';

import { addProductFavorite, removeProductFavorite } from '../storiesRedux/reducers'

import { CiHeart } from 'react-icons/ci'
import { IoMdHeart } from "react-icons/io";

import { type ProductCardFragment } from '../../generated/graphql'


import favorites from '@/repo/favorites'
import { useSelector } from 'react-redux';



export default function ProductCard({ product, children }: { product: ProductCardFragment, children?: React.ReactNode }) {

    const { add, del } = favorites(typeof window !== 'undefined' ? 'client' : 'server');
    const [isFavorite, setFavorite] = useState<boolean>(false);

    let dispatch = useAppDispatch()
    const favoritesData = useSelector((state: any) => state.products.favorites);

    function toggleFavorite() {
        if (isFavorite) {
            del(product.id)
            setFavorite(false)
            dispatch(removeProductFavorite(product.id))
        }
        else {
            add(product)
            setFavorite(true)
            dispatch(addProductFavorite(product))
        }
    }

    const [isClient, setIsClient] = useState(false);


    useEffect(() => {
        const getFavorites = localStorage.getItem('favorites');
        if (getFavorites) {
            let isInFavorites = JSON.parse(getFavorites).some((fav: any) => fav.id === product.id);
            setFavorite(isInFavorites)
            setIsClient(true);
        }

    }, [product.id]);


    function DefaultSlot() {
        if (children) {
            return children
        }
        else {
            return <div className="absolute top-4 right-4 p-1 bg-slate-50 rounded-full z-10 border hover:text-amber-500 cursor-pointer" onClick={() => toggleFavorite()}>
                {isClient && isFavorite ? <IoMdHeart color='rgb(245 158 11)' size={28} /> : <CiHeart color='inherit' size={28} /> }
            </div>
        }
    }


    return (
        <div className='relative'>
            <DefaultSlot />
            <Link href={`/detail/${(product.id)}`} key={product.id} className="relative">
                <div>
                    <div className="min-h-80 h-80 overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
                        {product.thumbnail && (
                            <Image
                                width={250}
                                height={250}
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
        </div>

    )
}