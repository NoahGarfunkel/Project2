import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Link, useParams } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";
import "./Upcoming.css";
import "./ProgressBar0.css";
import "./ProgressBar50.css";
import "./ProgressBar100.css";

const assignments = [
  { name: "Assignment 4", due: "Nov 15", page: "assignment_04.html" },
  { name: "Assignment 5", due: "Dec 1", page: "assignment_05.html" },
  //{ name: 'Project 1 Implementation', due: 'Nov 13', page: '07.html' },
  //{ name: 'Project 1 Documentation', due: 'Nov 15', page: '08.html' },
];

const text = {
  color: "white",
};

function Upcoming() {
  const {className} = useParams();
  const [submittedAssignments, setSubmittedAssignments] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(()=>{},[className])

  const handleSubmission = (index) => {
    setSubmittedAssignments((prevState) => {
      const newState = [...prevState, index];
      updateProgress(newState); // Pass the updated state to the function
      return newState; // Return the new state
    });
  };
  
  const updateProgress = (newSubmittedAssignments) => {
    const totalAssignments = assignments.length;
    const submittedCount = newSubmittedAssignments.length; // Use the updated state
    const newProgress = (submittedCount / totalAssignments) * 100;
    setProgress(newProgress);
  };
  

  const getProgressBarClass = () => {
    if (progress === 0) {
      return "0";
    } else if (progress === 50) {
      return "50";
    } else if (progress === 100) {
      return "100";
    }
    return "";
  };

  return (
    <div className="Upcoming">
      <h1>Upcoming Assignments</h1>
      <Button id="all" variant="contained" color="primary" href={`/canvas/class/${className}/assignments`}>
        View All Assignments
      </Button>
      <List>
        {assignments.map((assignment, index) => (
          <ListItem
            key={index}
            button
            component={Link}
            to={`/canvas/class/${className}/assignments/${assignment.page}`}
            style={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "8px",
            }}
          >
            <ListItemText
              secondaryTypographyProps={{ style: text }}
              primary={assignment.name}
              secondary={`Due: ${assignment.due}`}
            />

            {!submittedAssignments.includes(index) ? (
              <Button
                style={{ marginRight: "20px" }}
                variant="contained"
                color="primary"
                component={Link}
                onClick={() => handleSubmission(index)}
              >
                Submit
              </Button>
            ) : (
              <span style={{ marginRight: "20px" }}>Submitted</span>
            )}
          </ListItem>
        ))}
      </List>
      <div className="Assignments">
        <h1>Progress</h1>
        <div className="progress-container">
          <div className="progress-bar">
            <div className={`progress-indicator${getProgressBarClass()}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
