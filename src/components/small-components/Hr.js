import React from "react";
import "./../../css/Utility.scss";
import line from "./../../resources/hr.svg";


function Hr({ length = "429.35px",...rest }) {
  return (<img src={line} alt="line" style={{ width: length }}  {...rest} />)

}

export default Hr;
