import { gql } from '@apollo/client'

export const POSTS = gql`
  query getPost {
    post{
      id
      userId
      title
      body
    }
  }
`;

export const USERS = gql`
query getUsers {
  user{
    id
    name
    companyName
  }
}
`;

export const DELETE_POST = gql`
    mutation PostDeletion($id : Int!){
        deletePost(id : $id){
            id
            deleted
        }
    }
`;