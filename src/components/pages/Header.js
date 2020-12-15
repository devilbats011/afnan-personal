import React from "react";
import "./../../css/Header.scss";
import {
  //CheckMiddleLine,
  Grid,
  Hidden,
} from "components/pages";
import Logo from "resources/mylogo.svg";
import { Link } from "react-scroll";

function Header({scrollToTop}) {
  return (
    <Hidden only={["sm", "xs"]}>
      {/* <CheckMiddleLine/> */}
      <Grid className="header">
        <section className="b-check-off navbar">
          <div className="navbar__item" onClick={()=>scrollToTop()}>
              <img
                src={Logo}
                alt="afnan's brand logo"
                style={{ padding: "2px .6rem 0px .6rem" }}
              />
              <p className="void"> Home </p>
          </div>
          <NavbarItem to="about" > About </NavbarItem> 
          <NavbarItem to="skills"> Skills </NavbarItem> 
          <NavbarItem to="works"> Works </NavbarItem> 
          <NavbarItem to="contact"> Contact </NavbarItem> 
          {/* <NavbarItem to="blog"> Blog </NavbarItem>  */}
        </section>
      </Grid>
      {/* </Grid> */}
    </Hidden>
  );
}

export default Header;

function NavbarItem({to="",children}){
  return (
    // <div className=""> 
      <Link
      className="navbar__item"
      activeClass="active" to={to}
      spy={true} smooth={true} duration={800}
      >
        {children}
      </Link>
    // </div>
  )
}
