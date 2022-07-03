import { defineConfig } from "vite";
import type { UserConfig } from "vite";
import { userConfigBase } from "./vite.config";
import merge from "deepmerge";

const esmConfig = {
  build: {
    outDir: "es",
    lib: {
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: "src/packages",
        entryFileNames: `[name].es.js`,
      },
    },
  },
} as UserConfig;

export default defineConfig(merge(userConfigBase, esmConfig));
