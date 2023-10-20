import React from "react";
import MainBar from "../Components/MainBar";
import Footer from "../Components/Footer";
import Projects from "../Components/Projects";
import { Grid } from "@mui/material";

function ProjectPage() {
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
        <Projects />
      </Grid>
      <Footer />
    </>
  );
}

export default ProjectPage;
