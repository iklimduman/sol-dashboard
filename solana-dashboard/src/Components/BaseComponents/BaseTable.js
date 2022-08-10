import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledEngineProvider } from '@mui/material/styles';

const BaseTable = (props) => {

    const rows = props.rows;
    const titles = props.titles;
    const titleStyle = props.titleStyle;

    return (
        <StyledEngineProvider injectFirst>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {titles.map((title) => {
                                return <TableCell>{title}</TableCell>
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map((row) => (
                                <TableRow>
                                    {Object.keys(row).map((key) => (
                                        <TableCell>{row[key]}</TableCell>
                                    ))}
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </StyledEngineProvider>
    )
}

export default BaseTable;