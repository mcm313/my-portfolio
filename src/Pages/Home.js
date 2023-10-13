import React, { useState } from "react";
import SideBar from "../Buttons/SideBar";
import { Button, Container, Grid, Typography } from "@mui/material";
import BackToTopButton from "../Buttons/BackToTopButton";
import { Link, useOutletContext } from "react-router-dom";
import "../Main.css";

function Home() {
  const adjustedMaxHeight = useOutletContext();
  const [scrollTarget, setScrollTarget] = useState(undefined);

  return (
    <Grid
      ref={(node) => {
        if (node) {
          setScrollTarget(node);
        }
      }}
      container
      className="customGrid"
      height={adjustedMaxHeight}
      overflow="auto"
    >
      <Grid item xs="auto">
        <SideBar />
      </Grid>
      <Grid
        item
        xs
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        p={2}
      >
        <Grid item xs={5}>
          <Typography id="Home" variant="h5" component="h2">
            Hi, my name is
          </Typography>
          <Typography variant="h4" component="h1" textAlign={"right"}>
            Maria Catherine Mori.
          </Typography>
          <Typography variant="h4" component="h1" textAlign={"right"}>
            FRONTEND DEVELOPER.
          </Typography>
          <Grid item xs container justifyContent="center" alignItems="center">
            <Grid item xs="auto" p={3}>
              <Link to={"about"}>
                <Button variant="outlined">About</Button>
              </Link>
            </Grid>
            <Grid item xs="auto" p={3}>
              <Link to={"projects"}>
                <Button variant="outlined">Projects</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <BackToTopButton scrollTarget={scrollTarget} />
      </Grid>
    </Grid>
  );
}

export default Home;
