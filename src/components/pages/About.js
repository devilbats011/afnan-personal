import React from "react";
import { Grid, Header1, BigWordBg,WhiteSpace } from ".";
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
      <Grid item
       md={12}
       lg={7}
       className="b-check-off relative"
      >
        <article className=" about__left-md about__left b-check-x">
          <p style={{ marginTop: isMdBelow ? "1%" : "12%", padding: isMdBelow ? "0 10% 0 10%" : "0 1% 0 20%",lineHeight:"1.5" }} >
              <WhiteSpace spacing={'16px'} /> <b><i>Hello~</i></b> My name is Wan Afnan Hariz, can call me <b> Afnan</b>   <span  role="img" aria-label="smile-face" > 😄 </span> <br/>
              I love to indulge myself with <i className="bold">  tech stuff </i>,
              I live in <b> Kuala Lumpur, Malaysia </b>. i took my <b>Degree in computer science</b> in university called <i> Uitm Melaka </i> before.
              After graduated, I have worked with some IT Companies and have picked up a bunch of experiences in <b>2 years+</b> as a software developer/engineer, I always welcome good challenges and good business. 
              {/* I would love to expand myself and my career growth to the next level play. <br/> */} Work remotely as <b>a freelance  software developer.</b>  <br/><br/>
              <i>Thanks for reading little about me,<br></br> <b> - Cheers</b>!</i> 
              <span  role="img" aria-label="Cheers!" > 🥂 </span>

          </p>
        </article>
      </Grid>
      <Grid
        item
        md={12}
        lg={5}
        className="b-check-off relative"
      >
        <BigWordBg customSkills style={{ position:"absolute",left: isMdBelow ? "16%" : "-20%",top:"-10%" }} className="b-check" >
          about
        </BigWordBg>
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
      </Grid>
    </Grid>
  );
}

export default About;
