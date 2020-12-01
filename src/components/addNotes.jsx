import React, { useState } from "react";
import {
  Button,
  CardActions,
  InputBase,
  Snackbar,
} from "@material-ui/core";
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

  const addNote = () => {
    let newNoteObj = {
      title: newNoteTitle,
      description: newNoteDescription,
    };

    noteServices
      .addNewNote(localStorage.getItem("id"), newNoteObj)
      .then((responce) => {
        if (responce.status === 200) {
          let newNote = {
            id: responce.data.status.details.id,
            title: responce.data.status.details.title,
            description: responce.data.status.details.description,
          };
          let allNote = [...props.allNotes, newNote];
          props.setAllNotes(allNote);
          setSnackbarActive(true); 
          setIsAddNote(false);
          setNewNoteTitle("");
        }
      }).catch((error) => {
        setIsAddNote(false);
          setSnackbarActive(true);
          setSnackBarSeverity("error");
          setSnackBarMesage("Something went wrong");
      });
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
        <div className="add-note-from">
          <div className="add-note-input">
            <InputBase
              fullWidth
              margin="dense"
              placeholder={addNotePlaceHolder}
              // style={{ fontSize: 20 }}
              onClick={() => {
                setIsAddNote(true);
                setAddNotePlaceHolder("Title");
              }}
              onChange={(e) => {
                setNewNoteTitle(e.target.value);
              }}
              className="add-note-title"
              // endAdornment={
              //   isAddNote && (
              //     <InputAdornment position="end">
              //       <Tooltip title="Pin Note">
              //         <IconButton aria-label="Pin Note">
              //           <PinDropOutlinedIcon />
              //         </IconButton>
              //       </Tooltip>
              //     </InputAdornment>
              //   )
              // }
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
              />
            )}
          </div>
          {isAddNote && (
            <CardActions>
              <CardAction class="note-actions-item-addnote"/>
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
