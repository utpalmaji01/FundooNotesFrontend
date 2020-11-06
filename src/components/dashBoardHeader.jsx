import React from "react";
import IconButton from "@material-ui/core/IconButton";
import {
  AppBar,
  InputAdornment,
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
  ExitToApp as ExitToAppIcon,
} from "@material-ui/icons";
import "../style/dashBoardHeader.scss";

export default function DashBoardHeader({ setListSize }) {
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
          <div className="first-spacing"></div>
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
          <div className="second-spacing"></div>
          <IconButton color="inherit" aria-label="menu">
            <ReplayIcon fontSize="small" />
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <ViewAgendaIcon fontSize="small" />
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <SettingsIcon fontSize="small" />
          </IconButton>
          <div className="third-spacing"></div>
          <IconButton color="inherit" aria-label="menu">
            <AppsIcon fontSize="small" />
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <PersonIcon fontSize="small" />
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <ExitToAppIcon fontSize="small" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
