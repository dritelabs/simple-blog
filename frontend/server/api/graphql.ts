import { join } from "path";
import { makeSchema } from "nexus";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateH3Handler } from "@as-integrations/h3";

import * as types from "../schema";

const schema = makeSchema({
  types,
  outputs: {
    schema: join(process.cwd(), "schema.graphql"),
    typegen: join(process.cwd(), "schema-typegen.ts"),
  },
  // sourceTypes: {
  //   modules: [
  //     {
  //       module: join(__dirname, "typeDefs.ts"),
  //       alias: "t",
  //     },
  //   ],
  // },
  // contextType: {
  //   module: join(__dirname, "context.ts"),
  //   export: "Context",
  // },
  // prettierConfig: require.resolve("../../../.prettierrc"),
});

const apollo = new ApolloServer({
  schema: schema,
});

export default startServerAndCreateH3Handler(apollo, {
  // Optional: Specify context
  // context: (event) => {...}
});
