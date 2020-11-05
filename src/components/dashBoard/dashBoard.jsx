import { Grid } from "@material-ui/core";
import React from "react";
import Header from "./dashBoardHeader.jsx";

export default function DashBoard() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid container item xs={12}>
          <Grid item>
            
          </Grid>
          <Grid item ></Grid>
        </Grid>
      </Grid>
    </>
  );
}
