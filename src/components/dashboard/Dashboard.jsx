import {
  Button,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import { GetClasses } from "../../data/ClassData";
import { NotificationImportant } from "@mui/icons-material";
import "./Dashboard.css";
import { Link, Navigate, redirect, useLocation } from "react-router-dom";

function Dashboard() {
  const [classes, SetClasses] = useState([]);

  useEffect(() => {
    SetClasses(GetClasses());
  }, []);

  return (
    <Grid container spacing={2}>
      {classes.map((val, index) => {
        return (
          <Grid container item xs>
            <Card sx={{ width: 330 }} Button>
              <ButtonBase href={`/canvas/class/${val.Path}/syllabus`}>
                <CardMedia sx={{ height: 140 }} />
                <CardContent>
                  <h3 className="classTitle" title={val.ClassName}>
                    {val.ClassName}
                  </h3>
                </CardContent>
              </ButtonBase>
              <CardActions>
                <Grid item>
                  <Button size="small" title="Announcements" href={`/canvas/class/${val.Path}/announcements`}>
                    <NotificationImportant />
                  </Button>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Dashboard;
