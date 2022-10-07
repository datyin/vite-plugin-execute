import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  return {
    appType: "custom",
    build: {
      target: "node14.18",
      watch: mode === "development" ? {} : null,
      minify: mode === "development" ? false : "esbuild",
      lib: {
        entry: resolve(__dirname, "src/index.ts"),
        fileName: "index",
        formats: ["cjs", "es"]
      },
      rollupOptions: {
        external: [
          "node:child_process",
          "vite"
        ],
        output: {
          strict: false,
          generatedCode: "es2015"
        }
      }
    }
  };
});
