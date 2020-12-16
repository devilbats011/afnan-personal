import React from "react";
import { Grid, Header1, BigWordBg } from ".";
import Logos from "components/group-components/Logos";

function Skills() {
    const styles = {
        postion: `absolute`,
        left:`48%`,
        top:`-5%`,

      };

  return (
    <Grid item xs={12} className="skills relative" id="skills" >
      <article className="skills__content relative"  style={{ margin: `10% auto` }} >
        <Header1> Skills </Header1>
        <p className="b2-sm b1-md extra-light" ><i>Always grow my skills!<br></br>
        Being Progressive leads to Greatness!</i></p>
        <Logos/>
        <BigWordBg style={styles}> skills </BigWordBg>
      </article>
    </Grid>
  );
}

export default Skills
