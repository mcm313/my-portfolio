import React from "react";
import "../Main.css";
import FooterSum from "../Components/FooterSum";
import Title from "../Components/Title";
import AboutMe from "../Components/AboutMe";
import { Grid } from "@mui/material";
import Projects from "../Components/Projects";
import MainBar from "../Components/MainBar";

function Summary() {
  return (
    <>
      <Title />
      <MainBar />
      <Grid container overflow="auto">
        <Grid
          item
          container
          xs={12}
          alignItems="center"
          sx={{ backgroundColor: "#cee7a6" }}
          id="aboutmePage"
        >
          <AboutMe />
        </Grid>
        <Grid
          item
          container
          id="projectPage"
          p={5}
          display="flex"
          alignContent="start"
        >
          <Projects />
        </Grid>
      </Grid>
      <FooterSum />
    </>
  );
}

export default Summary;
