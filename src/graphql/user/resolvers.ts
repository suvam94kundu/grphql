
import { db } from "./../../prisma/db.js";
const query = {
    hello: () => "Hello from GraphQL!",
    yourname: (parent: any, { age }: { age: number }) =>
          `Hello! You are ${age} years old.`,
};
const mutation = {
    createUser: async (
          _parent: any,
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
        }
};

const resolvers = {query,mutation};
export default resolvers;