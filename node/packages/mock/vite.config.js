import { defineConfig } from "vite";

const port = process.env.PORT || 0;

export default defineConfig({
  assetsInclude: ["**/*.yaml"],
  server: {
    port: port,
    fs: {
      allow: ["../../../schemas", "./"],
    }
  }
});
