import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  ViewAgenda as ViewAgendaIcon,
  Search as SearchIcon,
  DashboardOutlined as DashboardOutlinedIcon,
} from "@material-ui/icons";
import notesLogo from "../assets/NotesLogo.png";
import userServices from "../sevices/userServices.js";
import history from "../History";
import "../style/appBar.scss";

export default function AppHeader(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isProfileClicked, setIsProfileClicked] = useState(false);

  const showProfile = () => {
    setIsProfileClicked(!isProfileClicked);
    setName(
      localStorage.getItem("firstName") + " " + localStorage.getItem("lastName")
    );
    setEmail(localStorage.getItem("email"));
  };

  const logout = () => {
    let token = localStorage.getItem("id");
    userServices.userLogOut(token).then((responce) => {
      if (responce.status === 204) {
        console.log(responce);
        localStorage.setItem("id", "");
        localStorage.setItem("firstName", "");
        localStorage.setItem("lastName", "");
        localStorage.setItem("email", "");
        // localStorage.clear();
        history.push("/login");
      }
    });
  };
  return (
    <>
      <div className="appBar-container">
        <IconButton aria-label="menu" onClick={props.setListSize}>
          <MenuIcon />
        </IconButton>
        <IconButton disabled className="note-logo-image">
          <img src={notesLogo} alt="fundoo-logo" className="note-logo" />
        </IconButton>
        <Typography variant="h6" color="textPrimary" className="app-name">
          FundooNotes
        </Typography>
        <div className="spacing-left"></div>
        <TextField
          className="search-bar"
          placeholder="Search"
          margin="dense"
          variant="outlined"
          type="text"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" className="search-icon">
                <IconButton disabled aria-label="search">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {props.gridViewMode ? (
          <IconButton
            aria-label="menu"
            className="toggle-view-mode"
            onClick={props.setViewMode}
          >
            <ViewAgendaIcon fontSize="small" />
          </IconButton>
        ) : (
          <IconButton
            aria-label="menu"
            className="toggle-view-mode"
            onClick={props.setViewMode}
          >
            <DashboardOutlinedIcon fontSize="small" />
          </IconButton>
        )}
        
        <IconButton
          aria-label="menu"
          onClick={showProfile}
          className="profile-button"
        >
          <samp className="profile-icon">
            {localStorage.getItem("firstName").slice(0, 1)}
          </samp>
        </IconButton>
      </div>
      {isProfileClicked && (
        <Card className="profile">
          <CardContent>
            <Typography variant="h5" color="textPrimary">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {email}
            </Typography>
          </CardContent>
          <Divider light />
          <CardActions>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              size="small"
              onClick={logout}
              className="logout-button"
            >
              Log Out
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  );
}
