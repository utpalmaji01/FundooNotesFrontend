import React, { Component } from 'react';
import Header from './header';
import image from '../../assets/account.png';
import { Box, Grid, TextField, Typography, InputAdornment, IconButton, Button } from '@material-ui/core';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import '../../style//SingUp.scss'


class SingUp extends Component {
  state = {
    showPassword: false,
    firstName: '',
    lastName: '',
    email: '',
    passWord: '',
    confirmPassword: '',
    firstNameHelperText: '3 or more char',
    lastNameHelperText: '3 or more char',
    emailHelperText: '8 or more char',
    passwordHelperText: '8 or more char',
    fiestNameFlag: false,
    lastNameFlag: false,
    emailFlag: false,
    passWordFlag: false
  }

  render() {
    return (
      <div className="App">
        <Grid container direction='row' wrap='nowrap' spacing={2} className='main-container'>
          <Grid container item md={9} sm={12} spacing={2} className='main-module' >
            <Grid item md={12} sm={12}>
              <Header />
            </Grid>

            <Grid item md={6} sm={12} xs={12} className='input-field'>
              <TextField
                fullWidth
                required={true}
                label="First Name"
                helperText={this.state.firstNameHelperText}
                margin="dense"
                variant="outlined"
                error={this.state.fiestNameFlag === true ? false : true}
                onChange={this.checkFirstName}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12} py={4} className='input-field'>
              <TextField
                fullWidth
                required={true}
                label="Last Name"
                helperText={this.state.lastNameHelperText}
                margin="dense"
                variant="outlined"
                error={this.state.lastNameFlag === true ? false : true}
                onChange={this.checkSecondName}
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12} className='input-field'>
              <TextField
                fullWidth
                required={true}
                label="Email"
                type='email'
                helperText={this.state.emailHelperText}
                margin="dense"
                variant="outlined"
                error={this.state.emailFlag === true ? false : true}
                onChange={this.checkEmail}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12} className='input-field'>
              <TextField
                fullWidth
                required={true}
                label='Password'
                helperText={this.state.passwordHelperText}
                margin="dense"
                variant="outlined"
                type={this.state.showPassword ? "text" : "password"}
                error={this.state.passWordFlag === true ? false : true}
                onChange={this.checkPassword}
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12} className='input-field'>
              <TextField
                fullWidth
                required={true}
                label='Confirm Password'
                helperText={this.state.passwordHelperText}
                margin="dense"
                variant="outlined"
                type={this.state.showPassword ? "text" : "password"}
                error={this.state.passWordFlag === true ? false : true}
                onChange={this.checkConfirmPassword}
                InputProps={{ // <-- toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={this.handleClickShowPassword}
                      >
                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item md={12} sm={12} xs={12}>
              <Typography>
                <Box component='span' fontWeight='fontWeightLight' fontSize={12}>
                  Use 8 or more characters with a mix of uppercase,
                  lowercase, number and special character
                </Box>
              </Typography>
            </Grid>
            <Grid item md={12} sm={12} xs={12} className='button-group'>
              <div>
                <Button color="primary" className='log-in-button'>Log In Instead</Button>
                <Button variant="contained" color="primary" className='sing-up-button' onClick={this.addPerson}>
                  Sing Up
                </Button>
              </div>
            </Grid>
          </Grid>
          <Grid container alignContent='center' item md={3} className='secondery-module'>
            <Box >
              <img src={image} alt="logo" className='account-image' />
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SingUp;