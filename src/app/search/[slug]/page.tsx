import Site from '@/template/Site'
import Products from "../../../components/Products";
import ProductCard from '../../../components/ProductCard';

import { GetProductsQuery } from "../../../../generated/graphql";
import { GET_PRODUCTS } from "../../../../graphql/queries";

import { getClient } from "@/lib/ssr"


export async function generateStaticParams() {
	const posts = await fetch('http://localhost:3000/search').then((res) => res.json())
   
	return posts.map((post:any) => ({
	  slug: post.slug,
	}))
  }

export default async function Page({ params }: { params: { slug: string } }) {
	console.log(params.slug)
	const dataProducts = await getClient().query<GetProductsQuery>({ query: GET_PRODUCTS ,variables:{search:params.slug}})

	const cursor = dataProducts.data.products?.pageInfo?.startCursor || '';

	return (
		<Site>
			<div className="mt-4 px-2 xl:px-28 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
				{dataProducts.data.products?.edges.map(({ node: product }) => {
					return (
						<ProductCard product={product} key={product.id}><></></ProductCard>
					);
				})}
			</div>
			<Products cursor={cursor} />
		</Site>
	);
}