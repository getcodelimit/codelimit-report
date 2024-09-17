import {Measurement} from "./Measurement.ts";

export interface SourceFileEntry {
    language: string;
    measurements: Measurement[];
}