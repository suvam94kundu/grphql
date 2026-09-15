#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/3b204c5af48d4e08ac8985d12bca8888dc28f89d2b5304557f5fd33255ad1304/contract';
import endContract from '../../snapshots/3b204c5af48d4e08ac8985d12bca8888dc28f89d2b5304557f5fd33255ad1304/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/92c5c9a021cb02ec8f129c533d97e093a9a6efd465fe23af64a685df4e28c4d3/contract';
import startContract from '../../snapshots/92c5c9a021cb02ec8f129c533d97e093a9a6efd465fe23af64a685df4e28c4d3/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [this.dropNotNull({ schema: 'public', table: 'users', column: 'last_name' })];
  }
}

MigrationCLI.run(import.meta.url, M);
