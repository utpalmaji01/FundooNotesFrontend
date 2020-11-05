import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import {
  AppBar,
  Drawer,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  ViewAgenda as ViewAgendaIcon,
  Replay as ReplayIcon,
  Search as SearchIcon,
  Settings as SettingsIcon,
  Apps as AppsIcon,
  Person as PersonIcon,
  EmojiObjectsOutlined as EmojiObjectsIcon,
  NotificationsNone as NotificationsNoneIcon,
  Create as CreateIcon,
  ArchiveOutlined as ArchiveIcon,
  DeleteOutline as DeleteOutlineIcon,
} from "@material-ui/icons";
import clsx from "clsx";
import Notes from "./dashBoardNotes.jsx";
import "../style/dashBoard.scss";

export default function DashBoard() {
  const [isDrawerMin, setIsDrawerMin] = useState(true);

  const setListSize = () => {
    setIsDrawerMin(!isDrawerMin);
  };

  const expandList = () => {
    setIsDrawerMin(false);
  };

  const minifyList = () => {
    setIsDrawerMin(true);
  };
  return (
    <>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="menu" onClick={setListSize}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            FundooNotes
          </Typography>
          <div className="spacing"></div>
          <TextField
            className="search-bar"
            placeholder="Search"
            margin="dense"
            variant="outlined"
            type="text"
            InputProps={{
              // <-- toggle button is added.
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <div className="spacing"></div>
          <IconButton color="inherit" aria-label="menu">
            <ReplayIcon fontSize="small" />
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <ViewAgendaIcon fontSize="small" />
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <SettingsIcon fontSize="small" />
          </IconButton>
          <div className="second-spacing"></div>
          <IconButton color="inherit" aria-label="menu">
            <AppsIcon fontSize="small" />
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <PersonIcon fontSize="small" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent">
        <List onMouseEnter={expandList} onMouseLeave={minifyList}>
          <ListItem button className="list-item">
            <ListItemIcon>
              <EmojiObjectsIcon />
            </ListItemIcon>
            <ListItemText
              primary="Notes"
              className={clsx("listItemText", { "list-min": isDrawerMin })}
            />
          </ListItem>
          <ListItem button className="list-item">
            <ListItemIcon>
              <NotificationsNoneIcon />
            </ListItemIcon>
            <ListItemText
              primary="Reminders"
              className={clsx("listItemText", { "list-min": isDrawerMin })}
            />
          </ListItem>
          <ListItem button className="list-item">
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText
              primary="Edit Labels"
              className={clsx("listItemText", { "list-min": isDrawerMin })}
            />
          </ListItem>
          <ListItem button className="list-item">
            <ListItemIcon>
              <ArchiveIcon />
            </ListItemIcon>
            <ListItemText
              primary="Archives"
              className={clsx("listItemText", { "list-min": isDrawerMin })}
            />
          </ListItem>
          <ListItem button className="list-item">
            <ListItemIcon>
              <DeleteOutlineIcon />
            </ListItemIcon>
            <ListItemText
              primary="Trash"
              className={clsx("listItemText", { "list-min": isDrawerMin })}
            />
          </ListItem>
        </List>
      </Drawer>
      <Notes />
    </>
  );
}
