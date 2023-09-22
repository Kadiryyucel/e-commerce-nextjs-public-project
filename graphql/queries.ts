import { gql } from '@apollo/client'
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

export const GET_CATEGORİES = gql`query GetCategories {
    categories(first: 10) {
    edges {
      node {
        name
        level
        slug
        products(first: 10, channel: "default-channel") {
          edges {
            node {
              name
            }
          }
        }
      }
    }
  }
}`

export const GET_PRODUCTS = gql`query GetProducts($after:String) {
    products(channel:"default-channel", first: 12,after:$after) {
      edges {
      node {
        isAvailable
        isAvailableForPurchase
        name
        rating
        id
        thumbnail {
          alt
          url
        }
        pricing {
          priceRange {
            start {
              gross {
                amount
              }
            }
          }
        }
        category {
          name
        }
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