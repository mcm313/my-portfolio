import { Grid, IconButton } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link, useOutletContext } from "react-router-dom";

function SideBar() {
  const adjustedMaxHeight = useOutletContext();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      height={adjustedMaxHeight}
      spacing={1}
    >
      <Grid item xs={1}>
        <Link
          to={"https://www.linkedin.com/in/maria-catherine-mori-1729b7227/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton size="large" aria-label="linkedin" color="primary">
            <LinkedInIcon fontSize="inherit" />
          </IconButton>
        </Link>
      </Grid>
      <Grid item xs={1}>
        <Link
          to={"https://github.com/mcm313"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton color="secondary" size="large" aria-label="github">
            <GitHubIcon fontSize="inherit" />
          </IconButton>
        </Link>
      </Grid>
    </Grid>
  );
}

export default SideBar;
