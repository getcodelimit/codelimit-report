import {Report} from "./entities/Report.ts";
import {Measurement} from "./entities/Measurement.ts";

export function getMeasurements(report: Report) {
    const result: Measurement[] = [];
    const files = report.codebase.files;
    for (const [key] of Object.entries(files)) {
        const measurements = files[key].measurements;
        for (const measurement of measurements) {
            result.push(measurement);
        }
    }
    return result;
}