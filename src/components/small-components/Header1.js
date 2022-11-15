import React from "react";

function Header1({ className = "", style = {}, children, ...p }) {
  return (
    <p className={` h1 relative ${className} `} style={style} {...p}>
      {children}
    </p>
  );
}

export default Header1;
