import React from "react";
import { Hidden } from "components/pages";


export default function BigWordBg({ className = "", children,style }) {

    return (
      <Hidden smDown> 
      <p className={`bigsize-font ${className} `} style={style}>
        {children}
      </p>
      </Hidden>
    );
  }