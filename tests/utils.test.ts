import {getMeasurements} from "../src/utils";

const report = {
    "version": "0.9.5",
    "uuid": "9a3cc45b-3ab6-43a8-9078-9b91074db2ce",
    "root": "/Users/rob/projects/opensource/maestro",
    "codebase": {
        "tree": {},
        "files": {
            "maestro-engine/src/testFixtures/java/com/netflix/maestro/engine/MaestroTestHelper.java": {
                "checksum": "87fbb50ad4b19d41587bdf6cf9b160d7",
                "language": "Java",
                "loc": 96,
                "profile": [7, 28, 50, 0],
                "measurements": [
                    {
                        "unit_name": "MaestroTestHelper",
                        "start": {"line": 22, "column": 11},
                        "end": {"line": 22, "column": 33},
                        "value": 1
                    },
                    {
                        "unit_name": "removeWorkflow",
                        "start": {"line": 31, "column": 21},
                        "end": {"line": 33, "column": 4},
                        "value": 3
                    },
                    {
                        "unit_name": "deleteWorkflow",
                        "start": {"line": 35, "column": 21},
                        "end": {"line": 37, "column": 4},
                        "value": 3
                    },
                    {
                        "unit_name": "deleteWorkflowInternal",
                        "start": {"line": 39, "column": 22},
                        "end": {"line": 89, "column": 4},
                        "value": 50
                    },
                    {
                        "unit_name": "removeWorkflowInstance",
                        "start": {"line": 92, "column": 21},
                        "end": {"line": 119, "column": 4},
                        "value": 28
                    }
                ]
            },
            "maestro-engine/src/main/java/com/netflix/maestro/engine/dto/MaestroWorkflowVersion.java": {
                "checksum": "1f32278c0d1460a9534ac170ee1d2437",
                "language": "Java",
                "loc": 13,
                "profile": [0, 0, 0, 0],
                "measurements": []
            }
        }
    }
};


test('Get units from report', () => {
    const result = getMeasurements(report);

    for (const measurement of result) {
        console.log(measurement.unit_name);
    }
})