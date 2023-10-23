import React from "react";
import { Grid, Typography } from "@mui/material";
import "../Main.css";
import Skills from "../Components/Skills";
import { motion } from "framer-motion";

function AboutMe() {
  const TypographyMotion = motion(Typography);
  const GridMotion = motion(Grid);

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        py={3}
        px={12}
        justifyContent="center"
        sx={{ color: "white" }}
        id="AboutMe"
      >
        <TypographyMotion
          initial={{ opacity: 0, x: "-5rem" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ duration: 1, delay: 1 }}
          className="Home"
          variant="body1"
          component="h4"
          lineHeight={1}
        >
          Hi, my name is
        </TypographyMotion>
        <TypographyMotion
          initial={{ opacity: 0, x: "5rem" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ duration: 1, delay: 1 }}
          variant="h6"
          component="h2"
          paddingLeft={2}
          lineHeight={1}
        >
          MARIA CATHERINE MORI
        </TypographyMotion>
        <TypographyMotion
          initial={{ opacity: 0, x: "-5rem" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ duration: 1, delay: 1 }}
          variant="h4"
          component="h1"
          lineHeight={1}
        >
          <b>FRONTEND DEVELOPER</b>
        </TypographyMotion>
        <TypographyMotion
          initial={{ opacity: 0, x: "5rem" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ duration: 1, delay: 1 }}
          variant="body2"
          component="p"
          paddingLeft={4}
          lineHeight={1}
        >
          My name is Maria Catherine Mori. I am a frontend developer based in
          Tokyo, Japan. I am a career-shifter from being a financial analyst to
          a web developer. I am passionate in making any ideas to reality. I
          love to work in groups where everyone can voice their opinions.
        </TypographyMotion>
      </Grid>
      <Grid
        item
        container
        xs={12}
        className="customGridHeight"
        sx={{ backgroundColor: "#cee7a6" }}
      >
        <GridMotion
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          container
          display="flex"
          alignContent="center"
        >
          <Grid item xs={12} px={3} sx={{ color: "#c3d79c" }} id="Skills">
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
        </GridMotion>
      </Grid>
    </Grid>
  );
}

export default AboutMe;
