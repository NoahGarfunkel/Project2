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
import "./ProgressBar0.css";
import "./ProgressBar50.css";
import "./ProgressBar100.css";

const assignments = [
  { class: 'user-interface', name: "Assignment 4", due: "Nov 15", page: "assignment_04.html" },
  { class: 'user-interface', name: "Assignment 5", due: "Dec 1", page: "assignment_05.html" },
  { class: 'senior-design', name: "Assignment 5", due: "Nov 18", page: "assignment_05.html" },
  { class: 'senior-design', name: "Assignment 6", due: "Nov 26", page: "assignment_06.html" },
  { class: 'computer-graphics', name: "Assignment 8", due: "Nov 15", page: "assignment_08.html" },
  { class: 'computer-graphics', name: "Assignment 9", due: "Dec 3", page: "assignment_09.html" },
  //{ name: 'Project 1 Implementation', due: 'Nov 13', page: '07.html' },
  //{ name: 'Project 1 Documentation', due: 'Nov 15', page: '08.html' },
];

const text = {
  color: "white",
};

function Upcoming() {
  const {userId, className} = useParams();
  const [submittedAssignments, setSubmittedAssignments] = useState([]);
  const [filteredAssignments, SetFilteredAssignments] = useState([]);
  const [progress, setProgress] = useState(0);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

  useEffect(()=>{
    SetFilteredAssignments(assignments.filter(x => x.class === className))
  },[className, filteredAssignments])

  const handleSubmission = (index) => {
    setSubmittedAssignments((prevState) => {
      const newState = [...prevState, index];
      updateProgress(newState); // Pass the updated state to the function
      return newState; // Return the new state
    });
      if (index == 0) {
          setOpen1(true);
      }
      else {
          setOpen2(true);
      }
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
  
  const updateProgress = (newSubmittedAssignments) => {
    const totalAssignments = filteredAssignments.length;
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

  const handleTextFieldClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="Upcoming">
      <h1>Upcoming Assignments</h1>
      <Button id="all" variant="contained" color="primary" href={`/canvas/user/${userId}/class/${className}/assignments`}>
        View All Assignments
      </Button>
      <List>
        {filteredAssignments.map((assignment, index) => (
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
              secondaryTypographyProps={{ style: text }}
              primary={assignment.name}
              secondary={`Due: ${assignment.due}`}
            />

            {!submittedAssignments.includes(index) ? (
              <>
                {index == 1
                    ? (
                        <Tooltip title="Submit Early for an extra 5 points!">
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
                    )
                    : (
                        <Button
                            style={{ marginRight: "20px" }}
                            variant="contained"
                            color="primary"
                            component={Link}
                            onClick={() => handleSubmission(index)}
                        >
                            Submit
                        </Button>
                    )}
                <TextField
                  label="Text Field"
                  variant="outlined"
                  size="small"
                  style={{ marginRight: "20px" }}
                            onClick={handleTextFieldClick}
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
        <h1>Progress</h1>
        <div className="progress-container">
          <div className="progress-bar">
            <div className={`progress-indicator${getProgressBarClass()}`}></div>
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