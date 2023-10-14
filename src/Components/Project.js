import LaunchIcon from "@mui/icons-material/Launch";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Project({ projectSrc, projectName, projectLink, projectNarrative }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "blanchedalmond",
        color: "#468759",
      }}
      raised
    >
      <CardMedia sx={{ height: 140 }} image={projectSrc} title={projectName} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {projectName}
        </Typography>
        <Typography variant="body2">{projectNarrative}</Typography>
      </CardContent>
      <CardActions>
        <Link to={projectLink} target="_blank" rel="noopener noreferrer">
          <LaunchIcon />
        </Link>
      </CardActions>
    </Card>
  );
}

export default Project;
