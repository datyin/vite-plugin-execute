import { defineConfig } from "vite";
import vitePluginExecute from "vite-plugin-execute";

export default defineConfig({
  plugins: [
    vitePluginExecute({
      args: [
        "SOME_PREPEND_ARG=true",
        "./server.js",
        "--mode dev"
      ]
    })
  ]
});
