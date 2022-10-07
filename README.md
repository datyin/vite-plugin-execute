# vite-plugin-execute
Vite plugin that allow you to execute script (or any kind of process) after build

---

## Installation
> NPM
```
npm install vite-plugin-execute --save-dev
```

> Yarn
```
yarn add -D vite-plugin-execute
```

> PNPM
```
pnpm add -D vite-plugin-execute
```

---

## API
```ts
export interface VitePluginExecuteOption {
  command?: string; // default: "node"
  args?: string[];  // default: "[.]" -- equal to node .
  cwd?: string;     // default vite's outDir
  spawnOptions?: ChildProcess.SpawnOptions;
}
```

You can read more about `spawnOptions` on official [NodeJS documentation](https://nodejs.org/api/child_process.html#child_processspawncommand-args-options).

# Usage
You can find [more examples here](https://github.com/datyin/vite-plugin-execute/tree/main/examples)

## Basic

```ts
import { defineConfig } from "vite";
import vitePluginExecute from "vite-plugin-execute";

export default defineConfig({
  plugins: [
    vitePluginExecute()
  ]
});
```

## Execute Electron
```ts
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
```
