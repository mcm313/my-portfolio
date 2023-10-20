import React from "react";
import { AppBar, Grid, Typography, IconButton } from "@mui/material";
import { Copyright } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <AppBar
      position="relative"
      sx={{ backgroundColor: "#dfdfdf", top: "auto", bottom: 0 }}
    >
      <Grid container display="inline-flex" paddingX={1}>
        <Grid item xs={6} display="flex" alignItems="center">
          <Typography fontSize={12}>Copyright</Typography>
          <Copyright fontSize="small" />
          <Typography fontSize={12}>MORIMC 2023</Typography>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="end">
          <Link
            to={"https://www.linkedin.com/in/maria-catherine-mori-1729b7227/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon fontSize="small" sx={{ color: "white" }} />
          </Link>
          <Link
            to={"https://github.com/mcm313"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon fontSize="small" sx={{ color: "white" }} />
          </Link>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default Footer;
