import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Link, useParams } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";
import "./Assignments.css";

const assignments = [
  { class: 'user-interface', name: 'Assignment 1', page: 'assignment_01.html' },
  { class: 'user-interface', name: 'Assignment 2', page: 'assignment_02.html' },
  { class: 'user-interface', name: 'Assignment 3', page: 'assignment_03.html' },
  { class: 'user-interface', name: 'Assignment 4', page: 'assignment_04.html' },
  { class: 'user-interface', name: 'Assignment 5', page: 'assignment_05.html' },
  { class: 'user-interface', name: 'Pick Project 1 Smart Object', page: '06.html' },
  { class: 'user-interface', name: 'Project 1 Implementation', page: '07.html' },
  { class: 'user-interface', name: 'Project 1 Documentation', page: '08.html' },
  { class: 'senior-design', name: 'Assignment 1', page: 'assignment_01.html' },
  { class: 'senior-design', name: 'Assignment 2', page: 'assignment_02.html' },
  { class: 'senior-design', name: 'Assignment 3', page: 'assignment_03.html' },
  { class: 'senior-design', name: 'Assignment 4', page: 'assignment_04.html' },
  { class: 'senior-design', name: 'Assignment 5', page: 'assignment_05.html' },
  { class: 'senior-design', name: 'Assignment 6', page: 'assignment_06.html' },
  { class: 'computer-graphics', name: 'Assignment 1', page: 'assignment_01.html' },
  { class: 'computer-graphics', name: 'Assignment 2', page: 'assignment_02.html' },
  { class: 'computer-graphics', name: 'Assignment 3', page: 'assignment_03.html' },
  { class: 'computer-graphics', name: 'Assignment 4', page: 'assignment_04.html' },
  { class: 'computer-graphics', name: 'Assignment 5', page: 'assignment_05.html' },
  { class: 'computer-graphics', name: 'Assignment 6', page: 'assignment_06.html' },
  { class: 'computer-graphics', name: 'Assignment 7', page: 'assignment_07.html' },
  { class: 'computer-graphics', name: 'Assignment 8', page: 'assignment_08.html' },
  { class: 'computer-graphics', name: 'Assignment 9', page: 'assignment_09.html' },
];


function Assignments() {
  const {userId, className} = useParams();
  const [filteredAssignments, SetFilteredAssignments] = useState([]);

  useEffect(()=>{
    SetFilteredAssignments(assignments.filter(x=> x.class == className))
  }, [className, filteredAssignments]);
  
  return (
    <div className="Assignments">
          <h1>Assignments</h1>
          <Button id="upcoming" variant="contained" color="primary" href={`/canvas/user/${userId}/class/${className}/upcoming`}>
              View Upcoming Assignments
          </Button>
      <List>
        {filteredAssignments.map((assignment, index) => (
          <ListItem key={index} button component={Link} to={`/canvas/user/${userId}/class/${className}/assignments/${assignment.page}`} style={{
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