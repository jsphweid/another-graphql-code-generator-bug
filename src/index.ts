import { mergeSchemas } from "graphql-tools";

import * as Node from "./Node";
import * as Query from "./Query";
import * as Thing from "./Thing";
import * as Other from "./Other";

export const schema = mergeSchemas({
  schemas: [Node.typeDefs, Query.typeDefs, Thing.typeDefs, Other.typeDefs],
  resolvers: {}
});
