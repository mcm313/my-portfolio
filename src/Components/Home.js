import React from "react";
import SideBar from "../Buttons/SideBar";
import { Grid } from "@mui/material";
import BackToTopButton from "../Buttons/BackToTopButton";

function Home() {
  return (
    <div>
      <Grid container>
        <Grid item xs={1}>
          <SideBar />
        </Grid>
        <Grid item xs>
          <h1>Home</h1>
        </Grid>
      </Grid>
      <BackToTopButton />
    </div>
  );
}

export default Home;
