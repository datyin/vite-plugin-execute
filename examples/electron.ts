import { defineConfig } from "vite";
import vitePluginExecute from "vite-plugin-execute";
import electron from "electron";

export default defineConfig({
  plugins: [
    vitePluginExecute({
      command: electron,
      args: ["./main.js"]
    })
  ]
});
