#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/92c5c9a021cb02ec8f129c533d97e093a9a6efd465fe23af64a685df4e28c4d3/contract';
import endContract from '../../snapshots/92c5c9a021cb02ec8f129c533d97e093a9a6efd465fe23af64a685df4e28c4d3/contract.json' with { type: 'json' };
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
      this.dropNotNull({ schema: 'public', table: 'users', column: 'profile_image' }),
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
