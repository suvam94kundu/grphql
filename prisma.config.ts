import * as dotenv from "dotenv";
import { definePrismaConfig } from "prisma/config";
import { defineConfig } from "@prisma/orm-postgres/config";

const databaseUrl = dotenv.config().parsed?.DATABASE_URL;

type ProjectConfig = {
  orm: ReturnType<typeof defineConfig>;
  skills: {
    agents: string[];
  };
};

export default definePrismaConfig<ProjectConfig>({
  orm: defineConfig({
    contract: "./src/prisma/schema.prisma",
    db: {
      connection: databaseUrl!,
    },
    migrations: {
      dir: "./src/migrations",
    },
  }),
  skills: {
    agents: ["claude", "cursor", "agents", "devin"],
  },
});