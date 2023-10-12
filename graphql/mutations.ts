import { gql } from '@apollo/client'

gql`mutation Auth($email:String!,$password:String!) {
    tokenCreate(email:$email,password:$password) {
        token
        refreshToken
    errors {
      field
      message
    }
  }
  }`