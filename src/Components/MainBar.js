import React from "react";
import Logo from "../pictures/my-logo.png";
import { AppBar, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";

function MainBar() {
  const AppBarMotion = motion(AppBar);
  const GridMotion = motion(Grid);

  return (
    <AppBarMotion
      initial={{ height: "100vh" }}
      animate={{ height: "44px" }}
      transition={{ duration: 0.5, delay: 0.75 }}
      position="sticky"
      sx={{ backgroundColor: "#3e4535" }}
    >
      <Grid container display="inline-flex" alignItems="center" padding={0.75}>
        <Grid item xs={6}>
          <Link to={"/"}>
            <motion.img
              initial={{ opacity: 0, x: "-5rem" }}
              whileInView={{ opacity: 1, x: "0" }}
              transition={{ duration: 0.5, delay: 0.75 }}
              src={Logo}
              alt="Logo"
              width={175}
            />
          </Link>
        </Grid>
        <GridMotion
          initial={{ opacity: 0, x: "5rem" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ duration: 0.5, delay: 0.75 }}
          item
          xs={6}
          display="flex"
          justifyContent="end"
        >
          <Link
            to={"https://www.linkedin.com/in/maria-catherine-mori-1729b7227/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              initial={{ opacity: 0, x: "5rem" }}
              whileInView={{ opacity: 1, x: "0" }}
              transition={{ duration: 0.5, delay: 0.75 }}
              fontSize="small"
              sx={{ color: "#d4e5a3" }}
            />
          </Link>
          <Link
            to={"https://github.com/mcm313"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon fontSize="small" sx={{ color: "#d4e5a3" }} />
          </Link>
        </GridMotion>
      </Grid>
    </AppBarMotion>
  );
}

export default MainBar;
