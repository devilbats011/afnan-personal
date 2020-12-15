import React from "react";
import { Grid, Header1, BigWordBg, Hr } from ".";
import BrownBear from "./../small-components/BrownBear";
import { WhiteSpace } from "components/pages";
import Blankseagull from "resources/blankseagull.svg";

function Works() {
  return (
    <Grid item xs={12} className="b-check-off works relative" id="works" >
      {/* <p style={{ marginTop: `27%` }}>Reprehenderit laborum nulla veniam</p> */}
      {/*
       */}
      <article className="works__content">
        <Header1>
          Works
          <BigWordBg className="txt-mid" style={{ top: "-8%", left: "35%" }}>
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
          <p className="void b1-md b2-sm light">
            <i>
              <span className="regular">Hire me :)</span>
            </i>
          </p>
          <p className="void b1-md b2-sm light">
            <WhiteSpace spacing="1.5rem" mdDown />
            <i>
              I can make <span className="regular">Good </span> <br></br>
              <WhiteSpace spacing="1rem" mdDown />
              Websites <font className="h4"> + </font>
              <span className="regular">Cheap </span> Price
            </i>
          </p>
        </div>
        <BrownBear />
        <br></br>
        <article className="" style={{ position:'relative',top:"-1rem"}} >
          <Hr />
          <br></br>
          <div style={{ display: "flex", justifyContent: "center" }} className="b-check-x" >
            <p>
              <i> Help me Build a </i> <span className="bold"> project </span>
            </p>
            <img alt="a black seagull" src={Blankseagull} />
          </div>
        </article>
      </article>
    </Grid>
  );
}

export default Works;
