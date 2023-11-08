import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";
import "./Assignments.css";

const assignments = [
  { name: 'Assignment 1', page: 'assignment_01.html' },
  { name: 'Assignment 2', page: 'assignment_02.html' },
  { name: 'Assignment 3', page: 'assignment_03.html' },
  { name: 'Assignment 4', page: 'assignment_04.html' },
  { name: 'Assignment 5', page: 'assignment_05.html' },
  { name: 'Pick Project 1 Smart Object', page: '06.html' },
  { name: 'Project 1 Implementation', page: '07.html' },
  { name: 'Project 1 Documentation', page: '08.html' },
];


function Assignments() {
  return (
    <div className="Assignments">
          <h1>Assignments</h1>
          <Button id="upcoming" variant="contained" color="primary" href="/class/upcoming">
              View Upcoming Assignments
          </Button>
      <List>
        {assignments.map((assignment, index) => (
          <ListItem key={index} button component={Link} to={`/assignments/${assignment.page}`} style={{
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '8px',
          }}>
            <ListItemText primary={assignment.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default Assignments;