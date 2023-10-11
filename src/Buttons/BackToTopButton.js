import { Box, Fab, Fade, useScrollTrigger } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { KeyboardArrowUp } from "@mui/icons-material";

function BackToTopButton() {
  const trigger = useScrollTrigger();

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#Home"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </Box>
    </Fade>
  );
}

export default BackToTopButton;
