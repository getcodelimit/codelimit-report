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

export type MeasurementField = 'unit_name' | 'value';

export type OrderDirection = 'asc' | 'desc';

export function sortMeasurements(measurements: Measurement[], orderBy: MeasurementField, orderDirection: OrderDirection) {
    return measurements.sort((a, b) => {
        if (orderDirection === 'asc') {
            return a[orderBy] < b[orderBy] ? -1 : 1;
        } else {
            return a[orderBy] < b[orderBy] ? 1 : -1;
        }
    });
}