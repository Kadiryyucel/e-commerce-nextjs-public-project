

import PageHeader from "./components/PageHeader";
import Products from "./components/Products";
import Link from "next/link";
import Image from "next/image";


import { Mulish } from 'next/font/google'

import { GetProductsQuery, GetCategoriesQuery } from "../../generated/graphql";
import { GET_PRODUCTS, GET_CATEGORİES } from "../../graphql/queries";

import { getClient } from "@/app/lib/ssr"
import { useEffect } from "react";




const mulish = Mulish({ subsets: ['latin'], weight: '400' })

export default async function Page() {
    const dataCategories = await getClient().query<GetCategoriesQuery>({ query: GET_CATEGORİES })
	const dataProducts = await getClient().query<GetProductsQuery>({ query: GET_PRODUCTS })

	const cursor = dataProducts.data.products?.pageInfo?.startCursor || '';


	return (
		<div className="relative px-28">
			<div className="wrapper">
				<PageHeader />
				<div className="flex justify-center bg-white relative w-full">
					<ul className="list-menu flex justify-center bg-white z-10">
						{dataCategories.data.categories?.edges.map(({ node: x }) => {
							return (
								<li className="inline-block justify-center px-4 pb-4 show-category">
									<span>{x.name}</span>
									<div className="menu flex flex-col flex-wrap absolute max-h-52 bg-white translate-x-0 p-8">
										{x.products?.edges.map(({ node: sub }) => {
											return (<div className={`flex-initial menu-text ${mulish.className}`}><span>{sub.name}</span></div>)
										})}
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
			<div className="bg-menus"></div>
			<div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
				{dataProducts.data.products?.edges.map(({ node: product }) => {
					return (
						<Link href={`/products/${product.id}`} key={product.id}>
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
				})}	
			</div>
			<Products cursor={cursor} />
		</div>
	);
}