import { defineConfig } from "vite";
import type { UserConfig } from "vite";
import { userConfigBase } from "./vite.config";
import merge from "deepmerge";

const cjsConfig = {
  build: {
    outDir: "lib",
    lib: {
      formats: ["cjs"],
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: `[name].cjs.js`,
      },
    },
  },
} as UserConfig;

export default defineConfig(merge(userConfigBase, cjsConfig));
