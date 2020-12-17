import React, { useState } from "react";
import { Button, CardActions, InputBase, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import CardAction from "./cardAction.jsx";
import noteServices from "../sevices/noteServices.js";
import "../style/addNotes.scss";

export default function DashBoardNotes(props) {
  const [snackbarActive, setSnackbarActive] = useState(false);
  const [snackBarSeverity, setSnackBarSeverity] = useState("success");
  const [snackBarMesage, setSnackBarMesage] = useState(
    "Note added successfully"
  );
  const [isAddNote, setIsAddNote] = useState(false);
  const [addNotePlaceHolder, setAddNotePlaceHolder] = useState(
    "Take a note..."
  );
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteDescription, setNewNoteDescription] = useState("");
  const [newNoteColor, setNewNoteColor] = useState("#FFFFFF");
  const [newNoteArchiveStatus, setNewNoteArchiveStatus] = useState(false);

  const addNote = () => {
    let newNoteObj = {
      title: newNoteTitle,
      description: newNoteDescription,
      color: newNoteColor,
      isArchived: newNoteArchiveStatus,
      isDeleted: false,
      isPined: false,
    };

    noteServices
      .addNewNote(newNoteObj)
      .then((responce) => {
        console.log(responce);
        if (responce.status === 200) {
          let newNote = {
            id: responce.data.status.details.id,
            title: responce.data.status.details.title,
            description: responce.data.status.details.description,
            color: newNoteColor,
            isArchived: newNoteArchiveStatus,
            isDeleted: false,
            isPined: false,
          };
          props.addNote(newNote);
          setSnackbarActive(true);
          setSnackBarMesage("Note added successfully");
          setIsAddNote(false);
          setNewNoteTitle("");
          setAddNotePlaceHolder("Take a note...");
          setNewNoteColor("#FFFFFF");
        }
      })
      .catch((error) => {
        console.log(error);
        setIsAddNote(false);
        setSnackbarActive(true);
        setSnackBarSeverity("error");
        setSnackBarMesage("Something went wrong");
      });
  };

  const addColor = (color) => {
    setNewNoteColor(color);
  };

  const addArchiveStatus = () => {
    setNewNoteArchiveStatus(!newNoteArchiveStatus);
    console.log(newNoteArchiveStatus);
  };

  const closeSnackbar = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarActive(false);
  };

  return (
    <>
      <div className="dashBoardNotes-container">
        <div
          className="add-note-from"
          style={{ backgroundColor: newNoteColor }}
        >
          <div className="add-note-input">
            <InputBase
              fullWidth
              margin="dense"
              multiline
              value={newNoteTitle}
              rowsMax={2}
              placeholder={addNotePlaceHolder}
              onClick={() => {
                setIsAddNote(true);
                setAddNotePlaceHolder("Title");
              }}
              onChange={(e) => {
                setNewNoteTitle(e.target.value);
              }}
              className="add-note-title"
            />
            {isAddNote && (
              <InputBase
                fullWidth
                margin="dense"
                multiline
                rowsMax={8}
                placeholder="Take a note..."
                onChange={(e) => {
                  setNewNoteDescription(e.target.value);
                }}
                className="add-note-description"
              />
            )}
          </div>
          {isAddNote && (
            <CardActions className="add-note-footer">
              <CardAction
                class="note-actions-item-addnote"
                addColor={addColor}
                addArchiveStatus={addArchiveStatus}
                noteArchiveStatus={newNoteArchiveStatus}
              />
              <Button className="close-button" onClick={addNote}>
                Close
              </Button>
              <Snackbar
                open={snackbarActive}
                autoHideDuration={1000}
                onClose={closeSnackbar}
              >
                <Alert severity={snackBarSeverity} onClose={closeSnackbar}>
                  {snackBarMesage}
                </Alert>
              </Snackbar>
            </CardActions>
          )}
        </div>
      </div>
    </>
  );
}
