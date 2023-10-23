import React from "react";
import { Button, Grid, styled } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../pictures/my-logo.png";
import "../Main.css";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

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

  const ColorButtonMotion = motion(ColorButton);

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
          <motion.img
            initial={{ opacity: 0, x: "-10rem" }}
            animate={{ opacity: 1, x: "0" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            src={Logo}
            alt="Logo"
            width="445"
          />
        </Grid>
        <Grid item container justifyContent="center">
          <Grid item xs="auto" p={3}>
            <Link to={"about"}>
              <ColorButtonMotion
                variant="outlined"
                initial={{ opacity: 0, x: "-10rem" }}
                animate={{ opacity: 1, x: "0" }}
                transition={{ duration: 0.5, delay: 1 }}
                layout
              >
                About
              </ColorButtonMotion>
            </Link>
          </Grid>
          <Grid item xs="auto" p={3}>
            <Link to={"projects"}>
              <ColorButtonMotion
                variant="outlined"
                initial={{ opacity: 0, x: "-10rem" }}
                animate={{ opacity: 1, x: "0" }}
                transition={{ duration: 0.5, delay: 1 }}
                layout
              >
                Projects
              </ColorButtonMotion>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default Home;
