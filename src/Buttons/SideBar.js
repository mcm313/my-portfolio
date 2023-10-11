import { Grid, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

function SideBar() {
  const [maxHeight, setMaxHeight] = useState(window.innerHeight);

  const updateMaxHeight = () => {
    setMaxHeight(window.innerHeight);
  };

  useEffect(() => {
    // Add an event listener to listen for window resize events
    window.addEventListener("resize", updateMaxHeight);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateMaxHeight);
    };
  }, []);

  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      justifyContent="center"
      height={maxHeight - 35}
      spacing={1}
    >
      <Grid item xs={1}>
        <IconButton size="large" aria-label="linkedin">
          <LinkedInIcon fontSize="inherit" />
        </IconButton>
      </Grid>
      <Grid item xs={1}>
        <IconButton size="large" aria-label="github">
          <GitHubIcon fontSize="inherit" />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default SideBar;
