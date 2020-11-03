import { Grid } from '@material-ui/core';
import React, { Fragment } from 'react';
import Header from './header.jsx'

export default function DashBoard() {

  return (
    <Fragment>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Header />
            </Grid>
        </Grid>
    </Fragment>
  );
}
