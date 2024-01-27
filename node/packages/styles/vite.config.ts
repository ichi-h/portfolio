import path from "path";

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";
import Dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    Dts({
      entryRoot: path.resolve(__dirname, "./src"),
    }),
    vanillaExtractPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: [
        path.resolve(__dirname, "./src/index.ts"),
        path.resolve(__dirname, "./src/pages/home.ts"),
      ],
      name: "portfolio-styles",
      fileName: (format, entryName) => `portfolio-styles.${entryName}.${format}.js`,
    },
    outDir: path.resolve(__dirname, "./dist"),
  },
});
