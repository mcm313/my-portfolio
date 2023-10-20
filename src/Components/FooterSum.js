import React from "react";
import { AppBar, Grid, Typography, Link, Button } from "@mui/material";
import { Copyright } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function FooterSum() {
  const handleClickAbout = (event, link) => {
    const anchor = document.getElementById("AboutMe");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  const handleClickSkills = (event, link) => {
    const anchor = document.getElementById("Skills");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const handleClickProjects = (event, link) => {
    const anchor = document.getElementById("Projects");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <AppBar
      position="relative"
      sx={{ backgroundColor: "#dfdfdf", top: "auto", bottom: 0 }}
    >
      <Grid container display="inline-flex" paddingX={1}>
        <Grid item container xs={6} padding={1}>
          <Grid item xs={12}>
            <Button
              variant="text"
              onClick={handleClickAbout}
              sx={{ color: "white" }}
            >
              <b>About</b>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="text"
              onClick={handleClickSkills}
              sx={{ color: "white" }}
            >
              <b>Skills</b>
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="text"
              onClick={handleClickProjects}
              sx={{ color: "white" }}
            >
              <b>Projects</b>
            </Button>
          </Grid>
        </Grid>
        <Grid item container xs={6}>
          <Grid
            item
            container
            xs={12}
            display="flex"
            justifyContent="end"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Link
                to={
                  "https://www.linkedin.com/in/maria-catherine-mori-1729b7227/"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon fontSize="small" sx={{ color: "white" }} />
              </Link>
            </Grid>
            <Grid item>
              <Link
                to={"https://github.com/mcm313"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon fontSize="small" sx={{ color: "white" }} />
              </Link>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            alignItems="center"
            justifyContent="end"
          >
            <Typography fontSize={12}>Copyright</Typography>
            <Copyright fontSize="small" />
            <Typography fontSize={12}>MORIMC 2023</Typography>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default FooterSum;
