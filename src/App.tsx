import {Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import report from './assets/codelimit.json';
import {getMeasurements} from "./utils.ts";

function App() {

    const renderRows = () => {
        const rows = [];
        for (const m of getMeasurements(report)) {
            rows.push(
                <TableRow key={m.unit_name}>
                    <TableCell>{m.unit_name}</TableCell>
                </TableRow>
            )
        }
        return rows;
    }

    return (
        <Container>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>File</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {renderRows()}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default App
