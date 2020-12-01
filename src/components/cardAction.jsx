import React from "react";
import {
  AddAlertOutlined as AddAlertOutlinedIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  PaletteOutlined as PaletteOutlinedIcon,
  InsertPhotoOutlined as InsertPhotoOutlinedIcon,
  ArchiveOutlined as ArchiveOutlinedIcon,
  MoreVert as MoreVertIcon,
} from "@material-ui/icons";
import "../style/cardAction.scss";
import { IconButton, Tooltip } from "@material-ui/core";

export default function CardAction(props) {
  return (
    <>
      <Tooltip title="Reminder">
        <IconButton
          color="inherit"
          aria-label="reminder"
          className={props.class}
        >
          <AddAlertOutlinedIcon fontSize="small" className="action-icon" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Collaborator">
        <IconButton
          color="inherit"
          aria-label="collaborator"
          className={props.class}
        >
          <PersonOutlineOutlinedIcon fontSize="small" className="action-icon" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Change Color">
        <IconButton
          color="inherit"
          aria-label="change color"
          className={props.class}
        >
          <PaletteOutlinedIcon fontSize="small" className="action-icon" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Add Image">
        <IconButton
          color="inherit"
          aria-label="add image"
          className={props.class}
        >
          <InsertPhotoOutlinedIcon fontSize="small" className="action-icon" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Archive">
        <IconButton
          color="inherit"
          aria-label="archive"
          className={props.class}
        >
          <ArchiveOutlinedIcon fontSize="small" className="action-icon" />
        </IconButton>
      </Tooltip>
      <Tooltip title="More">
        <IconButton color="inherit" aria-label="more" className={props.class}>
          <MoreVertIcon fontSize="small" className="action-icon" />
        </IconButton>
      </Tooltip>
    </>
  );
}
