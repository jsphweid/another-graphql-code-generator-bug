import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    memes: String!
  }

  type Other {
    meme: Int!
  }
`;