import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import { GetLeaderboardData } from "../../data/LeaderboardData";
import "./Leaderboard.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        fontWeight: 'bold',
        fontSize: 18,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, total, percent) {
    return { name, total, percent };
}

const rows = [
    createData("Gabrielle Green", 780, 75),
    createData("Ryan Red (You)", 775, 70),
    createData("Belizabeth Brown", 650, 68),
    createData("Coraline Color", 625, 55),
    createData("Henry Hue", 600, 50),
    createData("Benson Blue", 580, 50),
    createData("Patricia Pink", 500, 45),
    createData("Yennifer Yellow", 350, 35),
    createData("Charles Chartreuse", 200, 25),
    createData("Paul Purple", 150, 20),
    createData("Maria Magenta", 100, 10),
    createData("Bertrand Black", 10, 2),
];


function Leaderboard() {
    const {userId, className } = useParams();
    const [disabled, setDisabled] = useState(false);
    const [useTotal2, setUseTotal2] = useState(false);
    const [leaderboards, SetLeaderboard] = useState([])

    useEffect(() => {
        SetLeaderboard(GetLeaderboardData(className))
    }, [className]);

    const onClick = () => {
        setDisabled(true);
        setUseTotal2(true);
    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            minHeight="100vh"
        >
            <div className="Leaderboard">
                <h1>Course Leaderboard</h1>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 1200, maxWidth: 1700 }} aria-label="customized table">
                        <colgroup>
                            <col width="5%" />
                            <col width="45%" />
                            <col width="25%" />
                            <col width="25%" />
                        </colgroup>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Ranking</StyledTableCell>
                                <StyledTableCell>Student Name</StyledTableCell>
                                <StyledTableCell align="right">Point Total</StyledTableCell>
                                <StyledTableCell align="right">% Course Complete</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        {leaderboards.map((leaderboard) => (
                            !useTotal2 
                                ? (
                                    <TableBody>                                     
                                        {leaderboard.students1.map((student, index) => (
                                            <StyledTableRow key={index}>
                                                <StyledTableCell component="th" scope="row" align="center">
                                                    {index + 1}
                                                </StyledTableCell>
                                                <StyledTableCell>{student.name}</StyledTableCell>
                                                <StyledTableCell align="right">{student.total1}</StyledTableCell>
                                                <StyledTableCell align="right">{student.percent1}%</StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>)
                                : (
                                    <TableBody>
                                        {leaderboard.students2.map((student, index) => (
                                            <StyledTableRow key={index}>
                                                <StyledTableCell component="th" scope="row" align="center">
                                                    {index + 1}
                                                </StyledTableCell>
                                                <StyledTableCell>{student.name}</StyledTableCell>
                                                <StyledTableCell align="right">{student.total2}</StyledTableCell>
                                                <StyledTableCell align="right">{student.percent2}%</StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                )                            
                        ))}                        
                    </Table>
                </TableContainer>
                <Button id="leaderboard" variant="contained" color="primary" onClick={() => onClick()} disabled={disabled} style={{marginTop: "1em"} }>
                    Add 25 Points
                </Button>
            </div>
        </Box>
    );
}

export default Leaderboard;