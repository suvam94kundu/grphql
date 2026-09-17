import { db } from "./../../prisma/db.js";
import userService from "../../services/user/userService.js";
import { error } from "node:console";
const query = {
    hello: () => "Hello from GraphQL!",
    yourname: (parent, { age }) => `Hello! You are ${age} years old.`,
    loginUser: async (_parent, payload) => {
        const res = await userService.loginUser(payload);
        return res;
    },
    getLoggedInUser: async (_parent, param, context) => {
        if (context?.user) {
            const userDetails = await userService.getUserById(context.id);
            return userDetails;
        }
        else {
            throw new Error("unknown error");
        }
    }
};
const mutation = {
    createUser: async (_parent, payload) => {
        const res = await userService.createUser(payload);
        return res?.id;
    }
};
const resolvers = { query, mutation };
export default resolvers;
//# sourceMappingURL=resolvers.js.map