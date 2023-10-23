import React from "react";
import Logo from "../pictures/my-logo.png";
import "../Main.css";
import { Grid, useMediaQuery } from "@mui/material";

import { motion } from "framer-motion";

function Title() {
  const matches = useMediaQuery("(min-width:450px)");
  const GridMotion = motion(Grid);

  return (
    <GridMotion
      initial={{ height: "100vh" }}
      animate={{ height: 0 }}
      transition={{ duration: 0.75, delay: 2 }}
      container
      className="customMain"
      overflow="auto"
      alignContent="center"
      justifyContent="center"
    >
      <GridMotion
        initial={{ opacity: 0, x: "-2rem" }}
        animate={{ opacity: 1, x: "0" }}
        transition={{ duration: 0.5 }}
        item
        xs="auto"
      >
        {matches ? (
          <img src={Logo} alt="Logo" width="445" />
        ) : (
          <img src={Logo} alt="Logo" width="355" />
        )}
      </GridMotion>
    </GridMotion>
  );
}

export default Title;
