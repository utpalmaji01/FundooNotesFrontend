import React, { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  InputAdornment,
  InputBase,
  Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
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
  const [snackbarActive, setSnackbarActive] = useState(false);
  const [snackBarSeverity, setSnackBarSeverity] = useState("success");
  const [snackBarMesage, setSnackBarMesage] = useState("Note added successfully");
  const [isAddNote, setIsAddNote] = useState(false);
  const [addNotePlaceHolder, setAddNotePlaceHolder] = useState(
    "Take a note..."
  );
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteDescription, setNewNoteDescription] = useState("");

  const addNote = () => {
    let newNoteObj = {
      "title": newNoteTitle,
      "description": newNoteDescription,
    };

    apiCalls.addNewNote(
      localStorage.getItem("id"),
      newNoteObj
    ).then((responce) => {
      if (responce.status === 200) {
        let newNote = {
          "id": responce.data.status.details.id,
          "title": responce.data.status.details.title,
          "description": responce.data.status.details.description,
        }    
        let allNote = [...props.allNotes, newNote];
        props.setAllNotes(allNote);
        setSnackbarActive(true);
      } else {
        setSnackbarActive(true);
        setSnackBarSeverity("error");
        setSnackBarMesage("Something went wrong");
      }
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
              <Snackbar
                    open={snackbarActive}
                    autoHideDuration={1000}
                    onClose={closeSnackbar}
                  >
                    <Alert
                      severity={snackBarSeverity}
                      onClose={closeSnackbar}
                    >
                      {snackBarMesage}
                    </Alert>
                  </Snackbar>
            </CardActions>
          )}
        </Card>
      </div>
    </>
  );
}
