import { gql } from '@apollo/client'
export const PRODUCT_CARD = gql`fragment ProductCard on Product {
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
  }`

export const PRODUCT = gql`fragment PRODUCT on Product {
  name
  id
  slug
}`
export const CATEGORY = gql`fragment CATEGORY on Category {
  name
  id
  slug
}`

