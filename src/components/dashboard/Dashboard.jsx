import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import { GetClasses } from "../../data/ClassData";
import { Description, Grade, NotificationImportant } from "@mui/icons-material";
import "./Dashboard.css";
import { useParams } from "react-router-dom";

function Dashboard() {
  const { userId } = useParams();
  const [classes, SetClasses] = useState([]);

  useEffect(() => {
    SetClasses(GetClasses());
  }, []);

  return (
    <Grid container spacing={2} className="class-cards">
      {classes.map((val, index) => {
        return (
          <Grid item>
            <Card sx={{ width: 330 }}>
              <CardActionArea href={`/canvas/user/${userId}/class/${val.Path}/syllabus`} className="card-btn">
                <CardMedia sx={{ height: 140 }} className={val.CssClass} />
                <CardContent>
                  <h3 className="class-title" title={val.ClassName}>
                    {val.ClassName}
                  </h3>
                </CardContent>
              </CardActionArea>
              <CardActions className="action-btns">
                  <Button size="small" title="Announcements" href={`/canvas/user/${userId}/class/${val.Path}/announcements`}>
                    <NotificationImportant />
                  </Button>
                  <Button size="small" title="Upcoming Assignments" href={`/canvas/user/${userId}/class/${val.Path}/upcoming`}>
                    <Description />
                  </Button>
                  <Button size="small" title="Grades" href={`/canvas/user/${userId}/class/${val.Path}/grades`}>
                    <Grade/>
                  </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Dashboard;
