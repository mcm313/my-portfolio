import { Typography, Grid } from "@mui/material";
import React from "react";
import "../Main.css";
import ProjectList from "../Data/ProjectList";
import Project from "./Project";

function Projects() {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        paddingBottom={5}
      >
        <Typography
          className="Home"
          variant="h1"
          component="h1"
          id="projectTitle"
        >
          <b>PROJECTS</b>
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        display="flex"
        direction="column"
        justifyContent="center"
        rowGap={2}
      >
        {ProjectList.map((item) => (
          <Project
            projectSrc={item.src}
            projectName={item.name}
            projectLink={item.link}
            projectNarrative={item.narrative}
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default Projects;
