import React from "react";
import bear from "./../../resources/bear.svg";

export default function BrownBear({ h="386px", w="459px" }) {
  // #h = height
  // #w = width
  return (
    <img
      src={bear}
      alt="a brown bear and a laptop.."
      style={{ height: h, width: w }}
    />
  );
}