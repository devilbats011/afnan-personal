
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var config = {
    apiKey: "AIzaSyAwFlD0OffPy7Ndb4Knbkj_VEwXEU0fk6A",
    authDomain: "wafnz-personal.firebaseapp.com",
    projectId: "wafnz-personal",
    storageBucket: "wafnz-personal.appspot.com",
    messagingSenderId: "665558613636",
    appId: "1:665558613636:web:77b240e30cee0e1ffeccd1",
    measurementId: "G-6NCPRT8Q1H",
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();

  // export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
  export default firebase