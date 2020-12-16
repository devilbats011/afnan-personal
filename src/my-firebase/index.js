import firebase from "firebase/app";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyAwFlD0OffPy7Ndb4Knbkj_VEwXEU0fk6A",
  authDomain: "wafnz-personal.firebaseapp.com",
  projectId: "wafnz-personal",
  storageBucket: "wafnz-personal.appspot.com",
  messagingSenderId: "665558613636",
  appId: "1:665558613636:web:77b240e30cee0e1ffeccd1",
  measurementId: "G-6NCPRT8Q1H",
};

firebase.initializeApp(config);


export default firebase;
