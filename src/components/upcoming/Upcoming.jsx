import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";
import "./Upcoming.css";

const assignments = [
    { name: 'Assignment 4', due: 'Nov 15', page: 'assignment_04.html' },
    { name: 'Assignment 5', due: 'Dec 1', page: 'assignment_05.html' },
    { name: 'Project 1 Implementation', due: 'Nov 13', page: '07.html' },
    { name: 'Project 1 Documentation', due: 'Nov 15', page: '08.html' },
];

const text = {
    color: "white"
}


function Upcoming() {
    return (
        <div className="Upcoming">
            <h1>Upcoming Assignments</h1>
            <Button id="all" variant="contained" color="primary" href="/class/assignments">
                View All Assignments
            </Button>
            <List>
                {assignments.map((assignment, index) => (
                    <ListItem key={index} button component={Link} to={`/assignments/${assignment.page}`} style={{
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        marginBottom: '8px',
                    }}>
                        <ListItemText secondaryTypographyProps={{ style: text }}
                            primary={assignment.name} secondary={`Due: ${assignment.due}`} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Upcoming;