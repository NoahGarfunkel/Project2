import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import "./Header.css";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";

function Header() {
  const location = useLocation();
  const [isClass, SetIsClass] = useState([]);
  const [classCode, SetClassCode] = useState([]);

  useEffect(() => {
    if (location.pathname.includes("class")) {
      SetIsClass(true);
      const path = location.pathname.split("class/")[1].split("/")[0]
      SetClassCode(path)
    } else {
      SetIsClass(false);
    }
  });

  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="a"
          sx={{
            flexGrow: 0,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
          href="/"
        >
          Canvas
        </Typography>
        {isClass && (
          <div>
            <Button color="inherit" href={`/canvas/class/${classCode}/syllabus`}>
              Syllabus
            </Button>
            <Button color="inherit" href={`/canvas/class/${classCode}/modules`}>
              Modules
            </Button>
            <Button color="inherit" href={`/canvas/class/${classCode}/upcoming`}>
              Assignments
            </Button>
            <Button color="inherit" href={`/canvas/class/${classCode}/announcements`}>
              Announcements
            </Button>
            <Button color="inherit" href={`/canvas/class/${classCode}/grades`}>
              Grades
            </Button>
            <Button color="inherit" href={`/canvas/class/${classCode}/zoom`}>
              Zoom
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
