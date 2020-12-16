import React, { useState } from 'react'

function ContactEmailButton({firebase}) {

    const [message, setMessage] = useState("no response yet..")

    async function clickHandler(e){
        if(firebase === false){
            setMessage("firebase--sdk--disable")
            return null 
        } 
        const result = await firebase
        .firestore()
        .collection("theEmail")
        .add({
          email: "contactemail@btn.com",
        })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
          return "Document written with ID: " + docRef.id;
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
          return "Error adding document";
        });
        setMessage(result)
    }

    return (
        <div>
                <button className="contact__btn" onClick={(e) => clickHandler(e)} disabled={false} >
                    contactemail@btn.com
                </button>
                <p>message: {message} </p>
        </div>
    )
}

export default ContactEmailButton
