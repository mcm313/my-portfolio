import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import projectSrc1 from "../pictures/project1.png";
import "../Main.css";
import Project from "../Components/Project";
import MainBar from "../Components/MainBar";
import Footer from "../Components/Footer";
import ProjectTitle from "../Components/ProjectTitle";

function Projects() {
  return (
    <>
      <MainBar />
      <Grid
        container
        id="projectPage"
        className="customPage"
        p={5}
        overflow="auto"
        display="flex"
        alignContent="start"
      >
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          paddingBottom={5}
        >
          <ProjectTitle />
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          direction="column"
          justifyContent="center"
          rowGap={2}
        >
          <Project
            projectSrc={projectSrc1}
            projectName="Checklist"
            projectLink="https://my-checklist.onrender.com"
            projectNarrative="Simple checklist for everybody"
          />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default Projects;
