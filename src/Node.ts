import gql from "graphql-tag";

export const typeDefs = gql`
  interface Node {
    id: ID!
  }
`;
