/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
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
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
