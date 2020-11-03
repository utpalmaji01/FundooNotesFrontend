import React, { Component } from "react";
import {
  Grid,
  TextField,
  Box,
  InputAdornment,
  IconButton,
  Button,
  Card,
  Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Header from "./header.jsx";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import history from "../../History";
import "../../style//LogIn.scss";
import apiCalls from "../../sevices/apiCalls.js";

class LogIn extends Component {
  state = {
    showPassword: false,
    email: "",
    passWord: "",
    emailHelperText: " ",
    passwordHelperText: " ",
    emailFlag: true,
    passWordFlag: true,
    snackbarActive: false,
    snackBarMesage: "LogIn Successfull",
    snackBarSeverity: "success",
  };

  checkEmail = (e) => {
    const pattern = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if (e.target.value.match(pattern)) {
      this.setState({
        email: e.target.value,
        emailFlag: true,
        emailHelperText: " ",
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
        passwordHelperText: " ",
      });
    } else {
      this.setState({
        passwordHelperText:
          "8 or more char with a mix of uppercase, lowercase, number and Spl. char",
        passWordFlag: false,
      });
    }
  };

  logIn = async () => {
    if (this.state.emailFlag && this.state.passWordFlag) {
      localStorage.setItem("username", this.state.email);
      console.log(localStorage.getItem("username"));
      let logInObj = {
        username: this.state.email,
        password: this.state.passWord,
      };
      let responce = await apiCalls.userLogIn(logInObj);
      if (responce.status === 200) {
        this.setState({
          snackbarActive: true,
        });
        history.push("/dashBoard")
      } else {
        this.setState({
          snackbarActive: true,
          snackBarMesage: "LogIn un-successfull",
          snackBarSeverity: "error",
        });
      }
    }
  };

  closeSnackbar = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({
      snackbarActive: false,
    });
  };

  handleClickShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  render() {
    return (
      <Fragment>
        <Card className="main-container log-in">
          <Grid container direction="row" wrap="nowrap" spacing={2}>
            <Grid container item md={12} sm={12} spacing={2}>
              <Grid item md={12} sm={12}>
                <Header />
                <Box fontWeight="fontWeightBold" m={1} className="sub-heading">
                  Sing In
                </Box>
                <Box fontWeight="fontWeightBold" m={1} className="sub-heading">
                  to continue to FundooFotes
                </Box>
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
                  label="Password"
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
              <Grid item>
                <Button
                  color="primary"
                  onClick={() => history.push("/forgetPassword")}
                  className="button-text"
                >
                  Forget Password
                </Button>
              </Grid>
              <Grid item md={12} sm={12} xs={12} className="button-group">
                <div>
                  <Button
                    color="primary"
                    className="crate-account-button"
                    onClick={() => history.push("/")}
                  >
                    Create Account
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className="login-button"
                    onClick={this.logIn}
                  >
                    Log In
                  </Button>
                  <Snackbar
                    open={this.state.snackbarActive}
                    autoHideDuration={1000}
                    onClose={this.closeSnackbar}
                  >
                    <Alert
                      severity={this.state.snackBarSeverity}
                      onClose={this.closeSnackbar}
                    >
                      {this.state.snackBarMesage}
                    </Alert>
                  </Snackbar>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Card>
        </Fragment>
    );
  }
}

export default LogIn;
