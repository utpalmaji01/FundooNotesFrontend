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

import "../style/dashBoardNotes.scss";

export default function DashBoardNotes() {
  const [isAddNote, setIsAddNote] = useState(false);
  const [addNotePlaceHolder, setAddNotePlaceHolder] = useState(
    "Take a note..."
  );

  return (
    <div className="dashBoardNotes-container">
      <div className="add-note">
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
              />
            )}
          </CardContent>
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
            <Button className="close-button">Close</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
