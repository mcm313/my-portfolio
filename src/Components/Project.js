import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

function Project({ projectSrc, projectName, projectLink, projectNarrative }) {
  const CardMotion = motion(Card);
  const TypographyMotion = motion(Typography);

  return (
    <>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={3}>
          <Link to={projectLink} target="_blank" rel="noopener noreferrer">
            <CardMotion
              initial={{ opacity: 0, x: "-5rem" }}
              whileInView={{ opacity: 1, x: "0" }}
              transition={{ duration: 1, delay: 1 }}
              variant="outlined"
              sx={{ border: "1px dashed white" }}
            >
              <CardMedia component="img" image={projectSrc} alt={projectName} />
            </CardMotion>
          </Link>
        </Grid>
        <Grid
          item
          xs={9}
          display="flex"
          direction="column"
          sx={{ color: "#5d6652" }}
        >
          <TypographyMotion
            initial={{ opacity: 0, x: "5rem" }}
            whileInView={{ opacity: 1, x: "0" }}
            transition={{ duration: 1, delay: 1 }}
            variant="h6"
            component="h1"
            lineHeight={1}
          >
            <i>{projectName}</i>
          </TypographyMotion>
          <TypographyMotion
            initial={{ opacity: 0, x: "5rem" }}
            whileInView={{ opacity: 1, x: "0" }}
            transition={{ duration: 1, delay: 1 }}
            variant="body2"
            component="p"
            lineHeight={1}
          >
            {projectNarrative}
          </TypographyMotion>
        </Grid>
      </Grid>
    </>
  );
}

export default Project;
