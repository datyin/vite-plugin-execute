import type { SpawnOptions } from "child_process";
import type { Plugin } from "vite";

export interface VitePluginExecuteOption {
  command?: string;
  args?: string[];
  cwd?: string;
  spawnOptions?: SpawnOptions;
}

export default function vitePlguinExecute(input: VitePluginExecuteOption): Plugin;
