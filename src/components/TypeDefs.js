import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const codeString = `
type Query{
    user(userId: Int!): User!
    users: [User!]
    posts: [Post!]
    post(postId: Int): Post!
}

# -------------- Post typedef -------------- #
type Post{
    id: ID!
    title: String!
    body: String!
    author: User!
    comments: [Comment!]!
}
# -------------- Comment typedef -------------- #
type Comment{
    id: ID!
    body: String!
    post: Post!
    author: User!
}
# -------------- User typedef -------------- #
type User{
    id: ID!
    name: String!
    username: String!
    email: String!
    address: Address,
    phone: String!
    website: String!
    company: Company!
    posts: [Post!]!
}
type Company{
    name: String!
    catchPhrase: String!
    bs: String!
}
type Address{
    street: String!
    suite: String!
    city: String!
    zipcode: String!
    geo: Geo!
}
type Geo{
    lat: Float!
    lng: Float!
}
`

const TypeDefs = () => {
    return (
        <SyntaxHighlighter language="graphql" style={darcula}>
            {codeString}
        </SyntaxHighlighter>
    )
}

export default TypeDefs
