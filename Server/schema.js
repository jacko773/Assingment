const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Post {
    userId : Int!
    id : Int!
    title : String!
    body : String!
}
type User {
    id: Int!
    name : String!
    companyName : String!
}
type deletedPost{
    id : Int,
    deleted : Boolean
}
type Query {
    post: [Post]
    user: [User]
}
type Mutation {
    deletePost(id : Int!) : deletedPost
}
schema {
    query : Query
    mutation : Mutation
}
`);