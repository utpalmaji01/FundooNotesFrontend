import React, { Component } from "react";
import image from "../../assets/account.png";
import {
  Box,
  Grid,
  TextField,
  Typography,
  IconButton,
  Button,
  Card,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Header from "./header.jsx";
import "../../style/SingUp.scss";
import history from "../../History";

import apiCalls from "../../sevices/apiCalls.js";

class SingUp extends Component {
  state = {
    showPassword: false,
    firstName: "",
    lastName: "",
    email: "",
    passWord: "",
    confirmPassword: "",
    firstNameHelperText: " ",
    lastNameHelperText: " ",
    emailHelperText: " ",
    passwordHelperText: " ",
    confirmPasswordHelperText: " ",
    fiestNameFlag: false,
    lastNameFlag: false,
    emailFlag: false,
    passWordFlag: false,
    confirmPassWordFlag: false,
  };

  checkFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
    const pattern = "^[A-Za-z]{3,}$";
    if (e.target.value.match(pattern)) {
      this.setState({
        fiestNameFlag: false,
        firstName: e.target.value,
        firstNameHelperText: " ",
      });
    } else {
      this.setState({
        fiestNameFlag: true,
        firstName: " ",
        firstNameHelperText: "3 or more char",
      });
    }
  };

  checkSecondName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
    const pattern = "^[A-Za-z]{3,}$";
    if (e.target.value.match(pattern)) {
      this.setState({
        lastNameFlag: false,
        lastNameHelperText: " ",
      });
    } else {
      this.setState({
        lastNameFlag: true,
        lastName: "",
        lastNameHelperText: "3 or more char",
      });
    }
  };
  checkEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
    const pattern = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if (e.target.value.match(pattern)) {
      this.setState({
        emailFlag: false,
        emailHelperText: " ",
      });
    } else {
      this.setState({
        emailFlag: true,
        emailHelperText: "invalid e-mail",
      });
    }
  };

  checkPassword = (e) => {
    this.setState({
      passWord: e.target.value,
    });
    const pattern =
      "(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[*.!@$%^&(){}:;<>,?/~_+=|]).{8,}";
    if (e.target.value.match(pattern)) {
      this.setState({
        passwordHelperText: " ",
        passWordFlag: false,
      });
    } else {
      this.setState({
        passwordHelperText: "invalid password",
        passWordFlag: true,
      });
    }
  };

  checkConfirmPassword = (e) => {
    this.setState({
      confirmPassword: e.target.value,
    });
    const pattern =
      "^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[*.!@$%^&(){}:;<>,?/~_+=|]).{8,}$";
    if (e.target.value.match(pattern)) {
      if (e.target.value === this.state.passWord) {
        this.setState({
          confirmPassWordFlag: false,
          confirmPasswordHelperText: " ",
        });
      } else {
        this.setState({
          confirmPassWordFlag: true,
          confirmPasswordHelperText: "both password did not match",
        });
      }
    } else {
      this.setState({
        confirmPassWordFlag: true,
        confirmPasswordHelperText: "invalid password",
      });
    }
  };

  checkAuthentication = () => {
    let firstNameLength = true;
    let lastNameLength = true;
    let emailLength = true;
    let passwordLength = true;
    let confirmPasswordLength = true;

    if (this.state.firstName.length < 1) {
      firstNameLength = false;
      this.setState({
        firstNameHelperText: "Require",
        fiestNameFlag: true,
      });
    }

    if (this.state.lastName.length < 1) {
      lastNameLength = false;
      this.setState({
        lastNameHelperText: "Require",
        lastNameFlag: true,
      });
    }

    if (this.state.email.length < 1) {
      emailLength = false;
      this.setState({
        emailHelperText: "Require",
        emailFlag: true,
      });
    }

    if (this.state.passWord.length < 1) {
      passwordLength = false;
      this.setState({
        passwordHelperText: "Require",
        passWordFlag: true,
      });
    }

    if (this.state.passWord.length < 1) {
      confirmPasswordLength = false;
      this.setState({
        confirmPasswordHelperText: "Require",
        confirmPassWordFlag: true,
      });
    }

    if (
      firstNameLength &&
      lastNameLength &&
      emailLength &&
      passwordLength &&
      confirmPasswordLength
    ) {
      if (
        !this.state.fiestNameFlag &&
        !this.state.lastNameFlag &&
        !this.state.emailFlag &&
        !this.state.passWordFlag &&
        !this.state.confirmPassWordFlag
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  addPerson = () => {
    if (this.checkAuthentication()) {
      let singUpObjet = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.passWord,
        service: "advance",
      };
      apiCalls.newUserSignUp(singUpObjet).then((response) => {
        if (response.status === 200) {
          history.push("/login");
        }
      });
    }
  };

  handleClickShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  render() {
    return (
      <>
        <Card className="main-container sing-up">
          <Grid container direction="row" wrap="nowrap" spacing={2}>
            <Grid
              container
              item
              md={7}
              sm={8}
              spacing={2}
              className="main-module"
            >
              <Grid item md={12} sm={12}>
                <div className="header-singup">
                  <Header />
                </div>
                <Box fontWeight="fontWeightBold" m={1}>
                  Create your Account
                </Box>
              </Grid>

              <Grid item md={6} sm={6} xs={12} className="input-field">
                <TextField
                  fullWidth
                  required={true}
                  label="First Name"
                  helperText={this.state.firstNameHelperText}
                  margin="dense"
                  variant="outlined"
                  error={this.state.fiestNameFlag}
                  onChange={this.checkFirstName}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={12} py={4} className="input-field">
                <TextField
                  fullWidth
                  required={true}
                  label="Last Name"
                  helperText={this.state.lastNameHelperText}
                  margin="dense"
                  variant="outlined"
                  error={this.state.lastNameFlag}
                  onChange={this.checkSecondName}
                />
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
                  error={this.state.emailFlag}
                  onChange={this.checkEmail}
                />
              </Grid>
              <Grid item md={5} sm={5} xs={11} className="input-field">
                <TextField
                  fullWidth
                  required={true}
                  label="Password"
                  helperText={this.state.passwordHelperText}
                  margin="dense"
                  variant="outlined"
                  type={this.state.showPassword ? "text" : "password"}
                  error={this.state.passWordFlag}
                  onChange={this.checkPassword}
                />
              </Grid>
              <Grid item md={6} sm={6} xs={11} className="input-field">
                <TextField
                  fullWidth
                  required={true}
                  label="Confirm"
                  helperText={this.state.confirmPasswordHelperText}
                  margin="dense"
                  variant="outlined"
                  type={this.state.showPassword ? "text" : "password"}
                  error={this.state.confirmPassWordFlag}
                  onChange={this.checkConfirmPassword}
                  // InputProps={{
                  //   // <-- toggle button is added.
                  //   endAdornment: (
                  //     <InputAdornment position="end">
                  //       <IconButton
                  //         aria-label="toggle password visibility"
                  //         onClick={this.handleClickShowPassword}
                  //       >
                  //         {this.state.showPassword ? (
                  //           <Visibility />
                  //         ) : (
                  //           <VisibilityOff />
                  //         )}
                  //       </IconButton>
                  //     </InputAdornment>
                  //   ),
                  // }}
                />
              </Grid>
              <Grid item md={1} sm={1} xs={1}>
                <IconButton
                  className="eye-icon-button"
                  aria-label="toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <Typography>
                  <Box
                    component="span"
                    fontWeight="fontWeightLight"
                    fontSize={12}
                  >
                    Use 8 or more characters with a mix of uppercase, lowercase,
                    number and special character
                  </Box>
                </Typography>
              </Grid>
              <Grid item md={12} sm={12} xs={12} className="button-group">
                <div>
                  <Button
                    color="primary"
                    className="log-in-button"
                    onClick={() => history.push("/login")}
                  >
                    Log In Instead
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className="sing-up-button"
                    onClick={this.addPerson}
                  >
                    Sign Up
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              alignContent="center"
              item
              md={5}
              sm={4}
              className="secondery-module"
            >
              <Box>
                <img src={image} alt="logo" className="account-image" />
              </Box>
            </Grid>
          </Grid>
        </Card>
      </>
    );
  }
}

export default SingUp;
