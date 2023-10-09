import React from "react";
import HomeButton from "./HomeButton";
import Home from "./Home";
import About from "./About";
import { Outlet } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

function Main() {
  return (
    <>
      <div>
        <HomeButton />
        <Outlet />
        <BottomNavigation>
          <BottomNavigationAction label="Back" icon={<ArrowBackIosNew />} />
          <BottomNavigationAction label="Forward" icon={<ArrowForwardIos />} />
        </BottomNavigation>
      </div>
    </>
  );
}

export default Main;
