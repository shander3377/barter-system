import firebase from "firebase"
require("@firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyB7jEa3fCDvQ1I8vB_Iits6xCFyd0bIIbQ",
    authDomain: "barter-system-bea6e.firebaseapp.com",
    projectId: "barter-system-bea6e",
    storageBucket: "barter-system-bea6e.appspot.com",
    messagingSenderId: "978574003563",
    appId: "1:978574003563:web:bb0f4ab3bf6ebbba1a502e"
  };
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()