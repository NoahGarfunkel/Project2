import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Link, useParams } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";
import "./Grades.css";
import { GetClassGrades } from "../../data/GradesData";

function calculateTotalGrade(type, classGrades) {
  if (classGrades !== undefined) {
    const typeGrades = classGrades.filter(
      (assignment) => assignment.type === type && assignment.grade !== null
    );
    if (typeGrades.length === 0) {
      return "Not graded";
    }
    const total = typeGrades.reduce(
      (sum, assignment) => sum + assignment.grade,
      0
    );
    const average = total / typeGrades.length;
    const roundedAverage = Math.round(average * 100) / 100;
    return roundedAverage;
  }
  return 0;
}

function getWeight(type) {
  switch (type) {
    case "assignment":
      return 0.1;
    case "participation":
      return 0.05;
    case "project":
      return 0.75;
    case "final_exam":
      return 0.1;
    default:
      return 0;
  }
}

function Grades() {
  const [classGrades, SetClassGrades] = useState([]);
  const [assignmentsGrade, SetAssignmentGrade] = useState();
  const [participationGrade, SetParticipationGrade] = useState();
  const [projectsGrade, SetProjectsGrade] = useState();
  const [finalExamGrade, SetFinalExamGrade] = useState();
  const [finalGrade, SetFinalGrade] = useState();

  const { userId, className } = useParams();
  useEffect(() => {
    SetClassGrades(GetClassGrades(parseInt(userId), className));
  }, [userId, className]);

  useEffect(() => {
    SetAssignmentGrade(calculateTotalGrade("assignment", classGrades))
    SetParticipationGrade(calculateTotalGrade("participation", classGrades));
    SetProjectsGrade(calculateTotalGrade("project", classGrades));
    SetFinalExamGrade(calculateTotalGrade("final_exam", classGrades));
    SetFinalGrade(calculateWeightedAverage())
  }, [classGrades])

  const weights = {
    assignment: getWeight("assignment"),
    participation: getWeight("participation"),
    project: getWeight("project"),
    final_exam: getWeight("final_exam"),
  };

  const calculateWeightedAverage = () => {
    let sum = 0;
    let totalWeight = 0;

    Object.keys(weights).forEach((type) => {
      const grade = calculateTotalGrade(type, classGrades);
      if (grade !== "Not graded") {
        sum += grade * weights[type];
        totalWeight += weights[type];
      }
    });

    return totalWeight > 0
      ? Math.round((sum / totalWeight) * 100) / 100
      : "Not graded";
  };

  return (
    <div className="Grades">
      <h1>Grades</h1>
      <List>
        {classGrades.map((assignment, index) => (
          <ListItem
            key={index}
            button
            component={Link}
            to={`/canvas/class/${className}/grades/${assignment.page}`}
            style={{
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "8px",
            }}
          >
            <ListItemText
              primary={`${assignment.name}: ${
                assignment.grade !== null ? assignment.grade : "Not graded"
              }`}
            />
          </ListItem>
        ))}
      </List>

      <div className="totals">
        <h2>Total Grades</h2>
        <p>Assignments: {assignmentsGrade}</p>
        <p>Participation: {participationGrade}</p>
        <p>Projects: {projectsGrade}</p>
        <p>Final Exam: {finalExamGrade}</p>
        <div
          className="finalGrade"
          style={{ fontSize: "1.5em", fontWeight: "bold" }}
        >
          <p>Final Grade: {finalGrade}</p>
        </div>
      </div>
    </div>
  );
}

export default Grades;
