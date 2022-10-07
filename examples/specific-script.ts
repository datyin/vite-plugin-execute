import { defineConfig } from "vite";
import vitePluginExecute from "vite-plugin-execute";

export default defineConfig({
  plugins: [
    vitePluginExecute({
      args: ["./server.js"]
    })
  ]
});
