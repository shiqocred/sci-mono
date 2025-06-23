import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('Missing DATABASE_URL environment variable');
}

export default defineConfig({
  out: 'libs/db/drizzle',
  schema: 'libs/db/src/schema/index.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: databaseUrl,
  },
});
