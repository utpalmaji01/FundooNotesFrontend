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
import userServices from "../../sevices/userServices.js";
import "../../style/forgetPassword.scss";

const ForgetPassword = () => {
  const [email, setemail] = useState("");
  const [emailHelperText, setemailHelperText] = useState(" ");
  const [emailFlag, setemailFlag] = useState(false);
  const [snackbarActive, setsnackbarActive] = useState(false);
  const [snackBarSeverity, setSnackBarSeverity] = useState("success");
  const [snackBarMesage, setsnackBarMesage] = useState(
    "Reset link sent successfully"
  );

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
      userServices
        .sendResetLink(resetObject)
        .then((responce) => {
          console.log(responce);
          if (responce.status === 200) {
            setsnackbarActive(true);
          }
        })
        .catch((error) => {
          console.log(error);
          setsnackbarActive(true);
          setSnackBarSeverity("error");
          setsnackBarMesage("Some error occoured");
          console.log(error);
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
                name="email"
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
                  <Alert onClose={closeSnackbar} severity={snackBarSeverity}>
                    {snackBarMesage}
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
