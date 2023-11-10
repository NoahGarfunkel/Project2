import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetAnnouncmentMessage } from "../../data/SampleData";
import { Grid } from "@mui/material";
import './Announcement.css'

function Announcement() {
  const { announcementId } = useParams();
  const [message, SetMessage] = useState([]);

  useEffect(() => {
    SetMessage(GetAnnouncmentMessage(announcementId));
  }, [announcementId]);

  return (
    <Grid container spacing={2}>
      <Grid container item xs={12}>
        <Grid item xs={12} className="grid-title">
          <h2>{message.Title}</h2>
          <h6>{message.Announcer}</h6>
          <h5>All Sections</h5>
        </Grid>
        <Grid item xs={12}>
            <pre className="message-body">
                {message.Message}
            </pre>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Announcement;
