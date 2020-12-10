import React, { useState, useEffect } from "react";
import {
  Button,
  CardActions,
  Dialog,
  InputBase,
  Snackbar,
} from "@material-ui/core";
import CardAction from "./cardAction.jsx";
import noteServices from "../sevices/noteServices.js";
import "../style/editNotes.scss";

export default function EditNote(props) {
  const [editNoteIndex, setEditNoteIndex] = useState(null);
  const [editNoteTitle, setEditNoteTitle] = useState("");
  const [editNoteDescription, setEditNoteDescription] = useState("");
  const [editNoteColor, setEditNoteColor] = useState("");

  useEffect(() => {
    setEditNoteIndex(
      props.allNotes.findIndex(
        (note) => note.id === props.currentNoteDetails.id
      )
    );
    setEditNoteTitle(props.currentNoteDetails.title);
    setEditNoteDescription(props.currentNoteDetails.description);
    setEditNoteColor(props.currentNoteDetails.color);
  }, [props.currentNoteDetails, props.allNotes, editNoteIndex]);

  const deleteNote = () => {
    props.deleteNote();
    props.setIsEdit(false);
  };

  const closeEdit = () => {
    props.setIsEdit(false);
  };

  const editNote = () => {
    console.log("editNote reached");
    let updateNoteObject = {
      noteId: localStorage.getItem("currentNoteId"),
      title: editNoteTitle,
      description: editNoteDescription,
      color: editNoteColor,
    };
    noteServices
      .updateNote(localStorage.getItem("id"), updateNoteObject)
      .then((responce) => {
        console.log(responce);
        if (responce.status === 200) {
          let newNotesArray = [...props.allNotes];
          newNotesArray[editNoteIndex] = {
            ...newNotesArray[editNoteIndex],
            title: editNoteTitle,
            description: editNoteDescription,
            color: editNoteColor,
          };
          props.setAllNotes(newNotesArray);
          console.log("success");
          props.setIsEdit(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addColor = (color) => {
    setEditNoteColor(color);
  };

  return (
    <>
      <Dialog onClose={closeEdit} open={props.isEdit} className="edit-modal">
        <div
          className="edit-note-from"
          style={{ backgroundColor: editNoteColor }}
        >
          <div className="edit-note-input">
            <InputBase
              fullWidth
              margin="dense"
              multiline
              value={editNoteTitle}
              rowsMax={2}
              onChange={(e) => {
                setEditNoteTitle(e.target.value);
              }}
              className="edit-note-title"
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
            <InputBase
              fullWidth
              margin="dense"
              multiline
              rowsMax={8}
              value={editNoteDescription}
              placeholder="Take a note..."
              onChange={(e) => {
                setEditNoteDescription(e.target.value);
              }}
              className="edit-note-description"
            />
          </div>
          <CardActions className="edit-note-footer">
            <CardAction
              class="note-actions-item-editnote"
              deleteNote={deleteNote}
              addColor={addColor}
            />
            <Button className="close-button" onClick={editNote}>
              Close
            </Button>
            {/* <Snackbar
                open={snackbarActive}
                autoHideDuration={1000}
                onClose={closeSnackbar}
              >
                <Alert severity={snackBarSeverity} onClose={closeSnackbar}>
                  {snackBarMesage}
                </Alert>
              </Snackbar> */}
          </CardActions>
        </div>
      </Dialog>
    </>
  );
}
