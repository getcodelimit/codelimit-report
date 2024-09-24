import {getMeasurements, sortMeasurements} from "../src/utils";
import {test_report} from "./assets/test-report";


test('Get units from report', () => {
    const result = getMeasurements(test_report);

    expect(result.length).toBe(5);
})

test('sortMeasurements', () => {
    const result = sortMeasurements(getMeasurements(test_report), 'value', 'desc');

    expect(result[0].value).toBe(50);
    expect(result[1].value).toBe(28);
    expect(result[2].value).toBe(3);
    expect(result[3].value).toBe(3);
    expect(result[4].value).toBe(1);
})