import { useEffect, useState } from "react";
import { GetAnnouncements, GetClassAnnouncements } from "../../data/ClassAnnouncementData";
import { Divider, Grid, List, ListItem, Typography } from "@mui/material";
import "./AnnouncementsList.css";
import { FiberManualRecord } from "@mui/icons-material";
import { Link, useNavigate, useParams } from "react-router-dom";

function AnnouncementsList() {
  const {userId ,className} = useParams();
  const [announcements, setAnnouncements] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    setAnnouncements(GetClassAnnouncements(className));
  }, [className]);

  const openAnnouncement = (announcementId) => () => {
    navigate(`${announcementId}`)
  }

  return (
    <div className="Announcements">
      <h1>Announcements</h1>
      <List>
        {announcements.map((announcement, index) => (
          <div>
            <ListItem
              button
              key={index}
              onClick={openAnnouncement(announcement.Id)}
              style={{
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginBottom: "8px",
              }}
            >
              <Grid container spacing={2}>
                <Grid container item xs={9}>
                  <Grid item xs={.4}>
                    <FiberManualRecord className={announcement.HasOpened ? "openedNotif" : "unreadNotif"} />
                  </Grid>
                  <Grid item xs={11.6}>
                    <h3 className="announcementName">{announcement.Title}</h3>
                  </Grid>
                </Grid>
                <Grid container item xs={2}>
                  <Grid item xs={12}>
                    <Typography>Posted On</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography>{announcement.PostedOn}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
}

export default AnnouncementsList;
