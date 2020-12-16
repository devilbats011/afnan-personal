import React from "react";
import bear from "./../../resources/bear.svg";

export default function BrownBear({ h="386px", w="459px" }) {

  return (
    <img
      src={bear}
      alt="a brown bear and a laptop.."
      style={{ height: h, width: w }}
    />
  );
}