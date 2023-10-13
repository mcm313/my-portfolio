import React from "react";
import { Box, Fab } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Link } from "react-router-dom";

function BackButton() {
  return (
    <Link to={"/"}>
      <Box
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          backgroundColor: "transparent",
        }}
      >
        <Fab
          size="small"
          aria-label="return to home"
          sx={{ backgroundColor: "lightsteelblue", color: "blanchedalmond" }}
        >
          <KeyboardReturnIcon />
        </Fab>
      </Box>
    </Link>
  );
}

export default BackButton;
