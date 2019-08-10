import gql from "graphql-tag";

import * as Test from "./test";

// The types from test.ts are not being imported...
// But if I remove the line "scalar someScalar", it works
// Note that if those types in test.ts are in this file it works...

export const schema = gql`
  scalar someScalar

  ${Test.typeDefs}
`;
