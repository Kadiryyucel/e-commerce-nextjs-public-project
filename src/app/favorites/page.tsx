'use client'
import Site from '@/template/Site'

import favoritesRepo from '@/repo/favorites'

import ProductCard from '@/components/ProductCard'

import { IoCloseOutline } from 'react-icons/io5'

import { useState } from 'react'

export default function Favorites() {

	const { getFavorites, del }: { getFavorites: Function, del: Function } = favoritesRepo(typeof window !== 'undefined' ? 'client' : 'server')

	const [favorites, setFavorite] = useState(getFavorites())

	function whenDel(id: string) {
		del(id)
		let newFavorites = favorites.filter((fav:any) => fav.id !== id)
		setFavorite(() => [...newFavorites])
	}

	return (
		<Site>
			<div className="mt-4 px-2 xl:px-28 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
				{favorites.map((product:any) => {
					return (
						<ProductCard product={product} key={product.id} >
							<div className="absolute top-4 right-4 p-1 bg-slate-50 rounded-full z-10 border text-slate-300 hover:text-amber-500 hover:border-amber-500" key={product.id} onClick={() => whenDel(product.id)}>
								<IoCloseOutline color='inherit' size={28} />
							</div>
						</ProductCard>);
				})}
			</div>
		</Site>
	)
}