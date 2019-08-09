import gql from "graphql-tag";

export const typeDefs = gql`
  type Other {
    simple: String!
    thing: Thing!
  }
`;
