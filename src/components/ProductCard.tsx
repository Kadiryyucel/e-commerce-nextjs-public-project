'use client'

import Image from 'next/image'
import Link from 'next/link';

import { CiHeart } from 'react-icons/ci'
import { AiTwotoneHeart } from 'react-icons/ai'

import { type ProductCardFragment } from '../../generated/graphql'
import { useState, memo } from 'react';

import { add, del, getFavorites } from '@/helpers/favorites'



const ProductsCard = function ({ product, children }: { product: ProductCardFragment, children: React.ReactNode }) {

    let isInFavorites = getFavorites().some(fav=>fav.id === product.id);

    const [isFavorite, setFavorite] = useState<boolean>(isInFavorites);

    function toggleFavorite(){
        if(isFavorite){
            del(product.id)
            setFavorite(false)
        } 
        else {
            add(product)
            setFavorite(true)
        } 
    }

    function DefaultSlot() {
        if (children) {
            return children
        }
        else {
            return <div className="absolute top-4 right-4 p-1 bg-slate-50 rounded-full z-10 border hover:text-amber-500" onClick={() => toggleFavorite()}>
                {isFavorite ? <AiTwotoneHeart color='rgb(245 158 11)' size={28} /> : <CiHeart color='inherit' size={28} />}
            </div>
        }
    }


    return (
        <div className='relative'>
            <DefaultSlot />
            <Link href={`/checkout`} key={product.id} className="relative">
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

export default memo(ProductsCard)