import Grid from "@material-ui/core/Grid";
import BigWordBg from "components/small-components/BigWordBg";
import Header1 from "components/small-components/Header1";
import Hr from "components/small-components/Hr";
import Hidden from "@material-ui/core/Hidden";
import React from "react";

function WhiteSpace({ spacing = "1rem", hide = [], ...p }) {
  return (
    <Hidden only={hide} {...p}>
      <div className="w-space" style={{ width: spacing }}></div>
    </Hidden>
  );
}

function MlCheck() {
  return (
    <div
      style={{
        position: "absolute",
        top: "0px",
        width: "50%",
        height: "100vw",
        backgroundColor: "transparent",
        borderRight: "1px dashed #bf0000",
      }}
    ></div>
  );
}

export { Grid, BigWordBg, Header1, Hidden, WhiteSpace, MlCheck,Hr };
