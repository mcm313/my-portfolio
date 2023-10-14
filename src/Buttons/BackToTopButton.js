import { Box, Fab, Fade, useScrollTrigger } from "@mui/material";
import React from "react";
import { KeyboardArrowUp } from "@mui/icons-material";

function BackToTopButton({ scrollTarget }) {
  const trigger = useScrollTrigger({
    target: scrollTarget,
  });

  console.log(trigger);

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      ".Home"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          backgroundColor: "transparent",
        }}
      >
        <Fab
          size="small"
          aria-label="scroll back to top"
          sx={{ backgroundColor: "lightsteelblue", color: "blanchedalmond" }}
        >
          <KeyboardArrowUp />
        </Fab>
      </Box>
    </Fade>
  );
}

export default BackToTopButton;
