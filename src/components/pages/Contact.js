import React from "react";
import { Grid, Header1 } from ".";
import ContactInfo from "components/small-components/ContactInfo";
import ContactShip from "components/small-components/ContactShip";
import ContactEmailButton from "components/group-components/ContactEmailButton";
import Hr from "components/small-components/Hr";

  function Contact({firebase}) {

  return (
    <Grid item xs={12} className="contact relative" id="contact" >
      <article className="contact__content">
        <Header1 className="" style={{ marginBottom: "0rem" }}>
          Contact
        </Header1>
        <ContactShip />
        <br />
        <p className="void h4 ">
          <i>Keep In Touch! I love to hear your </i> <span className="regular" > ideas </span>!
        </p>
        <Hr />
        <ContactInfo icon="gmail" message="wanafnanharizwz@gmail.com" />
        <ContactInfo icon="resume" message="https://wfh-resume.netlify.app" href="https://wfh-resume.netlify.app" />
        <ContactInfo icon="whatsapp" message="+60136448923" />
        {/* <ContactInfo icon="messenger" message="+60136448923" /> */}
        <br />
        <ContactEmailButton firebase={firebase} />
      </article>
      <br/>
      
    </Grid>
  );
}
export default Contact;
