import PageHeader from "../layout/PageHeader";
import Products from "../components/Products";
import ProductCard from '../components/ProductCard';

import { GetProductsQuery } from "../../generated/graphql";
import { GET_PRODUCTS } from "../../graphql/queries";

import { getClient } from "@/lib/ssr"


export default async function Page() {
	const dataProducts = await getClient().query<GetProductsQuery>({ query: GET_PRODUCTS })

	const cursor = dataProducts.data.products?.pageInfo?.startCursor || '';


	return (
		<div className="relative">
			<div>
				<div className="wrapper">
					<PageHeader />
				</div>
				<div className="mt-4 px-2 xl:px-28 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{dataProducts.data.products?.edges.map(({ node: product }) => {
						return (
							<ProductCard product={product} key={product.id}/>
						);
					})}
				</div>
				<Products cursor={cursor} />
			</div>
		</div>

	);
}