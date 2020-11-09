import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
} from "@material-ui/core";
import {
  AddAlertOutlined as AddAlertOutlinedIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  PaletteOutlined as PaletteOutlinedIcon,
  InsertPhotoOutlined as InsertPhotoOutlinedIcon,
  ArchiveOutlined as ArchiveOutlinedIcon,
} from "@material-ui/icons";
import "../style/showNotes.scss";

export default function DashBoardNotes({allNotes}) {

  const note = allNotes.map((note) => {
    return (
      <Card className="note" key={note.id}>
        <CardContent>
          <p>{note.title}</p>
          <p>{note.description}</p>
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
    );
  });

  return (
    <><div className="all-notes">{note}</div>
    </>
  );
}
