import React, { useState } from "react";
import BackButton from "../Buttons/BackButton";
import { Grid, Typography } from "@mui/material";
import projectSrc1 from "../pictures/project1.png";
import "../Main.css";
import Project from "../Components/Project";
import BackToTopButton from "../Buttons/BackToTopButton";

function Projects() {
  const [scrollTarget, setScrollTarget] = useState(undefined);
  return (
    <Grid
      container
      className="customGrid"
      p={5}
      overflow="auto"
      ref={(node) => {
        if (node) {
          setScrollTarget(node);
        }
      }}
    >
      <Grid item xs={12}>
        <Typography
          className="Home"
          variant="h3"
          component="h1"
          textAlign="center"
        >
          Project
        </Typography>
      </Grid>
      <Grid
        item
        container
        pt={3}
        spacing={2}
        display="flex"
        justifyContent="center"
      >
        <Grid item xs="auto">
          <Project
            projectSrc={projectSrc1}
            projectName="Checklist"
            projectLink="https://my-checklist.onrender.com"
            projectNarrative="Simple checklist for everybody"
          />
        </Grid>
      </Grid>
      <BackButton />
      <BackToTopButton scrollTarget={scrollTarget} />
    </Grid>
  );
}

export default Projects;
