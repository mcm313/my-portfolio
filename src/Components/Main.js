import React from "react";
import Logo from "../pictures/my-logo.png";
import Home from "./Home";
import About from "./About";
import { Outlet } from "react-router-dom";
import { AppBar, Avatar } from "@mui/material";

function Main() {
  return (
    <div>
      <Avatar src={Logo} alt="Logo" id="Home" />
      <Outlet />
    </div>
  );
}

export default Main;
