import React from "react";
import * as ImgLogos from "resources/logos";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Logos() {

  const theme = useTheme();
  const isMdBelow = useMediaQuery(theme.breakpoints.down("md"));

  function Logo({ src, alt }) {
    return (
      <img
        src={src}
        alt={alt}
        title={alt}
        width={isMdBelow ? '50px' : '65px' }
        height={isMdBelow ? '50px' : '70px'}
        style={{ padding: ".8rem .6rem" }}
        className="relative-z5"
      />
    );
  }
  return (
    <div
      className="b-check-x"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        boxSizing: "border-box",
        justifyContent: "center",
        width: "65%",
        margin: "0 auto",
      }}
    >
      <Logo src={ImgLogos.Github} alt="Github" />
      <Logo src={ImgLogos.Vs} alt="Vs" />
      <Logo src={ImgLogos.Html} alt="Html" />
      <Logo src={ImgLogos.CssLogo} alt="css3" />
      <Logo src={ImgLogos.Sass} alt="Sass" />
      <Logo src={ImgLogos.Tailwind} alt="Tailwindcss" />
      <Logo src={ImgLogos.Bootstrap} alt="Bootstrap" />
      <Logo src={ImgLogos.Js} alt="Js" />
      <Logo src={ImgLogos.Storybook} alt="Storybook js" />
      <Logo src={ImgLogos.NodeJs} alt="node js" />
      <Logo src={ImgLogos.Express} alt="express js" />
      <Logo src={ImgLogos.React} alt="React" />
      <Logo src={ImgLogos.MD} alt="MD" />
      <Logo src={ImgLogos.Redux} alt="Redux" />
      <Logo src={ImgLogos.Vue} alt="Vue" />
      <Logo src={ImgLogos.Vuetify} alt="Vuetify" />
      <Logo src={ImgLogos.Cypress} alt="Cypress" />
      <Logo src={ImgLogos.Mysql} alt="Mysql" />
      <Logo src={ImgLogos.Firebase} alt="Firebase" />
      <Logo src={ImgLogos.Figma} alt="Figma" />
    </div>
  );
}
