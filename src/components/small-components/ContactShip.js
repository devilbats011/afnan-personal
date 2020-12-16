import React from "react";
import Ship from "resources/wood_ship.svg";
import Waves from "resources/waves.svg";
function ContactShip() {
  return (
    <div
      style={{
        display: "block",
      }}
      className="b-check-off"
    >
      <img
        src={Ship}
        alt=" sup "
        className="void b-check-off"
        style={{
          display: "block",
          margin: "0 auto",
          width: "90px",
          height: "100px",
          position: "relative",
          top: "2.6rem",
        }}
      />
      <img
        src={Waves}
        alt=" sup "
        className="void b-check-off"
        style={{
          width: "283.79px",
          height: "66px",
          zIndex: "10",
          position: "relative",
        }}
      />
    </div>
  );
}

export default ContactShip;
