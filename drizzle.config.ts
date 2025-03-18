import type { Config } from 'drizzle-kit';

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL, ensure the database is provisioned");
}

export default {
  schema: './shared/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:WqPusFEkgBrutRSzIHZLJmOMdpIodubn@ballast.proxy.rlwy.net:23666/railway',
  },
  verbose: true,
  strict: true,
} satisfies Config;
