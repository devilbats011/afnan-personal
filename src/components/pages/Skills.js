import React from "react";
import { Grid, Header1, BigWordBg } from ".";
import Logos from "components/group-components/Logos";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

function Skills() {
    const theme = useTheme();
    const isMdBelow = useMediaQuery(theme.breakpoints.down("md"));
    const styles = {
        postion: `absolute`,
        left: isMdBelow ? `8%` :`48%`,
        top:`-5%`,

      };

  return (
    <Grid item xs={12} className="skills relative" id="skills" >
      <article className="skills__content relative"  style={{ margin: `10% auto` }} >
        <Header1> Skills </Header1>
        <p className="b2-sm b1-md extra-light" ><i>Tech <b>Up!</b><br></br>
        Being Progressive leads to <b>Greatness!</b></i></p>
        <Logos/>
        <BigWordBg style={styles}> skills </BigWordBg>
      </article>
    </Grid>
  );
}

export default Skills
