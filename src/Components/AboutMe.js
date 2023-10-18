import React from "react";
import { Typography } from "@mui/material";

function AboutMe() {
  return (
    <>
      <Typography
        className="Home"
        variant="body1"
        component="h4"
        lineHeight={1}
      >
        Hi, my name is
      </Typography>
      <Typography variant="h6" component="h2" paddingLeft={2} lineHeight={1}>
        MARIA CATHERINE MORI
      </Typography>
      <Typography variant="h4" component="h1" lineHeight={1}>
        <b>FRONTEND DEVELOPER</b>
      </Typography>
      <Typography variant="body2" component="p" paddingLeft={4} lineHeight={1}>
        My name is Maria Catherine Mori. I am a frontend developer based in
        Tokyo, Japan. I am a career-shifter from being a financial analyst to a
        web developer. I am passionate in making any ideas to reality. I love to
        work in groups where everyone can voice their opinions.
      </Typography>
    </>
  );
}

export default AboutMe;
