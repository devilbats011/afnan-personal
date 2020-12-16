import React from "react";
import WoodShip from "resources/wood_ship.svg";
import PirateShip from "resources/pirate_ship.svg";

function Adventure() {
  return (
    <>
      <div className="sea">
        <Ship src={WoodShip} alt="marine01" className="sea__ship-1 " top={"5rem"}  />
        <Ship src={WoodShip} alt="marine02" className="sea__ship-2 " top={"8rem"}  />
        <Ship src={PirateShip} alt="pirate" className="sea__ship-3 " top={"5.6rem"}  />

      </div>
    </>
  );
}

export default Adventure;

function Ship({src,alt,top,left,className}) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ position: "absolute", top: top   }}
      width="80px"
      height="80px"
      className={className}
    />
  );
}
