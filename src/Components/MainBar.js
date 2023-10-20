import React from "react";
import Logo from "../pictures/my-logo.png";
import { AppBar, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function MainBar() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#3e4535" }}>
      <Grid container display="inline-flex" alignItems="center" padding={0.75}>
        <Grid item xs={6}>
          <Link to={"/"}>
            <img src={Logo} alt="Logo" width={175} />
          </Link>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="end">
          <Link
            to={"https://www.linkedin.com/in/maria-catherine-mori-1729b7227/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon fontSize="small" sx={{ color: "#d4e5a3" }} />
          </Link>
          <Link
            to={"https://github.com/mcm313"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon fontSize="small" sx={{ color: "#d4e5a3" }} />
          </Link>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default MainBar;
