#!/usr/bin/env -S node
import endContract from '../../snapshots/f2a34282ea10114c3fe11e41ce40d2e35e37fde6f27c5e02ddcbd3957bb7bb1f/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, primaryKey } from '@prisma/orm-postgres/migration';
export default class M extends Migration {
    endContractJson = endContract;
    get operations() {
        return [
            this.createSchema({ schema: 'public' }),
            this.createTable({
                schema: 'public',
                table: 'users',
                columns: [
                    col('email', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
                    col('first_name', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
                    col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
                    col('last_name', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
                    col('password', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
                    col('profile_image', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
                    col('salt', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
                ],
                constraints: [primaryKey(['id'])],
            }),
            this.addUnique({
                schema: 'public',
                table: 'users',
                constraint: 'users_email_key',
                columns: ['email'],
            }),
        ];
    }
}
MigrationCLI.run(import.meta.url, M);
//# sourceMappingURL=migration.js.map