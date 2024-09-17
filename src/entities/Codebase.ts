import {SourceFileEntry} from "./SourceFileEntry.ts";

export interface Codebase {
    files: { [path: string]: SourceFileEntry };
}