import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const assignments = {
  "user-interface":{
    "assignment_01.html": "Assignment 1",
    "assignment_02.html": "Assignment 2",
    "assignment_03.html": "Assignment 3",
    "assignment_04.html": "Assignment 4",
    "assignment_05.html": "Assignment 5",
    "06.html": "Pick Project 1 Smart Object",
    "07.html": "Project 1 Implementation",
    "08.html": "Project 1 Documentation",
  },
  "computer-graphics":{

  },
  "senior-design":{
    
  }
};
  
  function AssignmentDetail() {
    const { className, pageName } = useParams();
    const [htmlContent, setHtmlContent] = useState('');
  
    useEffect(() => {
      async function fetchHtmlContent() {
        try {
          const response = await fetch(`/htmlContent/${className}/${pageName}`);
          const data = await response.text();
          setHtmlContent(data);
        } catch (error) {
          console.error('Error fetching HTML content:', error);
        }
      }
  
      fetchHtmlContent();
    }, [className, pageName]);
  
    return (
      <div>
        <h1>{assignments[className][pageName]}</h1>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    );
  }
  
  export default AssignmentDetail;