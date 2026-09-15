declare const resolvers: {
    query: {
        hello: () => string;
        yourname: (parent: any, { age }: {
            age: number;
        }) => string;
    };
    mutation: {
        createUser: (_parent: any, { first_name, last_name, email, password, salt, }: {
            first_name: string;
            last_name: string;
            email: string;
            password: string;
            salt: string;
        }) => Promise<boolean>;
    };
};
export default resolvers;
//# sourceMappingURL=resolvers.d.ts.map