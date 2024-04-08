import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        background: "src/background.ts",
      },
      output: {
        entryFileNames: `[name].js`, // optional: name schema for output files
      },
    },
  },
});
