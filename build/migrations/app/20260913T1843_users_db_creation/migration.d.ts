#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/f2a34282ea10114c3fe11e41ce40d2e35e37fde6f27c5e02ddcbd3957bb7bb1f/contract';
import { Migration } from '@prisma/orm-postgres/migration';
export default class M extends Migration<never, End> {
    readonly endContractJson: {
        _generated: {
            message: string;
            regenerate: string;
            warning: string;
        };
        capabilities: {
            postgres: {
                distinctOn: boolean;
                jsonAgg: boolean;
                lateral: boolean;
                limit: boolean;
                orderBy: boolean;
                returning: boolean;
            };
            sql: {
                checkConstraint: boolean;
                defaultInInsert: boolean;
                enums: boolean;
                lateral: boolean;
                returning: boolean;
                scalarList: boolean;
            };
        };
        domain: {
            namespaces: {
                public: {
                    models: {
                        User: {
                            fields: {
                                email: {
                                    nullable: boolean;
                                    type: {
                                        codecId: string;
                                        kind: string;
                                    };
                                };
                                first_name: {
                                    nullable: boolean;
                                    type: {
                                        codecId: string;
                                        kind: string;
                                    };
                                };
                                id: {
                                    nullable: boolean;
                                    type: {
                                        codecId: string;
                                        kind: string;
                                    };
                                };
                                last_name: {
                                    nullable: boolean;
                                    type: {
                                        codecId: string;
                                        kind: string;
                                    };
                                };
                                password: {
                                    nullable: boolean;
                                    type: {
                                        codecId: string;
                                        kind: string;
                                    };
                                };
                                profile_image: {
                                    nullable: boolean;
                                    type: {
                                        codecId: string;
                                        kind: string;
                                    };
                                };
                                salt: {
                                    nullable: boolean;
                                    type: {
                                        codecId: string;
                                        kind: string;
                                    };
                                };
                            };
                            relations: {};
                            storage: {
                                fields: {
                                    email: {
                                        column: string;
                                    };
                                    first_name: {
                                        column: string;
                                    };
                                    id: {
                                        column: string;
                                    };
                                    last_name: {
                                        column: string;
                                    };
                                    password: {
                                        column: string;
                                    };
                                    profile_image: {
                                        column: string;
                                    };
                                    salt: {
                                        column: string;
                                    };
                                };
                                namespaceId: string;
                                table: string;
                            };
                        };
                    };
                };
            };
        };
        execution: {
            executionHash: string;
            mutations: {
                defaults: {};
            };
        };
        extensions: {};
        meta: {};
        profileHash: string;
        roots: {
            users: {
                model: string;
                namespace: string;
            };
        };
        schemaVersion: string;
        storage: {
            namespaces: {
                public: {
                    entries: {
                        table: {
                            users: {
                                columns: {
                                    email: {
                                        codecId: string;
                                        nativeType: string;
                                        nullable: boolean;
                                    };
                                    first_name: {
                                        codecId: string;
                                        nativeType: string;
                                        nullable: boolean;
                                    };
                                    id: {
                                        codecId: string;
                                        nativeType: string;
                                        nullable: boolean;
                                    };
                                    last_name: {
                                        codecId: string;
                                        nativeType: string;
                                        nullable: boolean;
                                    };
                                    password: {
                                        codecId: string;
                                        nativeType: string;
                                        nullable: boolean;
                                    };
                                    profile_image: {
                                        codecId: string;
                                        nativeType: string;
                                        nullable: boolean;
                                    };
                                    salt: {
                                        codecId: string;
                                        nativeType: string;
                                        nullable: boolean;
                                    };
                                };
                                foreignKeys: {};
                                indexes: {};
                                primaryKey: {
                                    columns: {};
                                };
                                uniques: {};
                            };
                        };
                    };
                    id: string;
                    kind: string;
                };
            };
            storageHash: string;
        };
        target: string;
        targetFamily: string;
    };
    get operations(): {};
}
//# sourceMappingURL=migration.d.ts.map