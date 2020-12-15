import React from "react";
import "./../../css/Utility.scss";
import line from "./../../resources/hr.svg";

//i think is is not working..if not working , replace with svg

function Hr({ length = "429.35px",...rest }) {
  // return <div className="hr" style={{ width: length }}></div>;
  return (<img src={line} alt="line" style={{ width: length }}  {...rest} />)

}

export default Hr;
