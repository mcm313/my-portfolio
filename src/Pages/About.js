import React from "react";
import MainBar from "../Components/MainBar";
import Footer from "../Components/Footer";
import AboutMe from "../Components/AboutMe";
import { Grid } from "@mui/material";

function About() {
  return (
    <>
      <MainBar />
      <Grid
        container
        className="customPage"
        overflow="auto"
        xs={12}
        alignItems="center"
        sx={{ backgroundColor: "#cee7a6" }}
      >
        <AboutMe />
      </Grid>
      <Footer />
    </>
  );
}

export default About;
