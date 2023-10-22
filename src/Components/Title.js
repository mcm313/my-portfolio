import React from "react";
import Logo from "../pictures/my-logo.png";
import "../Main.css";
import { Grid, useMediaQuery } from "@mui/material";

function Title() {
  const matches = useMediaQuery("(min-width:450px)");

  return (
    <Grid
      container
      className="customMain"
      overflow="auto"
      alignContent="center"
      justifyContent="center"
    >
      <Grid item xs="auto">
        {matches ? (
          <img src={Logo} alt="Logo" width="445" />
        ) : (
          <img src={Logo} alt="Logo" width="355" />
        )}
      </Grid>
    </Grid>
  );
}

export default Title;
