import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  InputAdornment,
  InputBase,
} from "@material-ui/core";
import {
  PinDropOutlined as PinDropOutlinedIcon,
  AddAlertOutlined as AddAlertOutlinedIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  PaletteOutlined as PaletteOutlinedIcon,
  InsertPhotoOutlined as InsertPhotoOutlinedIcon,
  ArchiveOutlined as ArchiveOutlinedIcon,
} from "@material-ui/icons";
import apiCalls from "../sevices/apiCalls.js";
import "../style/dashBoardNotes.scss";

export default function DashBoardNotes() {
  const [isAddNote, setIsAddNote] = useState(false);
  const [addNotePlaceHolder, setAddNotePlaceHolder] = useState(
    "Take a note..."
  );
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteDescription, setNewNoteDescription] = useState("");
  const [allNotes, setAllNotes] = useState([]);

  const addNote = async () => {
    let newNoteObj = {
      "title": newNoteTitle,
      "description": newNoteDescription,
    };
    let responce = await apiCalls.addNewNote(
      localStorage.getItem("id"),
      newNoteObj
    );
    let newNote = {
      "title": responce.data.status.details.title,
      "description": responce.data.status.details.description,
    }
    if (responce.status === 200) {
      let allNote = [...allNotes, newNote];
      setAllNotes(allNote);
    }
  };

  useEffect(() => {
    apiCalls
      .getAllNotes(localStorage.getItem("id"))
      .then((res) => setAllNotes(res.data.data.data));
  }, []);

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
    <>
      <div className="dashBoardNotes-container">
        <Card className="add-note-from">
          <CardContent>
            <InputBase
              fullWidth
              margin="dense"
              placeholder={addNotePlaceHolder}
              style={{ fontSize: 20 }}
              onClick={() => {
                setIsAddNote(true);
                setAddNotePlaceHolder("Title");
              }}
              onChange={(e) => {
                setNewNoteTitle(e.target.value);
              }}
              endAdornment={
                isAddNote && (
                  <InputAdornment position="end">
                    <IconButton aria-label="Pin Note">
                      <PinDropOutlinedIcon />
                    </IconButton>
                  </InputAdornment>
                )
              }
            />
            {isAddNote && (
              <InputBase
                fullWidth
                margin="dense"
                multiline
                placeholder="Take a note..."
                onChange={(e) => {
                  setNewNoteDescription(e.target.value);
                }}
              />
            )}
          </CardContent>
          {isAddNote && (
            <CardActions>
              <IconButton color="inherit" aria-label="reminder">
                <AddAlertOutlinedIcon fontSize="small" />
              </IconButton>
              <IconButton color="inherit" aria-label="reminder">
                <PersonOutlineOutlinedIcon fontSize="small" />
              </IconButton>
              <IconButton color="inherit" aria-label="reminder">
                <PaletteOutlinedIcon fontSize="small" />
              </IconButton>
              <IconButton color="inherit" aria-label="reminder">
                <InsertPhotoOutlinedIcon fontSize="small" />
              </IconButton>
              <IconButton color="inherit" aria-label="reminder">
                <ArchiveOutlinedIcon fontSize="small" />
              </IconButton>

              <Button className="close-button" onClick={addNote}>
                Close
              </Button>
            </CardActions>
          )}
        </Card>
      </div>
      <div className="all-notes">{note}</div>
    </>
  );
}
