import type { createUserPayload, loginUserPayload } from "../../services/user/userService.js";
declare const resolvers: {
    query: {
        hello: () => string;
        yourname: (parent: any, { age }: {
            age: number;
        }) => string;
        loginUser: (_parent: any, payload: loginUserPayload) => Promise<string>;
        getLoggedInUser: (_parent: any, param: any, context: any) => Promise<import("@prisma/orm-family-sql/orm-client").DefaultModelRow<import("@prisma/orm-postgres/contract/types").Contract<import("@prisma/orm-family-sql/contract/types").SqlStorage<string>>, string, string> | null | undefined>;
    };
    mutation: {
        createUser: (_parent: any, payload: createUserPayload) => Promise<unknown>;
    };
};
export default resolvers;
//# sourceMappingURL=resolvers.d.ts.map