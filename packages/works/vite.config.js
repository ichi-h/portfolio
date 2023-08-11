import path from "path";

import { defineConfig } from "vite";
import Dts from "vite-plugin-dts";

export default defineConfig({
  assetsInclude: ["./pages/**/*.md"],
  plugins: [
    Dts({
      entryRoot: path.resolve(__dirname, "."),
    }),
  ],
  build: {
    emptyOutDir: false,
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      name: "portfolio-works",
      fileName: (format) => `portfolio-works.${format}.js`,
    },
    rollupOptions: {
      external: ["path", "fs", "fs/promises", "process"],
      output: {
        globals: {
          path: "path",
          fs: "fs",
          "fs/promises": "fs/promises",
          process: "process",
        },
      },
    },
  },
});
