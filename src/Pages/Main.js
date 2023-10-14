import React from "react";
import Logo from "../pictures/my-logo.png";
import { Outlet } from "react-router-dom";
import { AppBar, Avatar, ThemeProvider } from "@mui/material";
import CustomTheme from "../CustomTheme";

function Main() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <AppBar position="static" color="customPalette">
        <Avatar src={Logo} alt="Logo" sx={{ padding: 1.5 }} />
      </AppBar>
      <Outlet />
    </ThemeProvider>
  );
}

export default Main;
