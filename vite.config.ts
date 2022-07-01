/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import rollupDelete from "rollup-plugin-delete";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      outputDir: "dist",
      staticImport: true,
      insertTypesEntry: true,
    }),
  ],
  test: {
    environment: "happy-dom",
  },
  server: {
    port: 9527,
    host: "0.0.0.0",
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "es-ui",
      fileName: module => `es-ui.${module}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
      plugins: [
        rollupDelete({
          targets: "dist/*.{ico,txt}",
          verbose: true,
          hook: "generateBundle",
        }),
      ],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "es-ui": resolve(__dirname, "src/packages"),
    },
  },
});
