import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import "../Main.css";
import Skills from "../Components/Skills";
import { motion } from "framer-motion";

function AboutMe() {
  const TypographyMotion = motion(Typography);
  const GridMotion = motion(Grid);

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        py={3}
        px={12}
        justifyContent="center"
        sx={{ color: "#3e4535" }}
        id="AboutMe"
      >
        <TypographyMotion
          initial={{ opacity: 0, x: "-5rem" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ duration: 1, delay: 1 }}
          className="Home"
          variant="body1"
          component="h4"
          lineHeight={1}
        >
          Hi, my name is
        </TypographyMotion>
        <TypographyMotion
          initial={{ opacity: 0, x: "5rem" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ duration: 1, delay: 1 }}
          variant="h6"
          component="h2"
          paddingLeft={2}
          lineHeight={1}
        >
          MARIA CATHERINE MORI
        </TypographyMotion>
        <TypographyMotion
          initial={{ opacity: 0, x: "-5rem" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ duration: 1, delay: 1 }}
          variant="h4"
          component="h1"
          lineHeight={1}
        >
          <b>FRONTEND DEVELOPER</b>
        </TypographyMotion>
        <TypographyMotion
          initial={{ opacity: 0, x: "5rem" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ duration: 1, delay: 1 }}
          variant="body2"
          component="p"
          paddingLeft={4}
          lineHeight={1}
        >
          My name is Maria Catherine Mori. I am a frontend developer based in
          Tokyo, Japan. I am a career-shifter from being a financial analyst to
          a web developer. I am passionate in making any ideas to reality. I
          love to work in groups where everyone can voice their opinions.
        </TypographyMotion>
      </Grid>
      <Grid
        item
        container
        xs={12}
        className="customGridHeight"
        sx={{ backgroundColor: "#cee7a6" }}
      >
        <GridMotion
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          container
          display="flex"
          alignContent="center"
        >
          <Grid item xs={12} px={3} sx={{ color: "#3e4535" }} id="Skills">
            <Typography variant="h3" component="h1" marginBottom={-1.75}>
              <b>MY SKILLS</b>
            </Typography>
          </Grid>
          <Grid
            item
            p={5}
            xs={12}
            sx={{ backgroundColor: "#3e4535" }}
            alignItems="center"
          >
            <Grid
              item
              xs="auto"
              container
              id="skillSet"
              paddingY={3}
              justifyContent="center"
            >
              <Skills />
            </Grid>
          </Grid>
        </GridMotion>
      </Grid>
      <Grid
        item
        xs={12}
        py={3}
        px={12}
        justifyContent="center"
        sx={{ color: "#3e4535" }}
      >
        <TypographyMotion
          initial={{ opacity: 0, x: "-5rem" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ duration: 1, delay: 1 }}
          variant="h3"
          component="h1"
          lineHeight={1}
        >
          <b>EDUCATION</b>
        </TypographyMotion>
        <TypographyMotion
          initial={{ opacity: 0, x: "5rem" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ duration: 1, delay: 1 }}
          variant="h6"
          component="h2"
          paddingLeft={2}
          lineHeight={1}
        >
          Intercultural Institute of Japan
        </TypographyMotion>
        <TypographyMotion
          initial={{ opacity: 0, x: "5rem" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ duration: 1, delay: 1 }}
          variant="body1"
          component="p"
          paddingLeft={4}
          lineHeight={1}
        >
          2018 - 2019 Japanese Language
        </TypographyMotion>
        <TypographyMotion
          initial={{ opacity: 0, x: "5rem" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ duration: 1, delay: 1 }}
          variant="h6"
          component="h2"
          paddingLeft={2}
          lineHeight={1}
        >
          De La Salle University
        </TypographyMotion>
        <TypographyMotion
          initial={{ opacity: 0, x: "5rem" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ duration: 1, delay: 1 }}
          variant="body1"
          component="p"
          paddingLeft={4}
          lineHeight={1}
        >
          2013 - 2014 Postgraduate Diploma in Computer Science
        </TypographyMotion>
        <TypographyMotion
          initial={{ opacity: 0, x: "5rem" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ duration: 1, delay: 1 }}
          variant="h6"
          component="h2"
          paddingLeft={2}
          lineHeight={1}
        >
          University of Santo Tomas
        </TypographyMotion>
        <TypographyMotion
          initial={{ opacity: 0, x: "5rem" }}
          whileInView={{ opacity: 1, x: "0" }}
          transition={{ duration: 1, delay: 1 }}
          variant="body1"
          component="p"
          paddingLeft={4}
          lineHeight={1}
        >
          2005 - 2009 Bachelor of Science in Business Administration
        </TypographyMotion>
      </Grid>
      <Grid
        item
        container
        xs={12}
        className="customGridHeight"
        sx={{ backgroundColor: "#cee7a6" }}
      >
        <GridMotion
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          container
          display="flex"
          alignContent="center"
        >
          <Grid item xs={12} px={3} sx={{ color: "#3e4535" }} id="Skills">
            <Typography variant="h3" component="h1" marginBottom={-1.75}>
              <b>WORK EXPERIENCE</b>
            </Typography>
          </Grid>
          <Grid
            item
            p={5}
            xs={12}
            sx={{ backgroundColor: "#3e4535" }}
            alignItems="center"
          >
            <Grid
              item
              xs={12}
              justifyContent="center"
              sx={{ color: "#c3d79c" }}
            >
              <Typography
                variant="h6"
                component="h2"
                paddingLeft={2}
                lineHeight={1}
              >
                JPMorgan Chase Co.
              </Typography>
              <br></br>
              <Typography
                variant="body1"
                component="p"
                paddingLeft={4}
                lineHeight={1}
              >
                2010 - 2018
              </Typography>
              <Typography
                variant="body1"
                component="p"
                paddingLeft={4}
                lineHeight={1}
              >
                <u>HIGHLIGHTS</u>
              </Typography>
              <Typography
                variant="body1"
                component="p"
                paddingLeft={4}
                lineHeight={1}
              >
                <li>
                  Became a Subject Matter Expert (SME) for Capital Interfunding
                  Processing and has provided training for the months May–June
                  2014 to support a business balancing initiative.
                </li>
                <li>
                  Became the POC for training and development for both Capital
                  Interfunding Processing Team and Registry Team.
                </li>
                <li>
                  Became a Subject Matter Expert (SME) for the Xceptor project
                  and has provided training for the new employees taking on the
                  project
                </li>
              </Typography>
              <br></br>
              <Typography
                variant="body1"
                component="p"
                paddingLeft={4}
                lineHeight={1}
              >
                Apr 2016 - Jun 2018
              </Typography>
              <Typography
                variant="body1"
                component="p"
                paddingLeft={6}
                lineHeight={1}
              >
                Team Leader of IOS Fund Accounting Team
              </Typography>
              <Typography
                variant="body1"
                component="p"
                paddingLeft={4}
                lineHeight={1}
              >
                Jul 2014 - Apr 2016
              </Typography>
              <Typography
                variant="body1"
                component="p"
                paddingLeft={6}
                lineHeight={1}
              >
                Team Leader of Registry Team
              </Typography>
              <Typography
                variant="body1"
                component="p"
                paddingLeft={4}
                lineHeight={1}
              >
                Jun 2011 - Jul 2014
              </Typography>
              <Typography
                variant="body1"
                component="p"
                paddingLeft={6}
                lineHeight={1}
              >
                Team Member and Officer-in-charge of Capital Interfunding
                Processing Team
              </Typography>
              <Typography
                variant="body1"
                component="p"
                paddingLeft={4}
                lineHeight={1}
              >
                Mar 2010 - Jun 2011
              </Typography>
              <Typography
                variant="body1"
                component="p"
                paddingLeft={6}
                lineHeight={1}
              >
                Team Member of Manila Level 1 Edinburgh Reconciliation
              </Typography>
              <br></br>
              <Divider variant="middle" />
              <br></br>
              <Typography
                variant="h6"
                component="h2"
                paddingLeft={2}
                lineHeight={1}
              >
                Hongkong Shanghai Banking Corp
              </Typography>
              <br></br>
              <Typography
                variant="body1"
                component="p"
                paddingLeft={4}
                lineHeight={1}
              >
                2009 - 2010
              </Typography>
              <Typography
                variant="body1"
                component="p"
                paddingLeft={4}
                lineHeight={1}
              >
                Collection Associate
              </Typography>
            </Grid>
          </Grid>
        </GridMotion>
      </Grid>
    </Grid>
  );
}

export default AboutMe;
