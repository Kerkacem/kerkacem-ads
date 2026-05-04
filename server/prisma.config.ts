import { defineSchema } from '@prisma/client';
// Fix: Handle potential undefined env variable safely
export default defineSchema({
  datasource: {
    url: process.env["DATABASE_URL"] || "postgresql://user:password@localhost:5432/mydb",
  },
});
