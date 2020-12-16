import React, { useState, useRef } from "react";

function ContactEmailButton({ firebase }) {
  const inputEmailRef = useRef(null)
  const [message, setMessage] = useState("no response yet..")
  const [emailRespond,setEmailRespond] = useState("NO-RES-YET")
  const [isDisable,setIsDisable] = useState(false)

  async function clickHandler(e) {
    setIsDisable(true)
    console.log('inputEl.current.value:', )
    if (firebase === false) {
      setMessage("firebase--sdk--disable")
      return null;
    }
    const emailData = inputEmailRef.current.value
    if(emailData === '' || emailData === null){
        setMessage("Field Cannot be empty.")
        setIsDisable(false)
        return null
    }
    const result = await firebase
      .firestore()
      .collection("theEmail")
      .add({
        email: emailData,
      })
      .then(function (docRef) {
        setIsDisable(false)
        setEmailRespond("EMAIL-SAVED")
        console.log("Document written with ID: ", docRef.id ,emailData);
        return "Document written with ID: " + docRef.id + `, Email saved : ${emailData} `;
    })
    .catch(function (error) {
        setIsDisable(false)
        setEmailRespond("EMAIL-UNSAVED")
        console.error("Error adding document: ", error);
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
        <p>message: {message} </p>
    </div>
  );
}

export default ContactEmailButton;
