import React, { useState, useRef } from "react";

function ContactEmailButton({ firebase }) {
  const inputEmailRef = useRef(null)
  const [message, setMessage] = useState("")
  const [emailRespond,setEmailRespond] = useState("NO-RES-YET")
  const [isDisable,setIsDisable] = useState(false)

  function todayDate()
  {
    let today = new Date();
    return today
  }

  async function clickHandler(e) {
    setIsDisable(true)
    console.log('inputEl.current.value:', )
    if (firebase === false) {
      setMessage("firebase--sdk--disable")
      return null;
    }
    const emailData = inputEmailRef.current.value
    const validateEmailData = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/g.test(emailData);
    if(emailData === '' || emailData === null){
      setMessage("Field cannot be empty..")
      setIsDisable(false)
      return null
    }
    if(!validateEmailData){
      setMessage("Invalid email..")
      setIsDisable(false)
      return null
    } 
    const result = await firebase
      .firestore()
      .collection("theEmail")
      .add({
        email: emailData,
        time: todayDate(),
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id ,emailData);
        setEmailRespond("EMAIL-SAVED")
        setIsDisable(false)
        setMessage("")
        return "Document written with ID: " + docRef.id + `, Email saved : ${emailData} `;
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
        setEmailRespond("EMAIL-UNSAVED")
        setIsDisable(false)
          return "Error adding document";
      });
    setMessage(result);
  }

  return (
    <div>
      <section className={emailRespond === "EMAIL-SAVED" ? "relative hidden" : "relative"}>
        <input
          ref={inputEmailRef}
          type="text"
          name="email"
          className="contact__emailinput"
          placeholder="Drop an email, let me know"
        />
        <button
          className="contact__btn"
          onClick={(e) => clickHandler(e)}
          disabled={isDisable}
        >
          email
        </button>
      </section>
      <section className={emailRespond === "EMAIL-SAVED" ? 'contact__thx_box block' : 'contact__thx_box hidden'} >
                <span  role="img" aria-label="ThankYou" > Thank you for the mail! 😊 </span> 
      </section>

        <p className="b2" > {message} </p>
    </div>
  );
}

export default ContactEmailButton;
