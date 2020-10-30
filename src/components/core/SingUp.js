import React, { Component } from 'react';
import Header from './header';
import { Box, Grid, TextField, Typography, InputAdornment, IconButton, Button } from '@material-ui/core';



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
          <Header  />
          </Grid>
            
          </Grid>
          <Grid container alignContent='center' item md={3} className='secondery-module'>
           
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SingUp;