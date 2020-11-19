import React, { useState } from "react";
import {
  Card,
  Modal,
  Button,
  CardActions,
  CardContent,
  IconButton,
  InputAdornment,
  InputBase,
  Tooltip,
} from "@material-ui/core";
import {
  PinDropOutlined as PinDropOutlinedIcon,
  AddAlertOutlined as AddAlertOutlinedIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  PaletteOutlined as PaletteOutlinedIcon,
  InsertPhotoOutlined as InsertPhotoOutlinedIcon,
  ArchiveOutlined as ArchiveOutlinedIcon,
} from "@material-ui/icons";

import "../style/editNotes.scss";

export default function EditNote(props) {
  const [title, setTitle] = useState(props.currentNoteDetails.title);
  const [description, setDescription] = useState(
    props.currentNoteDetails.description
  );
  const closeEdit = () => {
    props.setIsEdit(false);
  };

  const editNote = () => {
    console.log(title);
    console.log(description);
    props.setIsEdit(false);
  };
  return (
    <>
      <Modal open={props.isEdit} onClose={closeEdit} className="modal">
        <Card className="edit-note-from">
          <CardContent>
            <InputBase
              fullWidth
              margin="dense"
              placeholder="hello"
              defaultValue={props.currentNoteDetails.title}
              style={{ fontSize: 20 }}
              onChange={(e) => setTitle(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <Tooltip title="Pin Note">
                    <IconButton aria-label="Pin Note">
                      <PinDropOutlinedIcon />
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              }
            />
            <InputBase
              fullWidth
              margin="dense"
              multiline
              rowsMax={12}
              placeholder="Take a note..."
              defaultValue={props.currentNoteDetails.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </CardContent>
          <CardActions>
            <Tooltip title="Reminder">
              <IconButton color="inherit" aria-label="reminder">
                <AddAlertOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Collaborator">
              <IconButton color="inherit" aria-label="collaborator">
                <PersonOutlineOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Change Color">
              <IconButton color="inherit" aria-label="change color">
                <PaletteOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Add Image">
              <IconButton color="inherit" aria-label="add image">
                <InsertPhotoOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Archive">
              <IconButton color="inherit" aria-label="archive">
                <ArchiveOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
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
        </Card>
      </Modal>
    </>
  );
}
