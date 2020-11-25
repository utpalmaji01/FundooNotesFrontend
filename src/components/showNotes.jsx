import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Tooltip,
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
import EditNote from "./editNote";

export default function DashBoardNotes(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [currentNoteId, setCurrentNoteId] = useState("");
  const [currentNoteDetails, setCurrentNoteDetails] = useState([]);
  // const [allTypeOfNotes,setAllTypeOfNotes] = useState(props.allNotes);

  const editNote = (noteId) => {
    // setAllTypeOfNotes(props.allNotes);
    props.allNotes.map((note) => {
      if (note.id === noteId) {
        setIsEdit(true);
        setCurrentNoteDetails(note);
        setCurrentNoteId(noteId);
      }
    });
  };

  const note = props.allNotes.reverse().map((note) => {
    return (
      <Grid item lg={2} md={3} sm={5} key={note.id} className="note">
        <Card className="each-note" onClick={() => editNote(note.id)}>
          <CardContent>
            <p>{note.title}</p>
            <Typography variant="body2" color="textSecondary" component="p">
              {note.description.slice(0, 50)}
            </Typography>
          </CardContent>
          <CardActions className="note-actions">
            <Tooltip title="Reminder">
              <IconButton
                color="inherit"
                aria-label="reminder"
                className="note-actions-item-shownote"
              >
                <AddAlertOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Collaborator">
              <IconButton
                color="inherit"
                aria-label="collaborator"
                className="note-actions-item-shownote"
              >
                <PersonOutlineOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Change Color">
              <IconButton
                color="inherit"
                aria-label="change color"
                className="note-actions-item-shownote"
              >
                <PaletteOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add Image">
              <IconButton
                color="inherit"
                aria-label="add image"
                className="note-actions-item-shownote"
              >
                <InsertPhotoOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Archive">
              <IconButton
                color="inherit"
                aria-label="archive"
                className="note-actions-item-shownote"
              >
                <ArchiveOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </CardActions>
        </Card>
      </Grid>
    );
  });

  return (
    <>
      <Grid container spacing={2} className="all-notes">
        {note}
      </Grid>
      <EditNote
        currentNoteId={currentNoteId}
        currentNoteDetails={currentNoteDetails}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
      />
    </>
  );
}
