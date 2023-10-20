import React from "react";
import Logo from "../pictures/my-logo.png";
import "../Main.css";
import { Grid } from "@mui/material";

function Title() {
  return (
    <Grid
      container
      className="customMain"
      overflow="auto"
      alignContent="center"
      justifyContent="center"
    >
      <Grid item xs="auto">
        <img src={Logo} alt="Logo" width="445" />
      </Grid>
    </Grid>
  );
}

export default Title;
