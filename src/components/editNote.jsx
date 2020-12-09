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

  useEffect(() => {
    setEditNoteIndex(
      props.allNotes.findIndex(
        (note) => note.id === props.currentNoteDetails.id
      )
    );
    setEditNoteTitle(props.currentNoteDetails.title);
    setEditNoteDescription(props.currentNoteDetails.description);
  }, [props.currentNoteDetails, props.allNotes, editNoteIndex]);

  const deleteNote = () => {
    console.log("delete note reached : from edit");
    let deleteNoteObject = {
      isDeleted: true,
      noteIdList: [props.currentNoteDetails.id],
    };
    noteServices
      .deleteNote(localStorage.getItem("id"), deleteNoteObject)
      .then((responce) => {
        console.log(responce);
        if (responce.status === 200) {
          
          let newNotesArray = [...props.allNotes];
          newNotesArray[editNoteIndex].isDeleted = true;
          props.setAllNotes(newNotesArray);
          console.log("delete done from edit");
          props.setIsEdit(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
          };
          props.setAllNotes(newNotesArray);
          console.log("success");
          props.setIsEdit(false);
        }
      }).catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Dialog onClose={closeEdit} open={props.isEdit} className="edit-modal">
        <div className="edit-note-from">
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
            <CardAction class="note-actions-item-editnote"  deleteNote={deleteNote}/>
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
