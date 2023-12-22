'use client'
import Site from '@/template/Site';
import Products from "../../components/Products";
import ProductCard from "../../components/ProductCard";

import { GetProductsQuery } from "../../../generated/graphql";
import { GET_PRODUCTS } from "../../../graphql/queries";

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useSearchParams } from 'next/navigation';

export default function Page() {

	const searchParams = useSearchParams()
	const searchQuery = searchParams.get('q')

	
	const dataProducts = useSuspenseQuery<GetProductsQuery>(GET_PRODUCTS,{ variables: { search: searchQuery } });

	
	const cursor = dataProducts.data.products?.pageInfo?.startCursor || "";
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