import React, { useState } from "react";
import gmail from "resources/contact/gmail.svg";
import resume from "resources/contact/resume.svg";
import whatsapp from "resources/contact/whatsapp.svg";
import messenger from "resources/contact/messenger.svg";

function ContactInfo({ icon, message = "no__message", href }) {
  const iconHandler = (icon) => {
    const iconData = {
      src: "No icon src",
      alt: "..",
    };
    if (message !== "no__message") {
      iconData.alt = message;
    }

    switch (icon) {
      case "gmail": {
        iconData.src = gmail;
        return iconData;
      }
      case "resume": {
        iconData.src = resume;
        return iconData;
      }
      case "whatsapp": {
        iconData.src = whatsapp;
        return iconData;
      }
      case "messenger": {
        iconData.src = messenger;
        return iconData;
      }

      default:
        return iconData;
    }
  };

  const [iconx] = useState(iconHandler(icon));


  return (
    <div className="contactinfo">
      <img
        className="void b1"
        src={iconx.src}
        alt={iconx.alt}
        style={{
          width: "25px",
          height: "25px",
          position: "relative",
           top: "2px",
           right: "12px",
        }}
      />
     { !href ? (<p className="void b1 regular" >{message}</p>): (<a className="void b1 regular" href={href} target="_blank" rel="noopener noreferrer" > {message} </a>) }
    </div>
  );
}

export default ContactInfo;
