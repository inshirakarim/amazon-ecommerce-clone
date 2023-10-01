// import firebase from "firebase"
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyButIg5LvHswA-124pyTbKkF5EWfDzukO0",
    authDomain: "e-clone-d1acb.firebaseapp.com",
    projectId: "e-clone-d1acb",
    storageBucket: "e-clone-d1acb.appspot.com",
    messagingSenderId: "639943286208",
    appId: "1:639943286208:web:80fd9a146d119bf0093c25",
    measurementId: "G-SEY5BDEMX7"
  };

//   const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };