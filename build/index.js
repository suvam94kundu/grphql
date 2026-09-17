import express from "express";
import { expressMiddleware } from "@as-integrations/express5";
import graphqlServerCreation from "./graphql/index.js";
import userService from "./services/user/userService.js";
async function startApolloServer() {
    const app = express();
    app.use(express.json());
    const port = Number(process.env.PORT) || 3000;
    app.use("/graphql", expressMiddleware(await graphqlServerCreation(), {
        context: async ({ req, res }) => {
            const token = req.headers["token"];
            try {
                let user = userService.decodeToken(token);
                return { user };
            }
            catch (error) {
                return error;
            }
        }
    }));
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}
startApolloServer();
//# sourceMappingURL=index.js.map