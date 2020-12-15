import React from "react";
import { Grid, Header1, BigWordBg } from ".";
import BrownBear from "./../small-components/BrownBear";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function About() {
  const theme = useTheme();
  const isMdBelow = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      item
      xs={12}
      className="about b-check-off"
      direction={isMdBelow ? "column-reverse" : "row"}
      id="about"
    >
      <Grid item xs={12} md={7} className="b-check-off relative">
        <article className=" about__left-md about__left x-b-check">
          <p style={{ marginTop: isMdBelow ? "1%" : "25%", padding: "0 10%" }} >
            Reprehenderit laborum nulla vIrure esse do irure id incididunt Lorem
            culpa reprehenderit veniam reprehenderit exercitation aliqua. Irure
            ad laboris reprehenderit ad sit laboris incididunt in minim. Laboris
            ea aute in occaecat commodo occaecat voluptate reprehenderit laborum
            est veniam cillum ullamco. Sint eiusmod veniam anim enim pariatur.
            Officia duis esse eu cupidatat excepteur sint quis. Labore quis
            occaecat sint mollit veniam mollit ea cupidatat aute cupidatat
            esse.eniam
          </p>
        </article>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        className="b-check-off relative"
      >
        <BigWordBg style={{ left: "-28%",top:"-10%" }} className="b-check">
          about
        </BigWordBg>
        {/* <article className="about__right"> */}
        <Header1
          className="b-check-x relative "
          style={{ margin: "0px", padding: "0px", right: "40px", top: "20px" }}
        >
          About
        </Header1>
        <Header1
          className="b-check-x"
          style={{
            margin: "0px",
            padding: "0px",
            position: "relative",
            top: "22px",
            paddingLeft: "22px",
          }}
        >
          <i> me </i>
        </Header1>
        <BrownBear />
        {/* </article> */}
      </Grid>
    </Grid>
  );
}

export default About;
