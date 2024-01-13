import path from "path";

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import React from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import Dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    React(),
    Dts({
      entryRoot: path.resolve(__dirname, "src"),
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
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "portfolio-ui",
      fileName: (format) => `portfolio-ui.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
