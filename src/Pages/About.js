import React, { useState } from "react";
import BackButton from "../Buttons/BackButton";
import { Grid, Typography } from "@mui/material";
import "../Main.css";
import BackToTopButton from "../Buttons/BackToTopButton";
import HTML from "../pictures/html.png";
import CSS from "../pictures/css.png";
import SCSS from "../pictures/scss.png";
import JS from "../pictures/javascript.png";
import ReactJS from "../pictures/reactjs.png";
import ReactRouter from "../pictures/react router.png";
import MUI from "../pictures/mui.png";
import AvatarWithHover from "../Components/AvatarWIthHover";

function About() {
  const [scrollTarget, setScrollTarget] = useState(undefined);

  return (
    <Grid
      ref={(node) => {
        if (node) {
          setScrollTarget(node);
        }
      }}
      container
      className="customGrid"
      overflow="auto"
    >
      <Grid
        item
        container
        xs={12}
        justifyContent="center"
        alignItems="center"
        pX={5}
      >
        <Grid item xs={4}></Grid>
        <Grid item xs={8} p={3}>
          <Typography id="Home" variant="h3" component="h1">
            HELLO
          </Typography>
          <Typography variant="body1" component="p">
            My name is Maria Catherine Mori. I am a frontend developer based in
            Tokyo, Japan. I am a career-shifter from being a financial analyst
            to a web developer. I am passionate in making any ideas to reality.
            I love to work in groups where everyone can voice their opinions.
          </Typography>
        </Grid>
        <Grid item xs={8} p={3}>
          <Typography variant="h3" component="h1">
            FRONTEND DEV
          </Typography>
          <Typography variant="body1" component="p">
            skilled in Web Dev using
          </Typography>
          <Grid item container>
            <AvatarWithHover name="HTML" avatarSrc={HTML} />
            <AvatarWithHover name="CSS" avatarSrc={CSS} />
            <AvatarWithHover name="SCSS" avatarSrc={SCSS} />
            <AvatarWithHover name="JavaScript" avatarSrc={JS} />
            <AvatarWithHover name="React JS" avatarSrc={ReactJS} />
            <AvatarWithHover name="React Router" avatarSrc={ReactRouter} />
            <AvatarWithHover name="Material UI" avatarSrc={MUI} />
          </Grid>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <Grid item xs={12}>
        <BackButton />
        <BackToTopButton scrollTarget={scrollTarget} />
      </Grid>
    </Grid>
  );
}

export default About;
