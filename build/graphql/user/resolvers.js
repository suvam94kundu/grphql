import { db } from "./../../prisma/db.js";
const query = {
    hello: () => "Hello from GraphQL!",
    yourname: (parent, { age }) => `Hello! You are ${age} years old.`,
};
const mutation = {
    createUser: async (_parent, { first_name, last_name, email, password, salt, }) => {
        await db.orm.public.User.create({
            first_name,
            last_name,
            email,
            password,
            salt,
        });
        return true;
    }
};
const resolvers = { query, mutation };
export default resolvers;
//# sourceMappingURL=resolvers.js.map