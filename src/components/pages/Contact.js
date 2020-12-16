import React, { useState,useRef } from "react";
import { Grid, Header1 } from ".";
import ContactInfo from "components/small-components/ContactInfo";
import ContactShip from "components/small-components/ContactShip";
import Hr from "components/small-components/Hr";


  function Contact({firebase}) {

    const formRef = useRef();
    const el = useRef();
    const [message,setMessage] = useState('')
    const [isEmailSave,setIsEmailSave] = useState('')
    const [loading,setLoading] = useState(false)

    function formHandler(e) {
      setLoading(true)
      e.preventDefault();
      const email = formRef.current["email"].value;
      const isEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/g.test(email);
      if (isEmail){
        const result =  savingEmail(email) 
        setIsEmailSave(result)
        if(result)
         setMessage('')
        else {
          setMessage('Error saving the email..')
          setLoading(false)
        }
      }
      else if(!isEmail){
        setMessage('Invalid Email, Please try again.')
        setLoading(false)
      }
    }
    
    async function savingEmail(dataEmail) {
      if(dataEmail === undefined || dataEmail === null || dataEmail === ''){
        setMessage('undefined/null/empty email.')
        setLoading(false)
        return false
      }

      return await firebase
        .firestore()
        .collection("theEmail")
        .add({
          email: dataEmail,
        })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
          return true
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
          return false
        });
    }

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
        <ContactInfo icon="resume" message="https://wfh-resume.netlify.app" />
        <ContactInfo icon="whatsapp" message="+60136448923" />
        <ContactInfo icon="messenger" message="+60136448923" />
        <br />
        <form ref={formRef}>
          
          <div className="contact__ref_point">
            <section className={!isEmailSave ? 'contact__thx_box hidden' : 'contact__thx_box block'} >
                <span> Thank you for the mail! 😊 </span> 
            </section>

              <section className={isEmailSave ? 'relative hidden' : 'relative' }>
                <input
                  ref={el}
                  type="text"
                  name="email"
                  className="contact__emailinput"
                  placeholder="Drop an email, let me know"

                />
                <button className="contact__btn" aria-describedby={"simple-popover"} onClick={(e) => formHandler(e)} disabled={loading} >
                  email
                </button>
                <p style={{color:'red',width:'380px',margin:'10px auto',textAlign:"justify"}}  className="b2 medium" > {message}  </p>
              </section>
          </div>
        </form>
      </article>
      <br/><br/>
    </Grid>
  );
}
export default Contact;
