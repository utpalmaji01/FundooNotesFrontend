import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import {
  AddAlertOutlined as AddAlertOutlinedIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  PaletteOutlined as PaletteOutlinedIcon,
  InsertPhotoOutlined as InsertPhotoOutlinedIcon,
  ArchiveOutlined as ArchiveOutlinedIcon,
} from "@material-ui/icons";
import "../style/showNotes.scss";

export default function DashBoardNotes({ allNotes }) {
  const note = allNotes.map((note) => {
    return (
      <Grid item md={3} sm={5} key={note.id} className="note">
        <Card className="each-note">
          <CardContent>
            <p>{note.title}</p>
            <Typography variant="body2" color="textSecondary" component="p">
              {note.description}
            </Typography>
          </CardContent>
          <CardActions className="note-actions">
            <IconButton
              color="inherit"
              aria-label="reminder"
              className="note-actions-item"
            >
              <AddAlertOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="reminder"
              className="note-actions-item"
            >
              <PersonOutlineOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="reminder"
              className="note-actions-item"
            >
              <PaletteOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="reminder"
              className="note-actions-item"
            >
              <InsertPhotoOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="reminder"
              className="note-actions-item"
            >
              <ArchiveOutlinedIcon fontSize="small" />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    );
  });

  return (
    <>
      <Grid container className="all-notes">
        {note}
      </Grid>
    </>
  );
}
