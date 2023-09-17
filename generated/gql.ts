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
    "query CurrentUser {\n  me {\n    id\n    lastLogin\n    dateJoined\n    email\n    firstName\n    lastName\n    avatar {\n      url\n      alt\n    }\n    orders {\n      totalCount\n    }\n  }\n}": types.CurrentUserDocument,
    "query GetCategories {\n  categories(first: 10) {\n    edges {\n      node {\n        name\n        level\n        slug\n        products(first: 10, channel: \"default-channel\") {\n          edges {\n            node {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.GetCategoriesDocument,
    "query GetProducts {\n  products(first: 10, channel: \"default-channel\") {\n    edges {\n      node {\n        isAvailable\n        isAvailableForPurchase\n        name\n        rating\n        id\n        thumbnail {\n          alt\n          url\n        }\n        category {\n          name\n        }\n        pricing {\n          priceRange {\n            start {\n              gross {\n                amount\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}": types.GetProductsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CurrentUser {\n  me {\n    id\n    lastLogin\n    dateJoined\n    email\n    firstName\n    lastName\n    avatar {\n      url\n      alt\n    }\n    orders {\n      totalCount\n    }\n  }\n}"): typeof import('./graphql').CurrentUserDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetCategories {\n  categories(first: 10) {\n    edges {\n      node {\n        name\n        level\n        slug\n        products(first: 10, channel: \"default-channel\") {\n          edges {\n            node {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').GetCategoriesDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetProducts {\n  products(first: 10, channel: \"default-channel\") {\n    edges {\n      node {\n        isAvailable\n        isAvailableForPurchase\n        name\n        rating\n        id\n        thumbnail {\n          alt\n          url\n        }\n        category {\n          name\n        }\n        pricing {\n          priceRange {\n            start {\n              gross {\n                amount\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').GetProductsDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
