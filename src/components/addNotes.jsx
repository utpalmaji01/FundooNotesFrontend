import React, { useState } from "react";
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
import "../style/addNotes.scss";

export default function DashBoardNotes(props) {
  const [isAddNote, setIsAddNote] = useState(false);
  const [addNotePlaceHolder, setAddNotePlaceHolder] = useState(
    "Take a note..."
  );
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteDescription, setNewNoteDescription] = useState("");

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
      "id": responce.data.status.details.id,
    }
    if (responce.status === 200) {
      let allNote = [...props.allNotes, newNote];
      props.setAllNotes(allNote);
    }
  };
  
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
    </>
  );
}
