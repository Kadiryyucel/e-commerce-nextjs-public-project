
import Link from "next/link";
import Image from "next/image";
import { CurrentUserDocument, GetCategoriesDocument ,GetProductsDocument} from "../../generated/graphql";
import { executeGraphQL } from "./lib";

import PageHeader from "./components/PageHeader";

import { Mulish } from 'next/font/google'

const mulish = Mulish({ subsets: ['latin'], weight: '400' })
export default async function Page() {
	const data = await executeGraphQL({
		query: GetProductsDocument,
		variables: {
			channel: "default-channel",
			first: 12,
		},
	});

	const dataCategories = await executeGraphQL({
		query: GetCategoriesDocument,
		variables: {
			channel: "default-channel",
			first: 12,
		},
	});


	return (
		<div className="px-28">
			<div>
				<PageHeader />
				<div className="wrapper flex justify-center bg-white">
					<ul className="relative flex justify-center bg-white z-10">
						{dataCategories.categories?.edges.map(({ node: x }) => {
							return (
								<li className="inline-block justify-center px-4 show-category">
									{x.name}
									<div className="menu flex flex-col flex-wrap absolute h-52 bg-white translate-x-0 p-8">
										{x.products?.edges.map(({ node: sub }) => {
											return (<div className={`flex-initial ${mulish.className}`}>{sub.name}</div>)
										})}
									</div>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="bg-menus"></div>
			</div>
			<div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
				{data.products?.edges.map(({ node: product }) => {
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
		</div>
	);
}