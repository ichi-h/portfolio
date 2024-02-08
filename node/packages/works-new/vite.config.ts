import path from "path";

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";
import Dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    Dts({
      entryRoot: path.resolve(__dirname, "./styles"),
    }),
    vanillaExtractPlugin(),
  ],
  publicDir: false,
  build: {
    lib: {
      entry: [
        path.resolve(__dirname, "./styles/index.ts"),
        path.resolve(__dirname, "./styles/pages/home.ts"),
        path.resolve(__dirname, "./styles/pages/works.ts"),
        path.resolve(__dirname, "./styles/pages/worksSlug.ts"),
      ],
      name: "portfolio-styles",
      fileName: (_, entryName) => `${entryName}.js`,
      formats: ["es"],
    },
    outDir: path.resolve(__dirname, "./app/styles"),
    copyPublicDir: false,
    rollupOptions: {
      external: [
        path.resolve(__dirname, "./build"),
        path.resolve(__dirname, "./public"),
      ],
    },
  },
});
