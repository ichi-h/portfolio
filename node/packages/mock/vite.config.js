import { defineConfig } from "vite";

export default defineConfig({
  assetsInclude: ["**/*.yaml"],
  server: {
    port: 3010,
    fs: {
      allow: ["../../../schemas", "./"],
    }
  }
});
