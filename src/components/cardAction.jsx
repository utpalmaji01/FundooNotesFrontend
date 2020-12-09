import React, { useState } from "react";
import {
  AddAlertOutlined as AddAlertOutlinedIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  PaletteOutlined as PaletteOutlinedIcon,
  InsertPhotoOutlined as InsertPhotoOutlinedIcon,
  ArchiveOutlined as ArchiveOutlinedIcon,
  MoreVert as MoreVertIcon,
} from "@material-ui/icons";
import "../style/cardAction.scss";
import { Button, IconButton, Menu, MenuItem, Tooltip } from "@material-ui/core";

export default function CardAction(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const showMoreOption = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const callDeleteFunction = (e) => {
    e.preventDefault();
    console.log("callDeleteFunction reached");
    props.deleteNote();
    setAnchorEl(null);
  };

  const moreOptionDropdown = (name) => {
    if (name === "note-actions-item-shownote") {
      return (
        <Menu
          className="more-options-dropdown more-options-dropdown-shownote"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={callDeleteFunction}
        >
          <MenuItem onClick={callDeleteFunction}>Delete</MenuItem>
          <MenuItem>Add Label</MenuItem>
        </Menu>
      );
    }
    if (name === "note-actions-item-editnote") {
      return (
        <Menu
          className="more-options-dropdown more-options-dropdown-editnote"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={callDeleteFunction}
        >
          <MenuItem onClick={callDeleteFunction}>Delete</MenuItem>
          <MenuItem>Add Label</MenuItem>
        </Menu>
      );
    }
    if (name === "note-actions-item-addnote") {
      return (
        <Menu
          className="more-options-dropdown more-options-dropdown-addnote"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={callDeleteFunction}
        >
          <MenuItem>Add Label</MenuItem>
        </Menu>
      );
    }
  };

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
      <Tooltip title="Change Color" className="color-set-tooltip">
        <IconButton
          color="inherit"
          aria-label="change color"
          className={props.class}
          // className={`color-set ${props.class}`}
        >
          <PaletteOutlinedIcon fontSize="small" className="action-icon" />
        </IconButton>
      </Tooltip>
      <div className="color-palette">
        <Tooltip title="White">
          <IconButton className="color color-white active" />
        </Tooltip>
        <Tooltip title="Red">
          <IconButton className="color color-red" />
        </Tooltip>
        <Tooltip title="Orange">
          <IconButton className="color color-orange" />
        </Tooltip>
        <Tooltip title="Yellow">
          <IconButton className="color color-yellow" />
        </Tooltip>
        <Tooltip title="Green">
          <IconButton className="color color-green" />
        </Tooltip>
        <Tooltip title="Teal">
          <IconButton className="color color-teal" />
        </Tooltip>
        <Tooltip title="Blue">
          <IconButton className="color color-blue" />
        </Tooltip>
        <Tooltip title="Dark Blue">
          <IconButton className="color color-dark-blue" />
        </Tooltip>
        <Tooltip title="Purple">
          <IconButton className="color color-purple" />
        </Tooltip>
        <Tooltip title="Pink">
          <IconButton className="color color-pink" />
        </Tooltip>
        <Tooltip title="Brown">
          <IconButton className="color color-brown" />
        </Tooltip>
        <Tooltip title="Gray">
          <IconButton className="color color-gray" />
        </Tooltip>
      </div>
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
      <Tooltip
        aria-controls="more-options-dropdown"
        title="More"
        className="more-options-tooltip"
        onClick={showMoreOption}
      >
        <IconButton color="inherit" aria-label="more" className={props.class}>
          <MoreVertIcon fontSize="small" className="action-icon" />
        </IconButton>
      </Tooltip>
      {moreOptionDropdown(props.class)}
    </>
  );
}
