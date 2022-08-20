import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledEngineProvider } from '@mui/material/styles';
import styled from "styled-components";

const ImageView = styled.div`
    width : 80px ;
    height : 80px ;
    background-image : url(${props => props.image}) ;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
`

const BaseTable = (props) => {

    const rows = props.rows;
    const titles = props.titles;
    const titleStyle = props.titleStyle;

    return (
        <TableContainer>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        { /*titles.map((title) => {
                                return <TableCell>{title.name}</TableCell>
                            }) */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map((row) => (
                            <TableRow>
                                {Object.keys(row).map((key) => {
                                    return Object.values(titles).find(element => element.type == "img" && ((key == "NFT") || (key == "ProfilePic"))) ? <TableCell width="30%"> <ImageView image={row[key]} /></TableCell> : <TableCell sx={{color : "#DBD8E3", fontFamily: "'Cabin', sans-serif",FontSize : "18px" }}>{row[key]}</TableCell>
                                })}
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BaseTable;
export { ImageView }