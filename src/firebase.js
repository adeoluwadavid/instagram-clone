// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase"
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCv4JDKAzAuUvKwApKNeEApRXmhtPJMlq8",
    authDomain: "instagram-clone-f97e3.firebaseapp.com",
    databaseURL: "https://instagram-clone-f97e3.firebaseio.com",
    projectId: "instagram-clone-f97e3",
    storageBucket: "instagram-clone-f97e3.appspot.com",
    messagingSenderId: "518669673826",
    appId: "1:518669673826:web:5a49541a4702817b87383b",
    measurementId: "G-5Q7Q99EDMX"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage}

//  export default firebaseConfig;