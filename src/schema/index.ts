import { gql } from "apollo-server";

export const typeDefs = gql`
  type Book {
    id: String
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String!, author: String!): Book
    deleteBook(id: String!): String
    updateBook(id: String!, author: String, title: String): Book
  }
`;