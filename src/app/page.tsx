import PageHeader from "./layout/PageHeader";
import Products from "./components/Products";
import Link from "next/link";
import Image from "next/image";


import { Mulish } from 'next/font/google'

import { GetProductsQuery } from "../../generated/graphql";
import { GET_PRODUCTS } from "../../graphql/queries";

import { getClient } from "@/app/lib/ssr"


export default async function Page() {
	const dataProducts = await getClient().query<GetProductsQuery>({ query: GET_PRODUCTS })

	const cursor = dataProducts.data.products?.pageInfo?.startCursor || '';


	return (
		<div className="relative">
			<div className="px-2 xl:px-28">
				<div className="wrapper">
					<PageHeader />
				</div>
				<div className="bg-menus"></div>
				<div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{dataProducts.data.products?.edges.map(({ node: product }) => {
						return (
							<Link href={`/checkout`} key={product.id}>
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
						);
					})}
				</div>
				<Products cursor={cursor} />
			</div>
		</div>

	);
}