import React, { useState } from "react";
import {
  Grid,
  TextField,
  Box,
  Button,
  Card,
  Snackbar,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Header from "./header.jsx";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import apiCalls from "../../sevices/apiCalls.js";

const ResetPassword = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [passWord, setpassWord] = useState(" ");
  const [confirmPassword, setconfirmPassword] = useState(" ");
  const [passwordHelperText, setpasswordHelperText] = useState(" ");
  const [confirmPasswordHelperText, setconfirmPasswordHelperText] = useState(
    " "
  );
  const [passWordFlag, setpassWordFlag] = useState(false);
  const [confirmPassWordFlag, setconfirmPassWordFlag] = useState(false);
  const [snackbarActive, setsnackbarActive] = useState(false);

  const checkPassword = (e) => {
    const pattern =
      "(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[*.!@$%^&(){}:;<>,?/~_+=|]).{8,}";
    if (e.target.value.match(pattern)) {
      setpassWord(e.target.value);
      setpasswordHelperText(" ");
      setpassWordFlag(false);
    } else {
      setpasswordHelperText("invalid password");
      setpassWordFlag(true);
    }
  };
  const checkConfirmPassword = (e) => {
    const pattern =
      "^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[*.!@$%^&(){}:;<>,?/~_+=|]).{8,}$";
    if (e.target.value.match(pattern)) {
      if (e.target.value === passWord) {
        setconfirmPassWordFlag(false);
        setconfirmPassword(e.target.value);
        setconfirmPasswordHelperText(" ");
      } else {
        setconfirmPassWordFlag(true);
        setconfirmPasswordHelperText("both password did not match");
      }
    } else {
      setconfirmPassWordFlag(true);
      setconfirmPasswordHelperText("invalid password");
    }
  };

  const resetPassword = async () => {
    if (!passWordFlag && !confirmPassWordFlag) {
      let token = window.location.pathname.slice(15);
      let resetPasswordObject = {
        newPassword: confirmPassword,
      };
      let responce = await apiCalls.resetNewPassword(
        resetPasswordObject,
        token
      );
      if (responce.status === 204) {
        setsnackbarActive(true);
      }
    }
  };

  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setsnackbarActive(false);
  };

  return (
    <>
      <Card className="main-container log-in">
        <Grid container direction="row" wrap="nowrap" spacing={2}>
          <Grid container item md={12} sm={12} spacing={2}>
            <Grid item md={12} sm={12}>
              <Header />
              <Box fontWeight="fontWeightBold" m={1} className="sub-heading">
                Reset Your Password
              </Box>
              <Box fontWeight="fontWeightBold" m={1} className="sub-heading">
                Create a new password for your account
              </Box>
            </Grid>
            <Grid item md={12} sm={12} xs={12} className="input-field">
              <TextField
                fullWidth
                required={true}
                label="New Password"
                helperText={passwordHelperText}
                margin="dense"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                error={passWordFlag}
                onChange={checkPassword}
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12} className="input-field">
              <TextField
                fullWidth
                required={true}
                label="Confirm Password"
                helperText={confirmPasswordHelperText}
                margin="dense"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                error={confirmPassWordFlag}
                onChange={checkConfirmPassword}
                InputProps={{
                  // <-- toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item md={12} sm={12} xs={12} className="button-group">
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  className="login-button"
                  onClick={resetPassword}
                >
                  Submit
                </Button>
                <Snackbar
                  open={snackbarActive}
                  autoHideDuration={1000}
                  onClose={closeSnackbar}
                >
                  <Alert onClose={closeSnackbar}>
                    Reset link sent successfully
                  </Alert>
                </Snackbar>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default ResetPassword;
