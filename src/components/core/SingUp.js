import React, { Component } from 'react';
import Header from './header';
import { Box, Grid, TextField, Typography, InputAdornment, IconButton, Button } from '@material-ui/core';



class SingUp extends Component {
  state = {
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