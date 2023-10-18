import { Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Project({ projectSrc, projectName, projectLink, projectNarrative }) {
  return (
    <>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={3}>
          <Link to={projectLink} target="_blank" rel="noopener noreferrer">
            <Card variant="outlined" sx={{ border: "1px dashed white" }}>
              <CardMedia component="img" image={projectSrc} alt={projectName} />
            </Card>
          </Link>
        </Grid>
        <Grid item xs={9} display="flex" direction="column">
          <Typography variant="h6" component="h1" lineHeight={1}>
            <i>{projectName}</i>
          </Typography>
          <Typography variant="body2" component="p" lineHeight={1}>
            {projectNarrative}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Project;
