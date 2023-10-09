import React from "react";
import Logo from "../pictures/my-logo.png";
import Button from "@mui/material/Button";
import { Avatar, Box } from "@mui/material";

function HomeButton() {
  return (
    <Box sx={{ padding: 3 }}>
      <Button
        className="home_button"
        sx={{ padding: 1, height: 50, width: 50 }}
      >
        <Avatar src={Logo} alt="Home" />
      </Button>
    </Box>
  );
}

export default HomeButton;
