import {Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import report from './assets/codelimit.json';

function App() {

    const renderRows = () => {
        const rows = [];
        for (const [key] of Object.entries(report['codebase']['files'])) {
            rows.push(
                <TableRow key={key}>
                    <TableCell>{key}</TableCell>
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
