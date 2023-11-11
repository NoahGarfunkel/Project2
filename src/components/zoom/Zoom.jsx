import React from 'react';
import Button from "@mui/material/Button";

function Zoom() {

  return (
    <div className="Zoom" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1> Zoom </h1>
      <Button
        variant="contained"
        color="primary">
        Connect to Zoom
    </Button>
    </div>
  );
}

export default Zoom;