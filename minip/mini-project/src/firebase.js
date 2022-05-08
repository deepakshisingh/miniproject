import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAMiyJFGkAtbLQbSxDxtqJripuAcCvSLHA",
    authDomain: "miniproject-3ffd7.firebaseapp.com",
    databaseURL: "https://miniproject-3ffd7-default-rtdb.firebaseio.com",
    projectId: "miniproject-3ffd7",
    storageBucket: "miniproject-3ffd7.appspot.com",
    messagingSenderId: "836362211139",
    appId: "1:836362211139:web:de3620a902640de52129f6",
    measurementId: "G-XHJMRM5MGS"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase;