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

const ForgetPassword = () => {
  const [email, setemail] = useState(" ");
  const [emailHelperText, setemailHelperText] = useState(" ");
  const [emailFlag, setemailFlag] = useState(true);
  const [snackbarActive, setsnackbarActive] = useState(false);

  const checkEmail = (e) => {
    console.log(email);
    const pattern = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if (e.target.value.match(pattern)) {
      setemail(e.target.value);
      setemailFlag(true);
      setemailHelperText(" ");
    } else {
      setemailFlag(false);
      setemailHelperText("invalid e-mail");
    }
  };

  const sensResetLink = async () => {
    let resetObject = {
      email: email,
    };
    let responce = await apiCalls.sendResetLink(resetObject);
    if (responce.status === 200) {
      setsnackbarActive(true);
    }
  };

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setsnackbarActive(false);
  };

  return (
    <div className="App">
      <Card className="main-container log-in">
        <Grid container direction="row" wrap="nowrap" spacing={2}>
          <Grid container item md={12} sm={12} spacing={2}>
            <Grid item md={12} sm={12}>
              <Header />
              <Box fontWeight="fontWeightBold" m={1} className='sub-heading'>
                Forget Your Password
              </Box>
              <Box fontWeight="fontWeightBold" m={1} className='sub-heading'>
                Enter your email address and we'll send you a link to reaset your password
              </Box>
            </Grid>
            <Grid item md={12} sm={12} xs={12} className="input-field">
              <TextField
                fullWidth
                required={true}
                label="Email"
                type="email"
                helperText={emailHelperText}
                margin="dense"
                variant="outlined"
                error={!emailFlag}
                onChange={checkEmail}
              />
            </Grid>

            <Grid item>
              <Button
                color="primary"
                onClick={() => history.push("/logIn")}
                className="button-text"
              >
                Remember Password
              </Button>
            </Grid>
            <Grid item md={12} sm={12} xs={12} className="button-group">
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  className="login-button"
                  onClick={sensResetLink}
                >
                  submit
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
    </div>
  );
};

export default ForgetPassword;
