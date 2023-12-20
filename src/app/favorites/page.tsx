'use client'
import { useEffect, useState } from 'react'
import Site from '@/template/Site'
import favoritesRepo from '@/repo/favorites'
import ProductCard from '@/components/ProductCard'
import { IoCloseOutline } from 'react-icons/io5'



export default function Favorites() {

	const { del }: { del: Function } = favoritesRepo(typeof window !== 'undefined' ? 'client' : 'server')
	const [favorites, setFavorite] = useState([])

	function whenDel(id: string) {
		del(id)
		let newFavorites = favorites.filter((fav: any) => fav.id !== id)
		setFavorite(() => [...newFavorites])
	}

	useEffect(() => {
		const data = localStorage.getItem('favorites');
		if (data) {
			setFavorite(JSON.parse(data));
		}
	}, []);

	return (
		<Site>
			<div className="mt-4 px-2 xl:px-28 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 products">
				{favorites.map((product: any) => {
					return (
						<ProductCard product={product} key={product.id} >
							<div className="absolute top-4 right-4 p-1 bg-slate-50 rounded-full z-10 border text-slate-300 hover:text-amber-500 hover:border-amber-500 cursor-pointer" key={product.id} onClick={() => whenDel(product.id)}>
								<IoCloseOutline color='inherit' size={28} />
							</div>
						</ProductCard>);
				})}
			</div>
		</Site>
	)
}