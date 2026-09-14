export declare const contract: Omit<import("@prisma/orm-postgres/contract/types").Contract<{
    readonly storageHash: import("@prisma/orm-postgres/contract/types").StorageHashBase<string>;
    readonly types?: {};
    readonly namespaces: {
        readonly public: {
            readonly id: "public";
            readonly kind: string;
            readonly entries: {
                readonly table: {
                    readonly Post: {
                        readonly columns: {
                            readonly authorId: {
                                readonly nativeType: string;
                                readonly codecId: "sql/char@1";
                                readonly nullable: false;
                                readonly default?: import("@prisma/orm-postgres/contract/types").ColumnDefault;
                            } & Record<never, never>;
                            readonly id: {
                                readonly nativeType: string;
                                readonly codecId: "sql/char@1";
                                readonly nullable: false;
                                readonly default?: import("@prisma/orm-postgres/contract/types").ColumnDefault;
                            } & Record<never, never>;
                            readonly content: {
                                readonly nativeType: string;
                                readonly codecId: "pg/text@1";
                                readonly nullable: true;
                                readonly default?: import("@prisma/orm-postgres/contract/types").ColumnDefault;
                            } & Record<never, never>;
                            readonly title: {
                                readonly nativeType: string;
                                readonly codecId: "pg/text@1";
                                readonly nullable: false;
                                readonly default?: import("@prisma/orm-postgres/contract/types").ColumnDefault;
                            } & Record<never, never>;
                            readonly createdAt: {
                                readonly nativeType: string;
                                readonly codecId: "pg/timestamptz-string@1";
                                readonly nullable: false;
                                readonly default?: import("@prisma/orm-postgres/contract/types").ColumnDefault;
                            } & Record<never, never>;
                            readonly updatedAt: {
                                readonly nativeType: string;
                                readonly codecId: "pg/timestamptz-string@1";
                                readonly nullable: false;
                                readonly default?: import("@prisma/orm-postgres/contract/types").ColumnDefault;
                            } & Record<never, never>;
                        };
                        readonly uniques: ReadonlyArray<{
                            readonly columns: readonly string[];
                            readonly name?: string;
                        }>;
                        readonly indexes: ReadonlyArray<import("@prisma/orm-family-sql/contract/types").Index>;
                        readonly foreignKeys: ReadonlyArray<{
                            readonly source: {
                                readonly namespaceId: import("@prisma/orm-postgres/contract/types").NamespaceId;
                                readonly tableName: string;
                                readonly columns: readonly string[];
                            };
                            readonly target: {
                                readonly namespaceId: import("@prisma/orm-postgres/contract/types").NamespaceId;
                                readonly spaceId?: string;
                                readonly tableName: string;
                                readonly columns: readonly string[];
                            };
                            readonly name?: string;
                            readonly onDelete?: import("@prisma/orm-family-sql/contract/types").ReferentialAction;
                            readonly onUpdate?: import("@prisma/orm-family-sql/contract/types").ReferentialAction;
                            readonly constraint: boolean;
                            readonly index: boolean;
                        }>;
                    } & {
                        readonly primaryKey: {
                            readonly columns: readonly ["id"];
                            readonly name?: string;
                        };
                    };
                    readonly User: {
                        readonly columns: {
                            readonly id: {
                                readonly nativeType: string;
                                readonly codecId: "sql/char@1";
                                readonly nullable: false;
                                readonly default?: import("@prisma/orm-postgres/contract/types").ColumnDefault;
                            } & Record<never, never>;
                            readonly email: {
                                readonly nativeType: string;
                                readonly codecId: "pg/text@1";
                                readonly nullable: false;
                                readonly default?: import("@prisma/orm-postgres/contract/types").ColumnDefault;
                            } & Record<never, never>;
                            readonly username: {
                                readonly nativeType: string;
                                readonly codecId: "pg/text@1";
                                readonly nullable: true;
                                readonly default?: import("@prisma/orm-postgres/contract/types").ColumnDefault;
                            } & Record<never, never>;
                            readonly name: {
                                readonly nativeType: string;
                                readonly codecId: "pg/text@1";
                                readonly nullable: true;
                                readonly default?: import("@prisma/orm-postgres/contract/types").ColumnDefault;
                            } & Record<never, never>;
                            readonly createdAt: {
                                readonly nativeType: string;
                                readonly codecId: "pg/timestamptz-string@1";
                                readonly nullable: false;
                                readonly default?: import("@prisma/orm-postgres/contract/types").ColumnDefault;
                            } & Record<never, never>;
                            readonly updatedAt: {
                                readonly nativeType: string;
                                readonly codecId: "pg/timestamptz-string@1";
                                readonly nullable: false;
                                readonly default?: import("@prisma/orm-postgres/contract/types").ColumnDefault;
                            } & Record<never, never>;
                        };
                        readonly uniques: ReadonlyArray<{
                            readonly columns: readonly string[];
                            readonly name?: string;
                        }>;
                        readonly indexes: ReadonlyArray<import("@prisma/orm-family-sql/contract/types").Index>;
                        readonly foreignKeys: ReadonlyArray<{
                            readonly source: {
                                readonly namespaceId: import("@prisma/orm-postgres/contract/types").NamespaceId;
                                readonly tableName: string;
                                readonly columns: readonly string[];
                            };
                            readonly target: {
                                readonly namespaceId: import("@prisma/orm-postgres/contract/types").NamespaceId;
                                readonly spaceId?: string;
                                readonly tableName: string;
                                readonly columns: readonly string[];
                            };
                            readonly name?: string;
                            readonly onDelete?: import("@prisma/orm-family-sql/contract/types").ReferentialAction;
                            readonly onUpdate?: import("@prisma/orm-family-sql/contract/types").ReferentialAction;
                            readonly constraint: boolean;
                            readonly index: boolean;
                        }>;
                    } & {
                        readonly primaryKey: {
                            readonly columns: readonly ["id"];
                            readonly name?: string;
                        };
                    };
                };
            };
        };
    } & {};
}>, "domain"> & {
    readonly target: "postgres";
    readonly targetFamily: "sql";
} & {
    readonly domain: {
        readonly namespaces: Readonly<Record<string, {
            readonly models: {
                readonly Post: {
                    readonly storage: {
                        readonly table: "Post";
                        readonly fields: {
                            readonly authorId: {
                                readonly column: "authorId";
                            };
                            readonly id: {
                                readonly column: "id";
                            };
                            readonly content: {
                                readonly column: "content";
                            };
                            readonly title: {
                                readonly column: "title";
                            };
                            readonly createdAt: {
                                readonly column: "createdAt";
                            };
                            readonly updatedAt: {
                                readonly column: "updatedAt";
                            };
                        };
                    };
                    readonly fields: {
                        readonly authorId: {
                            readonly nullable: false;
                            readonly type: {
                                readonly kind: "scalar";
                                readonly codecId: "sql/char@1";
                            };
                        };
                        readonly id: {
                            readonly nullable: false;
                            readonly type: {
                                readonly kind: "scalar";
                                readonly codecId: "sql/char@1";
                            };
                        };
                        readonly content: {
                            readonly nullable: true;
                            readonly type: {
                                readonly kind: "scalar";
                                readonly codecId: "pg/text@1";
                            };
                        };
                        readonly title: {
                            readonly nullable: false;
                            readonly type: {
                                readonly kind: "scalar";
                                readonly codecId: "pg/text@1";
                            };
                        };
                        readonly createdAt: {
                            readonly nullable: false;
                            readonly type: {
                                readonly kind: "scalar";
                                readonly codecId: "pg/timestamptz-string@1";
                            };
                        };
                        readonly updatedAt: {
                            readonly nullable: false;
                            readonly type: {
                                readonly kind: "scalar";
                                readonly codecId: "pg/timestamptz-string@1";
                            };
                        };
                    };
                    readonly relations: {
                        readonly author: import("@prisma/orm-postgres/contract/types").ContractRelation;
                    };
                };
                readonly User: {
                    readonly storage: {
                        readonly table: "User";
                        readonly fields: {
                            readonly id: {
                                readonly column: "id";
                            };
                            readonly email: {
                                readonly column: "email";
                            };
                            readonly username: {
                                readonly column: "username";
                            };
                            readonly name: {
                                readonly column: "name";
                            };
                            readonly createdAt: {
                                readonly column: "createdAt";
                            };
                            readonly updatedAt: {
                                readonly column: "updatedAt";
                            };
                        };
                    };
                    readonly fields: {
                        readonly id: {
                            readonly nullable: false;
                            readonly type: {
                                readonly kind: "scalar";
                                readonly codecId: "sql/char@1";
                            };
                        };
                        readonly email: {
                            readonly nullable: false;
                            readonly type: {
                                readonly kind: "scalar";
                                readonly codecId: "pg/text@1";
                            };
                        };
                        readonly username: {
                            readonly nullable: true;
                            readonly type: {
                                readonly kind: "scalar";
                                readonly codecId: "pg/text@1";
                            };
                        };
                        readonly name: {
                            readonly nullable: true;
                            readonly type: {
                                readonly kind: "scalar";
                                readonly codecId: "pg/text@1";
                            };
                        };
                        readonly createdAt: {
                            readonly nullable: false;
                            readonly type: {
                                readonly kind: "scalar";
                                readonly codecId: "pg/timestamptz-string@1";
                            };
                        };
                        readonly updatedAt: {
                            readonly nullable: false;
                            readonly type: {
                                readonly kind: "scalar";
                                readonly codecId: "pg/timestamptz-string@1";
                            };
                        };
                    };
                    readonly relations: {
                        readonly posts: import("@prisma/orm-postgres/contract/types").ContractRelation;
                    };
                };
            };
            readonly valueObjects?: Record<string, import("@prisma/orm-postgres/contract/types").ContractValueObject>;
            readonly enum?: Record<string, import("@prisma/orm-postgres/contract/types").ContractEnum>;
        }>>;
    } & Record<string, never>;
} & {
    readonly extensions: Record<string, never>;
    readonly capabilities: Record<string, never>;
    readonly enumAccessors: {};
} & {
    readonly "__@internal/sql-contract/typeMaps@__"?: import("@prisma/orm-family-sql/contract/types").TypeMaps<{
        readonly "sql/char@1": Pick<{
            readonly input: string;
            readonly output: string;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "equality" | "order" | "textual";
        }, "output" | "traits" | "input">;
        readonly "sql/varchar@1": Pick<{
            readonly input: string;
            readonly output: string;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "equality" | "order" | "textual";
        }, "output" | "traits" | "input">;
        readonly "sql/int@1": Pick<{
            readonly input: number;
            readonly output: number;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "numeric" | "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "sql/float@1": Pick<{
            readonly input: number;
            readonly output: number;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "numeric" | "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "sql/text@1": Pick<{
            readonly input: string;
            readonly output: string;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "equality" | "order" | "textual";
        }, "output" | "traits" | "input">;
        readonly "pg/text@1": Pick<{
            readonly input: string;
            readonly output: string;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "equality" | "order" | "textual";
        }, "output" | "traits" | "input">;
        readonly "pg/enum@1": Pick<{
            readonly input: string;
            readonly output: string;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "equality" | "order" | "textual";
        }, "output" | "traits" | "input">;
        readonly "pg/char@1": Pick<{
            readonly input: string;
            readonly output: string;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "equality" | "order" | "textual";
        }, "output" | "traits" | "input">;
        readonly "pg/varchar@1": Pick<{
            readonly input: string;
            readonly output: string;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "equality" | "order" | "textual";
        }, "output" | "traits" | "input">;
        readonly "pg/int@1": Pick<{
            readonly input: number;
            readonly output: number;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "numeric" | "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "pg/float@1": Pick<{
            readonly input: number;
            readonly output: number;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "numeric" | "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "pg/int4@1": Pick<{
            readonly input: number;
            readonly output: number;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "numeric" | "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "pg/int2@1": Pick<{
            readonly input: number;
            readonly output: number;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "numeric" | "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "pg/int8@1": Pick<{
            readonly input: bigint;
            readonly output: bigint;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "numeric" | "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "pg/int8number@1": Pick<{
            readonly input: number;
            readonly output: number;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "numeric" | "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "pg/float4@1": Pick<{
            readonly input: number;
            readonly output: number;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "numeric" | "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "pg/float8@1": Pick<{
            readonly input: number;
            readonly output: number;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "numeric" | "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "pg/numeric@1": Pick<{
            readonly input: string;
            readonly output: string;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "numeric" | "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "pg/unboundedint@1": Pick<{
            readonly input: bigint;
            readonly output: bigint;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "numeric" | "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "pg/date-temporal@1": Pick<{
            readonly input: Temporal.PlainDate;
            readonly output: Temporal.PlainDate;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "pg/timestamp-temporal@1": Pick<{
            readonly input: Temporal.PlainDateTime;
            readonly output: Temporal.PlainDateTime;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "pg/timestamptz-temporal@1": Pick<{
            readonly input: Temporal.Instant;
            readonly output: Temporal.Instant;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "pg/time-temporal@1": Pick<{
            readonly input: Temporal.PlainTime;
            readonly output: Temporal.PlainTime;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "pg/date-string@1": Pick<{
            readonly input: string;
            readonly output: string;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "pg/timestamp-string@1": Pick<{
            readonly input: string;
            readonly output: string;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "pg/timestamptz-string@1": Pick<{
            readonly input: string;
            readonly output: string;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "pg/time-string@1": Pick<{
            readonly input: string;
            readonly output: string;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "pg/timetz@1": Pick<{
            readonly input: string;
            readonly output: string;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "pg/bool@1": Pick<{
            readonly input: boolean;
            readonly output: boolean;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "boolean" | "equality";
        }, "output" | "traits" | "input">;
        readonly "pg/bit@1": Pick<{
            readonly input: string;
            readonly output: string;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "pg/varbit@1": Pick<{
            readonly input: string;
            readonly output: string;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "pg/bytea@1": Pick<{
            readonly input: Uint8Array<ArrayBufferLike>;
            readonly output: Uint8Array<ArrayBufferLike>;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "equality";
        }, "output" | "traits" | "input">;
        readonly "pg/uuid@1": Pick<{
            readonly input: string;
            readonly output: string;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "pg/inet@1": Pick<{
            readonly input: string;
            readonly output: string;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "pg/interval@1": Pick<{
            readonly input: import("@prisma/orm-target-postgres/target/codecs").PgInterval;
            readonly output: import("@prisma/orm-target-postgres/target/codecs").PgInterval;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "equality" | "order";
        }, "output" | "traits" | "input">;
        readonly "pg/json@1": Pick<{
            readonly input: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly output: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: never;
        }, "output" | "traits" | "input">;
        readonly "pg/jsonb@1": Pick<{
            readonly input: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly output: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly json: import("@prisma/orm-target-postgres/target/codec-types").JsonValue;
            readonly traits: "equality";
        }, "output" | "traits" | "input">;
    } & Record<string, never>, Record<string, never>, {
        readonly public: {
            readonly Post: {
                readonly authorId: string;
                readonly id: string;
                readonly content: string | null;
                readonly title: string;
                readonly createdAt: string;
                readonly updatedAt: string;
            };
            readonly User: {
                readonly id: string;
                readonly email: string;
                readonly username: string | null;
                readonly name: string | null;
                readonly createdAt: string;
                readonly updatedAt: string;
            };
        };
    }, {
        readonly public: {
            readonly Post: {
                readonly authorId: string;
                readonly id: string;
                readonly content: string | null;
                readonly title: string;
                readonly createdAt: string;
                readonly updatedAt: string;
            };
            readonly User: {
                readonly id: string;
                readonly email: string;
                readonly username: string | null;
                readonly name: string | null;
                readonly createdAt: string;
                readonly updatedAt: string;
            };
        };
    }, {
        readonly public: {
            readonly Post: {
                readonly authorId: string;
                readonly id: string;
                readonly content: string | null;
                readonly title: string;
                readonly createdAt: string;
                readonly updatedAt: string;
            };
            readonly User: {
                readonly id: string;
                readonly email: string;
                readonly username: string | null;
                readonly name: string | null;
                readonly createdAt: string;
                readonly updatedAt: string;
            };
        };
    }, {
        readonly public: {
            readonly Post: {
                readonly authorId: string;
                readonly id: string;
                readonly content: string | null;
                readonly title: string;
                readonly createdAt: string;
                readonly updatedAt: string;
            };
            readonly User: {
                readonly id: string;
                readonly email: string;
                readonly username: string | null;
                readonly name: string | null;
                readonly createdAt: string;
                readonly updatedAt: string;
            };
        };
    }>;
};
//# sourceMappingURL=contract.d.ts.map