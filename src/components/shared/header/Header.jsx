import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import "./Header.css";

function Header() {
  return (
    <AppBar position="static">
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
        <Button color="inherit" href="/class/syllabus">
          Syllabus
        </Button>
        <Button color="inherit" href="/class/assignments">
          Assignments
        </Button>
        <Button color="inherit" href="/class/announcements">
          Announcements
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
