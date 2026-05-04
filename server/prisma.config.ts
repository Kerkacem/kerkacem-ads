import { defineConfig, env } from 'prisma/config';
import 'dotenv/config';

export default defineConfig({
  schema: './server/prisma/schema.prisma',
  datasource: {
    url: env('DATABASE_URL') || "postgresql://user:password@localhost:5432/mydb",
  },
});
