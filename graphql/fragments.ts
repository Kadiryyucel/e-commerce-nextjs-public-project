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