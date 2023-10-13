import React, { useEffect, useState } from "react";
import Logo from "../pictures/my-logo.png";
import { Outlet } from "react-router-dom";
import { AppBar, Avatar, ThemeProvider } from "@mui/material";
import CustomTheme from "../CustomTheme";

function Main() {
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

  const appBarHeight = 65;
  const adjustedMaxHeight = maxHeight - appBarHeight;

  return (
    <ThemeProvider theme={CustomTheme}>
      <AppBar position="static" color="customPalette">
        <Avatar src={Logo} alt="Logo" sx={{ padding: 1.5 }} />
      </AppBar>
      <Outlet context={adjustedMaxHeight} />
    </ThemeProvider>
  );
}

export default Main;
