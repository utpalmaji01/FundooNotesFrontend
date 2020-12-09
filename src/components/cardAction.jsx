import React, { useState } from "react";
import {
  AddAlertOutlined as AddAlertOutlinedIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  PaletteOutlined as PaletteOutlinedIcon,
  InsertPhotoOutlined as InsertPhotoOutlinedIcon,
  ArchiveOutlined as ArchiveOutlinedIcon,
  MoreVert as MoreVertIcon,
} from "@material-ui/icons";
import clsx from "clsx";
import "../style/cardAction.scss";
import { Button, IconButton, Menu, MenuItem, Tooltip } from "@material-ui/core";

export default function CardAction(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const[isColorPaletteOpen,setIsColorPaletteOpen] = useState(false);

  const showMoreOption = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMoreAction = () => {
    setAnchorEl(null);
  }

  const toggleColorPalette = () => {
    setIsColorPaletteOpen(!isColorPaletteOpen);
  }

  const applyColor = (e,color) => {
    e.preventDefault(); 
    props.addColor(color);
  }

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
          onClose={closeMoreAction}
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
          onClose={closeMoreAction}
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
          onClose={closeMoreAction}
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
      <Tooltip title="Change Color" className="color-set-tooltip" onClick={toggleColorPalette}>
        <IconButton
          color="inherit"
          aria-label="change color"
          className={props.class}
          // className={`color-set ${props.class}`}
        >
          <PaletteOutlinedIcon fontSize="small" className="action-icon" />
        </IconButton>
      </Tooltip>
      
      <div className={clsx("color-palette", {
                "color-palette-active": isColorPaletteOpen,
              })}>
        <Tooltip title="White" onClick={(e)=>applyColor(e,"#FFFFFF")}>
          <IconButton className="color color-white active" />
        </Tooltip>
        <Tooltip title="Red" onClick={(e)=>applyColor(e,"#f28b82")}>
          <IconButton className="color color-red" />
        </Tooltip>
        <Tooltip title="Orange" onClick={(e)=>applyColor(e,"#fbbc04")}>
          <IconButton className="color color-orange" />
        </Tooltip>
        <Tooltip title="Yellow" onClick={(e)=>applyColor(e,"#fff475")}>
          <IconButton className="color color-yellow" />
        </Tooltip>
        <Tooltip title="Green" onClick={(e)=>applyColor(e,"#ccff90")}>
          <IconButton className="color color-green" />
        </Tooltip>
        <Tooltip title="Teal" onClick={(e)=>applyColor(e,"#a7ffeb")}>
          <IconButton className="color color-teal" />
        </Tooltip>
        <Tooltip title="Blue" onClick={(e)=>applyColor(e,"#ebebeb")}>
          <IconButton className="color color-blue" />
        </Tooltip>
        <Tooltip title="Dark Blue" onClick={(e)=>applyColor(e,"#aecbfa")}>
          <IconButton className="color color-dark-blue" />
        </Tooltip>
        <Tooltip title="Purple" onClick={(e)=>applyColor(e,"#d7aefb")}>
          <IconButton className="color color-purple" />
        </Tooltip>
        <Tooltip title="Pink" onClick={(e)=>applyColor(e,"#fdcfe8")}>
          <IconButton className="color color-pink" />
        </Tooltip>
        <Tooltip title="Brown" onClick={(e)=>applyColor(e,"#e6c9a8")}>
          <IconButton className="color color-brown" />
        </Tooltip>
        <Tooltip title="Gray" onClick={(e)=>applyColor(e,"#e8eaed")}>
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
