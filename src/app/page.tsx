'use client'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import Site from '@/template/Site'

import category1 from '@/assets/categories/category-1.png'
import category2 from '@/assets/categories/category-2.png'
import category3 from '@/assets/categories/category-3.png'
import category5 from '@/assets/categories/category-5.png'
import category6 from '@/assets/categories/category-6.png'


export default function Page() {

	const categoriesImg = [[category1, category2, category6], [category3, category2], [category6, category5, category2]]
	return (
		<Site>
			<div className="flex flex-col [&>*:nth-child(even)]:bg-current [&>*:nth-child(even)]:h-40">
				{categoriesImg.map((categories: StaticImageData[], i: number) => {
					return (
						<div className='flex' key={i}>{categories.map((category: StaticImageData, index: number) => {
							return (

								<div className='h-100 w-full' key={index}>
									<Link href='/category'>
										<Image
											width={250}
											height={250}
											alt={""}
											src={category}
											className="h-full w-full object-cover object-center p-1 md:p-4 filter grayscale"
										/>
									</Link>
								</div>)
						})}</div>
					)
				})}
			</div>
		</Site >
	);
}