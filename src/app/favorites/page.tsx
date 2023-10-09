'use client'

import { getFavorites } from '@/app/helpers/favorites'
import Image from "next/image";

import { Link } from '@mui/material';

import { CiHeart } from 'react-icons/ci'

export default function Favorites() {

    let favorites = getFavorites();

    return(
        <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{favorites.map(({ node: product }) => {
						return (
							<Link href={`/checkout`} key={product.id} className="relative">
								<div>
									<div className="absolute top-4 right-4 p-1 bg-slate-50 rounded-full z-10 border hover:text-amber-500"><CiHeart color='inherit' size={28}/></div>
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
						);
					})}
				</div>
    )
}