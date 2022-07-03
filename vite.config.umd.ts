import { defineConfig } from "vite";
import type { UserConfig } from "vite";
import { userConfigBase } from "./vite.config";
import merge from "deepmerge";

const umdConfig = {
  build: {
    outDir: "dist",
    lib: {
      formats: ["umd"],
      fileName: `index`,
    },
  },
} as UserConfig;

export default defineConfig(merge(userConfigBase, umdConfig));
