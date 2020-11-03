import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { InputAdornment, TextField } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import ReplayIcon from '@material-ui/icons/Replay';
import SearchIcon from '@material-ui/icons/Search';
import BuildIcon from '@material-ui/icons/Build';
import AppsIcon from '@material-ui/icons/Apps';
import PersonIcon from '@material-ui/icons/Person';
import "../../style/dashBoardHeader.scss";



export default function Header() {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            FundooNotes
          </Typography>
          <TextField
          className='search-bar'
            placeholder="Search"
            margin="dense"
            variant="outlined"
            type="text"
            InputProps={{
              // <-- toggle button is added.
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <IconButton color="inherit" aria-label="menu">
            <ReplayIcon fontSize="small"/>
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <ViewAgendaIcon fontSize="small" />
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <BuildIcon fontSize="small" />
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <AppsIcon fontSize="small" />
          </IconButton>
          <IconButton color="inherit" aria-label="menu">
            <PersonIcon fontSize="small" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}
