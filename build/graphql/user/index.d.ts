export declare const user: {
    typeDefs: string;
    queries: string;
    mutations: string;
    resolvers: {
        query: {
            hello: () => string;
            yourname: (parent: any, { age }: {
                age: number;
            }) => string;
            loginUser: (_parent: any, payload: import("../../services/user/userService.js").loginUserPayload) => Promise<string>;
            getLoggedInUser: (_parent: any, param: any, context: any) => Promise<import("@prisma/orm-family-sql/orm-client").DefaultModelRow<import("@prisma/orm-postgres/contract/types").Contract<import("@prisma/orm-family-sql/contract/types").SqlStorage<string>>, string, string> | null | undefined>;
        };
        mutation: {
            createUser: (_parent: any, payload: import("../../services/user/userService.js").createUserPayload) => Promise<unknown>;
        };
    };
};
//# sourceMappingURL=index.d.ts.map