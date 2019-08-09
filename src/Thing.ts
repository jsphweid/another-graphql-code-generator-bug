import gql from "graphql-tag";

export const typeDefs = gql`
  type Thing implements Node {
    id: ID!
  }
`;
