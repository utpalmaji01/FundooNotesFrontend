import React, { Component } from "react";
import {
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Card,
} from "@material-ui/core";
import Header from "./header";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import history from "../../History";
import "../../style//LogIn.scss";

import axios from "axios";

class LogIn extends Component {
  state = {
    showPassword: false,
    email: "",
    passWord: "",
    emailHelperText: "8 or more char",
    passwordHelperText: "8 or more char",
    emailFlag: true,
    passWordFlag: true,
  };

  checkEmail = (e) => {
    const pattern = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if (e.target.value.match(pattern)) {
      this.setState({
        email: e.target.value,
        emailFlag: true,
      });
    } else {
      this.setState({
        emailFlag: false,
        emailHelperText: "invalid e-mail",
      });
    }
  };

  checkPassword = (e) => {
    const pattern =
      "(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[*.!@$%^&(){}:;<>,?/~_+=|]).{8,}";
    if (e.target.value.match(pattern)) {
      this.setState({
        passWordFlag: true,
        passWord: e.target.value,
      });
    } else {
      this.setState({
        passwordHelperText: "invalid password",
      });
    }
  };

  logIn = () => {
    if (this.state.emailFlag && this.state.passWordFlag) {
      let logInObj = {
        username: this.state.email,
        password: this.state.passWord,
      };
      axios
        .post(
          "http://fundoonotes.incubation.bridgelabz.com/api/user/login",
          logInObj
        )
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };

  handleClickShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  render() {
    return (
      <div className="App">
        <Card className="main-container log-in">
        <Grid
          container
          direction="row"
          wrap="nowrap"
          spacing={2}
          
        >
          <Grid
            container
            item
            md={12}
            sm={12}
            spacing={2}
            className="main-module log-in"
          >
            <Grid item md={12} sm={12}>
              <Header />
            </Grid>
            <Grid item md={12} sm={12} xs={12} className="input-field">
              <TextField
                fullWidth
                required={true}
                label="Email"
                type="email"
                helperText={this.state.emailHelperText}
                margin="dense"
                variant="outlined"
                error={this.state.emailFlag === true ? false : true}
                onChange={this.checkEmail}
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12} className="input-field">
              <TextField
                fullWidth
                required={true}
                label="Confirm Password"
                helperText={this.state.passwordHelperText}
                margin="dense"
                variant="outlined"
                type={this.state.showPassword ? "text" : "password"}
                error={this.state.passWordFlag === true ? false : true}
                onChange={this.checkPassword}
                InputProps={{
                  // <-- toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={this.handleClickShowPassword}
                      >
                        {this.state.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12} className="button-group">
              <div>
                <Button
                  color="primary"
                  className="log-in-button"
                  onClick={() => history.push("/")}
                >
                  Create Account
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className="sing-up-button"
                  onClick={this.logIn}
                >
                  Log In
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
        </Card>
      </div>
    );
  }
}

export default LogIn;
