import "dotenv/config";
import { defineConfig } from "@prisma/orm-postgres/config";
type ProjectConfig = {
    orm: ReturnType<typeof defineConfig>;
    skills: {
        agents: string[];
    };
};
declare const _default: ProjectConfig & {
    readonly $prismaConfig: number;
};
export default _default;
//# sourceMappingURL=prisma.config.d.ts.map