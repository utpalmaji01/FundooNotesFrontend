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
  Search as SearchIcon,
  Person as PersonIcon,
  ExitToApp as ExitToAppIcon,
} from "@material-ui/icons";
import apiCalls from "../sevices/apiCalls.js";
import history from "../History";
import "../style/dashBoardHeader.scss";

export default function AppHeader({ setListSize }) {
  const logout = async () => {
    let token = localStorage.getItem("id");
    let responce = await apiCalls.userLogOut(token);
    if (responce.status === 204) {
      history.push("/login");
    }
  };
  return (
    <>
      <AppBar position="fixed" className='app-bar'>
        <Toolbar>
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
            <ViewAgendaIcon fontSize="small" />
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <PersonIcon fontSize="small" />
          </IconButton>
          <IconButton color="inherit" aria-label="menu" onClick={logout}>
            <ExitToAppIcon fontSize="small" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
