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
              <WhiteSpace spacing={'16px'} /> Hi, my full name is Wan Afnan Hariz  <span  role="img" aria-label="smile-face" > 😄 </span>, can call me <b> Afnan</b>. <br/>
              I love to indulge myself with <i>  frontend stuff(mostly javascript), web desgining and development. </i> <br/><br/>
              I live in <b> Kuala Lumpur, Malaysia </b>. i took my <b>Degree in computer science</b> in university called <i> Uitm Melaka </i> before.
              After graduated, I have been working as a web developer <b> almost 2 years </b> , with my current knowledge and expertise
              I would love to expand myself and my career growth to the next level play. <br/>
              I would also love to get around working as <b>a freelance frontend developer/web developer.</b>  <br/><br/>
              -- Thank you for reading, <b>Cheers</b>! <span  role="img" aria-label="Cheers!" > 🥂 </span>

          </p>
        </article>
      </Grid>
      <Grid
        item
        md={12}
        lg={5}
        className="b-check-off relative"
      >
        <BigWordBg style={{ left: "-28%",top:"-10%" }} className="b-check">
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
