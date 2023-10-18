import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import "../Main.css";

import MainBar from "../Components/MainBar";
import Footer from "../Components/Footer";
import AboutMe from "../Components/AboutMe";
import MySkills from "../Components/MySkills";

function About() {
  return (
    <>
      <MainBar />
      <Grid
        container
        className="customPage"
        sx={{ backgroundColor: "#cee7a6" }}
        overflow="auto"
      >
        <Grid item container xs={12} alignItems="center">
          <Grid item xs={12} py={3} px={12} justifyContent="center">
            <AboutMe />
          </Grid>
          <Grid item container xs={12} className="customGridHeight">
            <MySkills />
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default About;
