#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/264c15f2e1d70ced995f07501eedf9dadc66db0795ff11ce5593bd0f387e0964/contract';
import endContract from '../../snapshots/264c15f2e1d70ced995f07501eedf9dadc66db0795ff11ce5593bd0f387e0964/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/f2a34282ea10114c3fe11e41ce40d2e35e37fde6f27c5e02ddcbd3957bb7bb1f/contract';
import startContract from '../../snapshots/f2a34282ea10114c3fe11e41ce40d2e35e37fde6f27c5e02ddcbd3957bb7bb1f/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, primaryKey } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createTable({
        schema: 'public',
        table: 'posts',
        columns: [
          col('authorId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('content', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('title', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createIndex({
        schema: 'public',
        table: 'posts',
        index: 'posts_authorId_idx_e47547ed',
        columns: ['authorId'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'posts',
        foreignKey: {
          name: 'posts_authorId_fkey',
          columns: ['authorId'],
          references: { schema: 'public', table: 'users', columns: ['id'] },
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
