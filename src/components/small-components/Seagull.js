import React from "react";
import bird from "./../../resources/seagull.svg";
import Hidden from "@material-ui/core/Hidden";
import "./../../css/Utility.scss";

function Seagull({hide=["xs", "sm"], h = "60px", w = "70px", style = {}, className = "" }) {
  return (
    <div>
      <Hidden only={hide}>
        <img
          src={bird}
          alt="a seagull.."
          className={className}
          style={{ width: w, height: h, ...style }}
        />
      </Hidden>
    </div>
  );
}

export default Seagull;
