
import { db } from "./../../prisma/db.js";
import userService from "../../services/user/userService.js";
import type { createUserPayload, loginUserPayload } from "../../services/user/userService.js";
import { error } from "node:console";
const query = {
    hello: () => "Hello from GraphQL!",
    yourname: (parent: any, { age }: { age: number }) =>
          `Hello! You are ${age} years old.`,
    loginUser: async (_parent: any, payload : loginUserPayload) => {
      const res = await userService.loginUser(payload);
      return res;
    },
    getLoggedInUser : async (_parent: any, param: any, context: any) => {
        if (context?.user) {
            const userDetails = await userService.getUserById(context.id);
            return userDetails;              
        }
        else {
            throw new Error("unknown error")
        }

    }
};
const mutation = {
    createUser: async (
          _parent:any,
          payload:createUserPayload
        ) => {
          const res = await userService.createUser(payload);
          return res?.id;
        }
};

const resolvers = {query,mutation};
export default resolvers;