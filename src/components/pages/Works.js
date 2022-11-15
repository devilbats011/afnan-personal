import React from "react";
import { Grid, Header1, BigWordBg, Hr } from ".";
import BrownBear from "./../small-components/BrownBear";
import { WhiteSpace } from "components/pages";
import Blankseagull from "resources/blankseagull.svg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

function Works() {
  const theme = useTheme();
  const isMdBelow = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid item xs={12} className="b-check-off works relative" id="works">
      <article className="works__content">
        <Header1>
          Works
          <BigWordBg className="txt-mid" style={{ top: "-8%", left: isMdBelow ? "10%" : "35%",position:"absolute" }}>
            works
          </BigWordBg>
        </Header1>
        <div
          className="relative  m-0-auto b-checkx"
          style={{
            width: "fit-content",
            textAlign: "left",
            top: "-0.2rem",
            left: "5rem",
          }}
        >
          <p className="void b1-md b2-sm light" style={{marginBottom:".2rem"}}>
            <i>
              ~ <span className="regular"> Do Hire me </span> 
            </i>

              <span role="img" aria-label="smiley"> 😊  </span> 
          
          </p>
          <p className="void b1-md b2-sm light" style={{paddingLeft:"1rem",marginBottom:".4rem"}}  >
            <i >
              To Create  <span className="regular"> Awesome </span> 
              <WhiteSpace spacing="1rem" mdDown />
              <br></br>
              <span style={{position:'relative',top:'.3rem'}}>

              <span className="regular" style={{paddingLeft:"1.2rem"}} >Websites, Mobile </span>  App !
              </span>
            </i>
          </p>
        </div>
        <BrownBear />
        <br></br>
        <article className="" style={{ position: "relative", top: "-1rem" }}>
          <Hr />
          <br></br>
          <div
            style={{ display: "flex",flexWrap:"nowrap", justifyContent: "center" }}
            className="p-y-14px"
          >
                   {/* <span className="b2"> Hit me Up, </span> */}
            {/* <p className=""> */}
            <p className="bold" > +60-136-448-923</p> 
              {/* <i> Help me Build a </i> <span className="bold"> project </span> */}
            {/* </p> */}
            <img alt="a black seagull" style={{padding:"0 0.6rem"}} src={Blankseagull} />
              <p style={{transform:"translateY(-.6rem)"}} > wanafnanharizwz@gmail.com </p>
          </div>
        </article>
      </article>
    </Grid>
  );
}

export default Works;
