import express from "express";
import { expressMiddleware } from "@as-integrations/express5";
import  graphqlServerCreation  from "./graphql/index.js";

async function startApolloServer() {
  const app = express();
  app.use(express.json());
  const port = Number(process.env.PORT) || 3000;
  
  app.use("/graphql", expressMiddleware(await graphqlServerCreation()));
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startApolloServer();
