import { spawn, type ChildProcess } from "node:child_process";
import type { Plugin } from "vite";
import type { VitePluginExecuteOption } from "../typings";

export default function vitePlguinExecute(input: VitePluginExecuteOption): Plugin {
  let command = typeof input?.command === "string" ? input.command.trim() : "";
  if (!command) command = "node";

  const cwd = typeof input?.cwd === "string" ? input.command?.trim() : "";
  const spawnOptions = input?.spawnOptions ?? {};

  const args: string[] = [];

  if (Array.isArray(input?.args) && input.args.length > 0) {
    args.push(...input.args);
  } else {
    args.push(".");
  }

  let cp: ChildProcess | null = null;

  return {
    name: "vite-plugin-execute",
    apply: "build",
    enforce: "post",
    buildStart() {
      if (cp) {
        cp.removeAllListeners();
        cp.kill();
      }
    },
    writeBundle(options) {
      cp = spawn(command, args, {
        stdio: "inherit",
        ...spawnOptions,
        cwd: cwd || options.dir || process.cwd()
      });
    }
  };
}
