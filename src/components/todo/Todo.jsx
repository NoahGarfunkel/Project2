import React, { useState } from 'react';
import Button from "@mui/material/Button";

function Todo() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddClick = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="Todo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1> Todo </h1>
      
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Add a new task..."
      />
      
      <Button onClick={handleAddClick} color = "primary" variant="contained"  sx={{ marginTop: 2 }} >Add </Button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;