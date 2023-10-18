import React, { useState } from "react";
import { Button, Grid, styled } from "@mui/material";
import BackToTopButton from "../Buttons/BackToTopButton";
import { Link } from "react-router-dom";
import Logo from "../pictures/my-logo.png";
import "../Main.css";
import Footer from "../Components/Footer";

function Home() {
  const ColorButton = styled(Button)(({ theme }) => ({
    border: "white",
    color: "white",
    backgroundColor: "#d4e5a3",
    "&:hover": {
      border: "#d4e5a3",
      color: "#d4e5a3",
      backgroundColor: "white",
    },
  }));

  return (
    <>
      <Grid
        container
        className="customMain"
        overflow="auto"
        alignContent="center"
        justifyContent="center"
      >
        <Grid item xs="auto">
          <img src={Logo} alt="Logo" width="450" />
        </Grid>
        <Grid item container justifyContent="center">
          <Grid item xs="auto" p={3}>
            <Link to={"about"}>
              <ColorButton variant="outlined">About</ColorButton>
            </Link>
          </Grid>
          <Grid item xs="auto" p={3}>
            <Link to={"projects"}>
              <ColorButton variant="outlined">Projects</ColorButton>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default Home;
