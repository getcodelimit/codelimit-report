import {Location} from "./Location.ts";

export interface Measurement {
    unit_name: string;
    start: Location;
    end: Location;
    value: number;
}