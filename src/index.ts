import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import { db } from "./prisma/db.js";

async function startApolloServer() {
  const app = express();
  app.use(express.json());
  const port = Number(process.env.PORT) || 3000;
  const server = new ApolloServer({
    typeDefs: `
            type Query {
                hello: String!
                yourname(age: Int): String!
            }
            type Mutation {
                createUser(first_name:String!,last_name:String!,email:String!,password:String!,salt:String!): Boolean
            }
        `,
    resolvers: {
      Query: {
        hello: () => "Hello from GraphQL!",
        yourname: (parent, { age }: { age: number }) =>
          `Hello! You are ${age} years old.`,
      },
      Mutation: {
        createUser: async (
          _parent,
          {
            first_name,
            last_name,
            email,
            password,
            salt,
          }: {
            first_name: string;
            last_name: string;
            email: string;
            password: string;
            salt: string;
          }
        ) => {
          await db.orm.public!.User!.create({
            first_name,
            last_name,
            email,
            password,
            salt,
          });

          return true;
        },
      },
    },
  });

  await server.start();
  app.use("/graphql", expressMiddleware(server));
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startApolloServer();
