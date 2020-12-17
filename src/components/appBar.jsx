import React, { useState, useRef } from "react";
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
  ViewAgendaOutlined as ViewAgendaOutlinedIcon,
  Search as SearchIcon,
  DashboardOutlined as DashboardOutlinedIcon,
} from "@material-ui/icons";
import notesLogo from "../assets/NotesLogo.png";
import userServices from "../sevices/userServices.js";
import history from "../History";
import "../style/appBar.scss";
import noteServices from "../sevices/noteServices";

export default function AppHeader(props) {
  const [name, setName] = useState("");
  const [imgUrl, setimgUrl] = useState(
    "http://fundoonotes.incubation.bridgelabz.com/" +
      localStorage.getItem("profilePic")
  );
  const [email, setEmail] = useState("");
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  const inputFile = useRef(null);

  const setsearchKeyword = (e) => {
    if (e.charCode === 13) {
      if (e.target.value) {
        props.setSelectedMenu("Search");
        props.setSearchNote(e.target.value);
        history.push("/dashBoard/Search");
      } else {
        history.push("/dashBoard/Notes");
      }
    }
  };
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
        history.push("/login");
      }
    });
  };

  const onButtonClick = () => {
    inputFile.current.click();
  };

  const handleFileUpload = (e) => {
    console.log(e.target.files[0]);
    console.log("hello");
    const fd = new FormData();
    fd.append("file", e.target.files[0]);
    noteServices
      .addProfilePicture(fd)
      .then((responce) => {
        console.log(responce);
        localStorage.setItem("profilePic", responce.data.status.imageUrl);
        setimgUrl(
          "http://fundoonotes.incubation.bridgelabz.com/" +
            localStorage.getItem("profilePic")
        );
      })
      .catch((error) => {
        console.log(error);
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
          onKeyPress={setsearchKeyword}
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
            <ViewAgendaOutlinedIcon fontSize="small" />
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
          {localStorage.getItem("profilePic").length > 1 ? (
            <img className="profile-image" src={imgUrl} alt="profile-pic" />
          ) : (
            <samp className="profile-icon">
              {localStorage.getItem("firstName").slice(0, 1)}
            </samp>
          )}
        </IconButton>
      </div>
      {isProfileClicked && (
        <Card className="profile">
          <CardContent className="profile-contant">
            <div className="profile-pic" onClick={onButtonClick}>
              {localStorage.getItem("profilePic").length > 1 ? (
                <img src={imgUrl} alt="profile-pic" />
              ) : (
                <samp className="profile-name-icon">
                  {localStorage.getItem("firstName").slice(0, 1)}
                </samp>
              )}
            </div>
            <input
              style={{ display: "none" }}
              ref={inputFile}
              onChange={handleFileUpload}
              type="file"
              accept="image/*"
            />
            <div className="profile-details">
              <Typography variant="h5" color="textPrimary">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {email}
              </Typography>
            </div>
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
