import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { Grid, Typography } from "@mui/material";
import "../Main.css";
import Skills from "../Components/Skills";

function AboutMe() {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        py={3}
        px={12}
        justifyContent="center"
        sx={{ color: "white" }}
      >
        <Typography
          className="Home"
          variant="body1"
          component="h4"
          lineHeight={1}
        >
          Hi, my name is
        </Typography>
        <Typography variant="h6" component="h2" paddingLeft={2} lineHeight={1}>
          MARIA CATHERINE MORI
        </Typography>
        <Typography variant="h4" component="h1" lineHeight={1}>
          <b>FRONTEND DEVELOPER</b>
        </Typography>
        <Typography
          variant="body2"
          component="p"
          paddingLeft={4}
          lineHeight={1}
        >
          My name is Maria Catherine Mori. I am a frontend developer based in
          Tokyo, Japan. I am a career-shifter from being a financial analyst to
          a web developer. I am passionate in making any ideas to reality. I
          love to work in groups where everyone can voice their opinions.
        </Typography>
      </Grid>
      <Grid
        item
        container
        xs={12}
        className="customGridHeight"
        sx={{ backgroundColor: "#cee7a6" }}
      >
        <Grid container display="flex" alignContent="center">
          <Grid item xs={12} px={3} sx={{ color: "#c3d79c" }}>
            <Typography variant="h3" component="h1" marginBottom={-1.75}>
              <b>MY SKILLS</b>
            </Typography>
          </Grid>
          <Grid
            item
            p={5}
            xs={12}
            sx={{ backgroundColor: "#c3d79c" }}
            alignItems="center"
          >
            <Grid
              item
              xs="auto"
              container
              id="skillSet"
              paddingY={3}
              justifyContent="center"
            >
              <Skills />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AboutMe;
