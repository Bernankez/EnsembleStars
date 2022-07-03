/// <reference types="vitest" />
import { defineConfig } from "vite";
import type { UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import rollupDelete from "rollup-plugin-delete";
import { resolve } from "path";

export const userConfigBase: UserConfig = {
  plugins: [
    vue(),
    dts({
      entryRoot: "src",
      staticImport: true,
      insertTypesEntry: true,
      skipDiagnostics: false,
      logDiagnostics: true,
    }),
  ],
  test: {
    environment: "happy-dom",
  },
  server: {
    port: 9527,
    host: "0.0.0.0",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "es-ui": resolve(__dirname, "src/packages"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "es",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
      // plugins: [
      // rollupDelete({
      //   targets: "dist/*.{ico,txt}",
      //   verbose: true,
      //   hook: "generateBundle",
      // }),
      // ],
    },
  },
};

// https://vitejs.dev/config/
export default defineConfig(userConfigBase);
