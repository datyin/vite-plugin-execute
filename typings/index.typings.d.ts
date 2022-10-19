/// <reference types="node" />
import type { SpawnOptions } from "child_process";
export interface VitePluginExecuteOption {
    command?: string;
    args?: string[];
    cwd?: string;
    spawnOptions?: SpawnOptions;
}
