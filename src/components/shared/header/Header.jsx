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
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  List,
  ListItem,
  Menu,
  MenuItem,
} from "@mui/material";
import { AccountCircle, CloseRounded } from "@mui/icons-material";
import { GetStudents } from "../../../data/studentData";

function Header() {
  const location = useLocation();
  const [isClass, SetIsClass] = useState([]);
  const [userCode, SetUserCode] = useState()
  const [classCode, SetClassCode] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [exampleUsers, setExampleUsers] = useState([]);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  useEffect(() => {
    if (location.pathname.includes("class")) {
      SetIsClass(true);
      const path = location.pathname.split("class/")[1].split("/")[0];
      SetClassCode(path);
    } else {
      SetIsClass(false);
    }
    const user = location.pathname.split("user/")[1].split("/")[0];
    SetUserCode(user);

    setExampleUsers(GetStudents());
  }, [location]);

  const HandleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const HandleClose = () => {
    setAnchorEl(null);
  };
  const OpenModal = () => {
    setModalOpen(true);
    setAnchorEl(null);
  };
  const CloseModal = () => {
    setModalOpen(false);
  };

  const SwitchUser = (id) => () => {
    setModalOpen(false);
    navigate(`/canvas/user/${id}/dashboard`);
  };

  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={HandleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={HandleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={OpenModal}>Switch User</MenuItem>
        </Menu>
        <Dialog onClose={CloseModal} open={modalOpen}>
          <DialogTitle sx={{ m: 0, p: 2 }}>Switch User</DialogTitle>
          <IconButton
            aria-label="close"
            onClick={CloseModal}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseRounded />
          </IconButton>
          <DialogContent dividers>
            <List>
              <Grid conatiner spacing={2}>
                {exampleUsers.map((user, index) => {
                  return (
                    <ListItem
                      button
                      key={index}
                      onClick={SwitchUser(user.Id)}
                      style={{
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        marginBottom: "8px",
                      }}
                    >
                      <Grid item xs={2}>
                        <AccountCircle />
                      </Grid>
                      <Grid item xs={12}>
                        <h3>{user.Name}</h3>
                      </Grid>
                    </ListItem>
                  );
                })}
              </Grid>
            </List>
          </DialogContent>
        </Dialog>
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
          href={`/canvas/user/${userCode}/dashboard`}
        >
          Canvas
        </Typography>
        {isClass && (
            <div>
            <Button
                color="inherit"
                href={`/canvas/user/${userCode}/class/${classCode}/announcements`}
            >
                Announcements
            </Button>
            <Button
              color="inherit"
              href={`/canvas/user/${userCode}/class/${classCode}/syllabus`}
            >
              Syllabus
            </Button>
            <Button
              color="inherit"
              href={`/canvas/user/${userCode}/class/${classCode}/modules`}
            >
              Modules
            </Button>
            <Button
              color="inherit"
              href={`/canvas/user/${userCode}/class/${classCode}/upcoming`}
            >
              Assignments
            </Button>
            <Button
              color="inherit"
              href={`/canvas/user/${userCode}/class/${classCode}/grades`}
            >
              Grades
            </Button>
            <Button
                color="inherit"
                href={`/canvas/user/${userCode}/class/${classCode}/leaderboard`}
            >
                Leaderboard
            </Button>
            <Button
              color="inherit"
              href={`/canvas/user/${userCode}/class/${classCode}/zoom`}
            >
              Zoom
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
