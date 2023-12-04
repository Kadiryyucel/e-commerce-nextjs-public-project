import { gql } from '@apollo/client'
import { PRODUCT_CARD, PRODUCT, CATEGORY } from './fragments'
export const CURRENT_USER = gql`query CurrentUser {
	me {
		id
		lastLogin
		dateJoined
		email
		firstName
		lastName
		avatar {
			url
			alt
		}
		orders {
			totalCount
		}
	}
}`

export const GET_CATEGORIES = gql`
    ${CATEGORY}
    ${PRODUCT}
    query GetCategories {
    categories(first: 10) {
    edges {
      node {
        ...CATEGORY
        products(first: 10, channel: "default-channel") {
          edges {
            node {
              ...PRODUCT
            }
          }
        }
      }
    }
  }
}`

export const GET_PRODUCTS = gql`
${PRODUCT_CARD}
query GetProducts($after:String,$search:String) {
    products(channel:"default-channel", first: 12, after:$after, search:$search) {
      edges{
       node {
         ...ProductCard
       }
       cursor
    }
    pageInfo {
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
   }
  }`

export const GET_PRODUCT = gql`
${PRODUCT_CARD}
query GetProduct($ids:[ID!]) {
    products(channel:"default-channel", first: 1, where:{ids:$ids}) {
      edges{
       node {
         ...ProductCard
       }
    }
   }
  }`