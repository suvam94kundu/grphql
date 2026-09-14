import 'dotenv/config';
import postgres from '@prisma/orm-postgres/runtime';
import schemaJson from './schema.json' with { type: 'json' };
export const db = postgres({
    contractJson: schemaJson,
    url: process.env['DATABASE_URL'],
});
//# sourceMappingURL=db.js.map