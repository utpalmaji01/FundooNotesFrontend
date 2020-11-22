import React, { useState } from "react";
import {
  Grid,
  TextField,
  Box,
  Button,
  Card,
  Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Header from "./header.jsx";
import history from "../../History";
import apiCalls from "../../sevices/apiCalls.js";
import "../../style/forgetPassword.scss";

const ForgetPassword = () => {
  const [email, setemail] = useState("");
  const [emailHelperText, setemailHelperText] = useState(" ");
  const [emailFlag, setemailFlag] = useState(false);
  const [snackbarActive, setsnackbarActive] = useState(false);

  const checkEmail = (e) => {
    setemail(e.target.value);
    const pattern = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if (e.target.value.match(pattern)) {
      setemailFlag(false);
      setemailHelperText(" ");
    } else {
      setemailFlag(true);
      setemailHelperText("invalid e-mail");
    }
  };

  const checkAuthentication = () => {
    let emailLength = true;

    if (email.length < 1) {
      emailLength = false;
      setemailFlag(true);
      setemailHelperText("Require");
    }

    if (emailLength) {
      if (!emailFlag) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const sensResetLink = () => {
    if (checkAuthentication()) {
      let resetObject = {
        email: email,
      };
      apiCalls.sendResetLink(resetObject).then((responce) => {
        if (responce.status === 200) {
          setsnackbarActive(true);
        }
      });
    }
  };

  const closeSnackbar = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setsnackbarActive(false);
  };

  return (
    <>
      <Card className="main-container forget-password">
        <Grid container direction="row" wrap="nowrap" spacing={2}>
          <Grid container item md={12} sm={12} spacing={2}>
            <Grid item md={12} sm={12}>
              <Header />
              <Box fontWeight="fontWeightBold" m={2} className="sub-heading">
                Forget Your Password
              </Box>
              <Box fontWeight="fontWeightMedium" m={1} className="sub-heading">
                Enter your email address and we'll send you a link to reaset
                your password
              </Box>
            </Grid>
            <Grid item md={12} sm={12} xs={12} className="input-field">
              <TextField
                fullWidth
                name="Email"
                required={true}
                label="Email"
                type="email"
                helperText={emailHelperText}
                margin="dense"
                variant="outlined"
                error={emailFlag}
                onChange={checkEmail}
              />
            </Grid>
            {/* 
            <Grid item>
              <Button
                color="primary"
                onClick={() => history.push("/login")}
                className="button-text"
              >
                Remember Password
              </Button>
            </Grid> */}
            <Grid item md={12} sm={12} xs={12} className="button-group">
              <div>
                <Button
                  color="primary"
                  onClick={() => history.push("/login")}
                  className="remember-password-button"
                >
                  Remember Password
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className="send-reset-link-button"
                  onClick={sensResetLink}
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

export default ForgetPassword;
