import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Link, useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { List, ListItem, ListItemText } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Tooltip from '@mui/material/Tooltip';
import "./Upcoming.css";
import "./ProgressBar.css";

const assignmentSets = {
  'user-interface': [
    [
      { name: "Assignment 1", due: "Sept 15", page: "assignment_01.html" },
      { name: "Assignment 2", due: "Oct 1", page: "assignment_02.html" },
      { name: "Assignment 3", due: "Oct 15", page: "assignment_03.html" },
    ],
    [
      { name: "Assignment 5", due: "Nov 15", page: "assignment_05.html" },
      { name: 'Project 1 Implementation', due: "Nov 29", page: '07.html' },
      { name: 'Project 1 Documentation', due: "Dec 1", page: '08.html' },
    ],
    // Add more sets as needed
  ],
  'senior-design': [
    [
      { name: "Assignment 1", due: "Sept 18", page: "assignment_01.html" },
      { name: "Assignment 2", due: "Oct 12", page: "assignment_02.html" },
      { name: "Assignment 3", due: "Dec 10", page: "assignment_03.html" },
    ],
    [
      { name: "Assignment 5", due: "Nov 18", page: "assignment_05.html" },
      { name: "Assignment 6", due: "Dec 26", page: "assignment_06.html" },
    ],
    // Add more sets as needed
  ],
  'computer-graphics': [
    [
      { name: "Assignment 1", due: "Sept 15", page: "assignment_01.html" },
      { name: "Assignment 2", due: "Sept 20", page: "assignment_02.html" },
      { name: "Assignment 3", due: "Oct 2", page: "assignment_03.html" },
    ],
    [
      { name: "Assignment 7", due: "Nov 7", page: "assignment_07.html" },
      { name: "Assignment 8", due: "Nov 15", page: "assignment_08.html" },
      { name: "Assignment 9", due: "Dec 3", page: "assignment_09.html" },
    ],
    // Add more sets as needed
  ],
};

function Upcoming() {
  const { userId, className } = useParams();
  const [submittedAssignments, setSubmittedAssignments] = useState([]);
  const [currentSet, setCurrentSet] = useState(0);
  const [assignments, setAssignments] = useState(assignmentSets[className][currentSet]);
  const [progress, setProgress] = useState(0);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  useEffect(() => {
    setAssignments(assignmentSets[className][currentSet]);
  }, [className, currentSet]);

  const handleSubmission = (index) => {
    setSubmittedAssignments((prevState) => {
      const newState = [...prevState, index];
      updateProgress(newState);
      return newState;
    });
    if (index === 0) {
      setOpen1(true);
    }
    else {
      setOpen2(true);
    }
  };

  const updateProgress = (newSubmittedAssignments) => {
    const totalAssignments = assignments.length;
    const submittedCount = newSubmittedAssignments.length;
    const newProgress = (submittedCount / totalAssignments) * 100;
    setProgress(newProgress);
  };

  const getProgressBarStyle = () => {
    return {
      width: `${progress}%`,
    };
  };

  const handleNext = () => {
    const nextSet = currentSet + 1;
    if (nextSet < assignmentSets[className].length) {
      setCurrentSet(nextSet);
      setAssignments(assignmentSets[className][nextSet]);
      setProgress(0);
      setSubmittedAssignments([]);
    }
  };

  const handleTextFieldClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen1(false);
    setOpen2(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className="Upcoming">
      <h1>Upcoming Assignments</h1>
      <Button id="all" variant="contained" color="primary" href={`/canvas/user/${userId}/class/${className}/assignments`}>
        View All Assignments
      </Button>
      <Button
        style={{ float: "right" }}
        variant="contained"
        color="primary"
        onClick={handleNext}
      >
        Next
      </Button>
      <List>
        {assignments.map((assignment, index) => (
          <ListItem
            key={index}
            button
            component={Link}
            to={`/canvas/user/${userId}/class/${className}/assignments/${assignment.page}`}
            style={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "8px",
            }}
          >
            <ListItemText
              secondaryTypographyProps={{ style: { color: "white" } }}
              primary={assignment.name}
              secondary={`Due: ${assignment.due}`}
            />
            {!submittedAssignments.includes(index) ? (
              <>
                <Tooltip title={index === 0 ? "Submit" : "Submit Early for an extra 5 points!"}>
                  <Button
                    style={{ marginRight: "20px" }}
                    variant="contained"
                    color="primary"
                    component={Link}
                    onClick={() => handleSubmission(index)}
                  >
                    Submit
                  </Button>
                </Tooltip>
                <TextField
                  label="Text Field"
                  variant="outlined"
                  size="small"
                  style={{ marginRight: "20px" }}
                  onClick={handleTextFieldClick}
                  InputProps={{
                    style: {
                      color: 'black', // Change this to the desired text color
                      backgroundColor: 'lightgray', // Change this to the desired background color
                    },
                  }}
                />
                <Button
                  style={{ marginRight: "20px" }}
                  variant="contained"
                  color="primary"
                  component={Link}
                >
                  Upload
                </Button>
              </>
            ) : (
              <span style={{ marginRight: "20px" }}>Submitted</span>
            )}
          </ListItem>
        ))}
      </List>
      <div className="Assignments">
        <h1>Level Up Progress</h1>
        <div className="progress-container"> XP
          <div className="progress-bar">
            <div className="progress-indicator" style={getProgressBarStyle()}></div>
          </div>
        </div>
        <Snackbar
          open={open1}
          autoHideDuration={6000}
          onClose={handleClose}
          message="+20 points!"
          action={action}
        />
        <Snackbar
          open={open2}
          autoHideDuration={6000}
          onClose={handleClose}
          message="+25 points!"
          action={action}
        />
      </div>
    </div>
  );
}

export default Upcoming;