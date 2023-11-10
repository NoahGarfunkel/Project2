import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";
import "./Grades.css";

const grades = [
  { name: 'Assignment 1', page: 'assignment_01.html', type: 'assignment', grade: 90 },
  { name: 'Assignment 2', page: 'assignment_02.html', type: 'assignment', grade: 85 },
  { name: 'Assignment 3', page: 'assignment_03.html', type: 'assignment', grade: 92 },
  { name: 'Assignment 4', page: 'assignment_04.html', type: 'assignment', grade: null },
  { name: 'Assignment 5', page: 'assignment_05.html', type: 'assignment', grade: null },
  { name: 'Pick Project 1 Smart Object', page: '06.html', type: 'project', grade: null },
  { name: 'Project 1 Implementation', page: '07.html', type: 'project', grade: null },
  { name: 'Project 1 Documentation', page: '08.html', type: 'project', grade: null },
];

function calculateTotalGrade(type) {
    const typeGrades = grades.filter(assignment => assignment.type === type && assignment.grade !== null);
    if (typeGrades.length === 0) {
      return 'Not graded';
    }
    const total = typeGrades.reduce((sum, assignment) => sum + assignment.grade, 0);
    const average = total / typeGrades.length;
    const roundedAverage = Math.round(average * 100) / 100;
    return roundedAverage;
  }

function getWeight(type) {
  switch (type) {
    case 'assignment':
      return 0.1;
    case 'participation':
      return 0.05;
    case 'project':
      return 0.75;
    case 'final_exam':
      return 0.1;
    default:
      return 0;
  }
}

function Grades() {
    const assignmentsGrade = calculateTotalGrade('assignment');
    const participationGrade = calculateTotalGrade('participation');
    const projectsGrade = calculateTotalGrade('project');
    const finalExamGrade = calculateTotalGrade('final_exam');
  
    const weights = {
      assignment: getWeight('assignment'),
      participation: getWeight('participation'),
      project: getWeight('project'),
      final_exam: getWeight('final_exam'),
    };
  
    const calculateWeightedAverage = () => {
      let sum = 0;
      let totalWeight = 0;
  
      Object.keys(weights).forEach(type => {
        const grade = calculateTotalGrade(type);
        if (grade !== 'Not graded') {
          sum += grade * weights[type];
          totalWeight += weights[type];
        }
      });
  
      return totalWeight > 0 ? Math.round((sum / totalWeight) * 100) / 100 : 'Not graded';
    };
  
    const finalGrade = calculateWeightedAverage();
  
    return (
      <div className="Grades">
        <h1>Grades</h1>
        <List>
          {grades.map((assignment, index) => (
            <ListItem key={index} button component={Link} to={`/grades/${assignment.page}`} style={{
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginBottom: '8px',
            }}>
              <ListItemText primary={`${assignment.name}: ${assignment.grade !== null ? assignment.grade : 'Not graded'}`} />
            </ListItem>
          ))}
        </List>
  
        <div className="totals">
          <h2>Total Grades</h2>
          <p>Assignments: {assignmentsGrade}</p>
          <p>Participation: {participationGrade}</p>
          <p>Projects: {projectsGrade}</p>
          <p>Final Exam: {finalExamGrade}</p>
          <div className="finalGrade" style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
            <p>Final Grade: {finalGrade}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Grades;