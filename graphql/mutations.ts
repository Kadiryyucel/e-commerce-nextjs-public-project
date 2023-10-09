import { gql } from '@apollo/client'

export const AUTH = gql`mutation Auth($email:String!,$password:String!) {
    tokenCreate(email:$email,password:$password) {
        token
        refreshToken
    errors {
      field
      message
    }
  }
  }`