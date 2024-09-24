import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel
} from "@mui/material";
// import {example_report} from './assets/example-report.ts';
import linux_fs_report from './assets/linux-fs-report.json';
import {getMeasurements, MeasurementField, OrderDirection, sortMeasurements} from "./utils.ts";
import {useEffect, useState} from "react";
import {Measurement} from "./entities/Measurement.ts";
import {Report} from "./entities/Report.ts";


function App() {
    const [measurements, setMeasurements] = useState<Measurement[]>([]);
    const [orderBy, setOrderBy] = useState<MeasurementField>('value');
    const [orderDirection, setOrderDirection] = useState<OrderDirection>('desc');
    const [page, setPage] = useState(0);
    const rowsPerPage = 10;

    useEffect(() => {
        setMeasurements(sortMeasurements(getMeasurements(linux_fs_report as Report), 'value', 'desc'));
    }, []);

    const renderRows = (values: Measurement[]) => {
        const rows = [];
        for (const [i, m] of values.entries()) {
            rows.push(
                <TableRow key={i}>
                    <TableCell>{m.unit_name}</TableCell>
                    <TableCell align="right">{m.value}</TableCell>
                </TableRow>
            )
        }
        return rows;
    }

    const sortRows = (field: MeasurementField) => {
        let direction = orderDirection;
        if (field === orderBy) {
            direction = orderDirection === 'asc' ? 'desc' : 'asc';
        }
        setOrderDirection(direction);
        setOrderBy(field);
        setMeasurements(sortMeasurements(measurements, field, direction));
        setPage(0);
    }

    const handlePageChange = (_: unknown, newPage: number) => {
        setPage(newPage);
    }

    return (
        <Container>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <TableSortLabel active={orderBy === 'unit_name'} direction={orderDirection}
                                                onClick={() => sortRows('unit_name')}>Function</TableSortLabel>
                            </TableCell>
                            <TableCell align="right">
                                <TableSortLabel active={orderBy === 'value'} direction={orderDirection}
                                                onClick={() => sortRows('value')}>Length</TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {renderRows(measurements.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination count={measurements.length} onPageChange={handlePageChange} page={page}
                                             rowsPerPage={rowsPerPage}/>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default App
