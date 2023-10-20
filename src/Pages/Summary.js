import React from "react";
import "../Main.css";
import FooterSum from "../Components/FooterSum";
import Title from "../Components/Title";
import AboutMe from "../Components/AboutMe";
import MainBar from "../Components/MainBar";
import { Grid } from "@mui/material";
import ProjectSum from "../Components/Projects";

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
          <ProjectSum />
        </Grid>
      </Grid>
      <FooterSum />
    </>
  );
}

export default Summary;
