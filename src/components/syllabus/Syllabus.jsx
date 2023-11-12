import React, { useEffect, useState } from 'react';
import './Syllabus.css';
import { useParams } from 'react-router-dom';

function Syllabus() {
  const { className } = useParams();
  const [syllabusContent, setSyllabusContent] = useState('');

  useEffect(() => {
    const fetchSyllabus = async () => {
      try {
        const response = await fetch(`/htmlContent/${className}/syllabus.html`);
        const htmlContent = await response.text();
        setSyllabusContent(htmlContent);
      } catch (error) {
        console.error('Error loading syllabus:', error);
      }
    };

    fetchSyllabus();
  }, [className]);

  return (
    <div className="Syllabus">
      <h1> Syllabus </h1>
      <div dangerouslySetInnerHTML={{ __html: syllabusContent }} />
    </div>
  );
}

export default Syllabus;