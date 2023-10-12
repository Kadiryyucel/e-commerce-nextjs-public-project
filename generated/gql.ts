/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment ProductCard on Product {\n    isAvailable\n    isAvailableForPurchase\n    name\n    rating\n    id\n    thumbnail {\n      alt\n      url\n    }\n    pricing {\n      priceRange {\n        start {\n          gross {\n            amount\n          }\n        }\n      }\n    }\n    category {\n      name\n    }\n  }": types.ProductCardFragmentDoc,
    "mutation Auth($email:String!,$password:String!) {\n    tokenCreate(email:$email,password:$password) {\n        token\n        refreshToken\n    errors {\n      field\n      message\n    }\n  }\n  }": types.AuthDocument,
    "query CurrentUser {\n\tme {\n\t\tid\n\t\tlastLogin\n\t\tdateJoined\n\t\temail\n\t\tfirstName\n\t\tlastName\n\t\tavatar {\n\t\t\turl\n\t\t\talt\n\t\t}\n\t\torders {\n\t\t\ttotalCount\n\t\t}\n\t}\n}": types.CurrentUserDocument,
    "query GetCategories {\n    categories(first: 10) {\n    edges {\n      node {\n        name\n        level\n        slug\n        products(first: 10, channel: \"default-channel\") {\n          edges {\n            node {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.GetCategoriesDocument,
    "\n\nquery GetProducts($after:String) {\n    products(channel:\"default-channel\", first: 12,after:$after) {\n      edges{\n       node {\n         ...ProductCard\n       }\n       cursor\n    }\n    pageInfo {\n      hasNextPage\n      startCursor\n      endCursor\n    }\n    totalCount\n   }\n  }": types.GetProductsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ProductCard on Product {\n    isAvailable\n    isAvailableForPurchase\n    name\n    rating\n    id\n    thumbnail {\n      alt\n      url\n    }\n    pricing {\n      priceRange {\n        start {\n          gross {\n            amount\n          }\n        }\n      }\n    }\n    category {\n      name\n    }\n  }"): typeof import('./graphql').ProductCardFragmentDoc;
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation Auth($email:String!,$password:String!) {\n    tokenCreate(email:$email,password:$password) {\n        token\n        refreshToken\n    errors {\n      field\n      message\n    }\n  }\n  }"): typeof import('./graphql').AuthDocument;
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query CurrentUser {\n\tme {\n\t\tid\n\t\tlastLogin\n\t\tdateJoined\n\t\temail\n\t\tfirstName\n\t\tlastName\n\t\tavatar {\n\t\t\turl\n\t\t\talt\n\t\t}\n\t\torders {\n\t\t\ttotalCount\n\t\t}\n\t}\n}"): typeof import('./graphql').CurrentUserDocument;
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetCategories {\n    categories(first: 10) {\n    edges {\n      node {\n        name\n        level\n        slug\n        products(first: 10, channel: \"default-channel\") {\n          edges {\n            node {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').GetCategoriesDocument;
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\nquery GetProducts($after:String) {\n    products(channel:\"default-channel\", first: 12,after:$after) {\n      edges{\n       node {\n         ...ProductCard\n       }\n       cursor\n    }\n    pageInfo {\n      hasNextPage\n      startCursor\n      endCursor\n    }\n    totalCount\n   }\n  }"): typeof import('./graphql').GetProductsDocument;


export function gql(source: string) {
  return (documents as any)[source] ?? {};
}
