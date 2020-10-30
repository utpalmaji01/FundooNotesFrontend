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

  checkFirstName = (e) => {
    const pattern = '^[A-Za-z]{3,}$';
    if (e.target.value.length <= 0) {
      this.setState({
        fiestNameFlag: false,
        firstNameHelperText: 'require'
      })
    }
    else if (e.target.value.match(pattern)) {
      this.setState({
        fiestNameFlag: true,
        firstName: e.target.value,
        firstNameHelperText: '3 or more char'
      })
    }
    else {
      this.setState({
        fiestNameFlag: false,
        firstName: '',
        firstNameHelperText: '3 or more char'
      })
    }
  }

  checkSecondName = (e) => {
    const pattern = '^[A-Za-z]{3,}$';
    if (e.target.value.length <= 0) {
      this.setState({
        lastNameFlag: false,
        lastNameHelperText: 'require'
      })
    }
    else if (e.target.value.match(pattern)) {
      this.setState({
        lastNameFlag: true,
        lastName: e.target.value,
        lastNameHelperText: '3 or more char'
      })
    }
    else {
      this.setState({
        lastNameFlag: false,
        lastName: '',
        lastNameHelperText: '3 or more char'
      })
    }
  }
  checkEmail = (e) => {
    const pattern = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';
    if (e.target.value.match(pattern)) {
      this.setState({
        email: e.target.value,
        emailFlag: true
      })
    } else {
      this.setState({
        emailFlag: false,
        emailHelperText: 'invalid e-mail'
      })
    }
  }

  checkPassword = (e) => {
    const pattern = "(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[*.!@$%^&(){}:;<>,?/~_+=|]).{8,}";
    if (e.target.value.match(pattern)) {
      this.setState({
        passWord: e.target.value
      })
    } else {
      this.setState({
        passwordHelperText: 'invalid password'
      })
    }
  }

  checkConfirmPassword = (e) => {
    const pattern = '^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[*.!@$%^&(){}:;<>,?/~_+=|]).{8,}$';
    if (e.target.value.match(pattern)) {
      if (e.target.value === this.state.passWord) {
        this.setState({
          passWordFlag: true,
          confirmPassword: e.target.value
        })
      }
      else {
        this.setState({
          passWordFlag: false,
          passwordHelperText: "both password did not match"
        })
      }
    } else {
      this.setState({
        passwordHelperText: 'invalid password'
      })
    }

  }

  addPerson = () => {
    if (this.state.fiestNameFlag && this.state.lastNameFlag && this.state.emailFlag && this.state.passWordFlag) {
      let singUpObjet = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        service: "advance",
      };
      console.log(singUpObjet);
    }
  }

  handleClickShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    })
  };


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