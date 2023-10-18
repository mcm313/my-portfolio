import React from "react";
import { Grid, Typography } from "@mui/material";
import HTML from "../pictures/HTML.png";
import CSS from "../pictures/CSS.jpg";
import SCSS from "../pictures/scss.jpg";
import JS from "../pictures/javascript.jpg";
import ReactJS from "../pictures/reactjs.jpg";
import ReactRouter from "../pictures/react router.jpg";
import MUI from "../pictures/mui.jpg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../Main.css";

function MySkills() {
  const skills = [
    { src: HTML, name: "HTML" },
    { src: CSS, name: "CSS" },
    { src: SCSS, name: "SCSS" },
    { src: JS, name: "Javascript" },
    { src: ReactJS, name: "React JS" },
    { src: ReactRouter, name: "React Router" },
    { src: MUI, name: "Material UI" },
    { src: HTML, name: "HTML" },
    { src: CSS, name: "CSS" },
    { src: SCSS, name: "SCSS" },
    { src: JS, name: "Javascript" },
    { src: ReactJS, name: "React JS" },
    { src: ReactRouter, name: "React Router" },
    { src: MUI, name: "Material UI" },
  ];

  const handleDragStart = (e) => e.preventDefault();

  const skillsIMG = skills.map((item) => (
    <>
      <img
        src={item.src}
        alt={item.name}
        onDragStart={handleDragStart}
        role="presentation"
      />
      <p class="image-name">{item.name}</p>
    </>
  ));

  return (
    <Grid container display="flex" alignContent="center">
      <Grid item xs={12} px={3} sx={{ color: "#c3d79c" }}>
        <Typography variant="h3" component="h1" marginBottom={-1.75}>
          <b>MY SKILLS</b>
        </Typography>
      </Grid>
      <Grid
        item
        p={5}
        xs={12}
        sx={{ backgroundColor: "#c3d79c" }}
        alignItems="center"
      >
        <Grid
          item
          xs="auto"
          container
          id="skillSet"
          padding={3}
          justifyContent="center"
        >
          <AliceCarousel
            mouseTracking
            items={skillsIMG}
            autoPlay
            autoPlayInterval={900}
            disableDotsControls
            disableButtonsControls
            infinite
            autoWidth
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MySkills;
