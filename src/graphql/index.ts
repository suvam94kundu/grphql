import { ApolloServer } from "@apollo/server";
import {user} from "./user/index.js";


async function graphqlServerCreation() {
    const server = new ApolloServer({
    typeDefs: `
      ${user.typeDefs}
      type Query {
            ${user.queries}
      }
      type Mutation {
            ${user.mutations}
      }
    `,
    resolvers: {
      Query: {
        ...user.resolvers.query
      },
      Mutation: {
        ...user.resolvers.mutation
      },
    },
  });

  await server.start();

  return server;
}

export default graphqlServerCreation