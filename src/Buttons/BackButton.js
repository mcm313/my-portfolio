import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Link } from "react-router-dom";

function BackButton() {
  return (
    <Link to={"home"}>
      <BottomNavigation sx={{ position: "fixed", bottom: 0 }}>
        <BottomNavigationAction label="Back" icon={<KeyboardReturnIcon />} />
      </BottomNavigation>
    </Link>
  );
}

export default BackButton;
