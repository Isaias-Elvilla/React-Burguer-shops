import firebase from 'firebase/app';
import '@firebase/firestore';

const firebaseConfig = firebase.initializeApp( {
    apiKey: "AIzaSyBKsbXF2raiTlAOD7Sn-Ifxnhlz3D8vhpo",
    authDomain: "valiendo-burguer.firebaseapp.com",
    projectId: "valiendo-burguer",
    storageBucket: "valiendo-burguer.appspot.com",
    messagingSenderId: "649166253368",
    appId: "1:649166253368:web:c11d99b0baf0d64641e5cd",
    measurementId: "G-CMC4RG7B7J"
  });

// Initialize Firebase

export const getFirebase = () => {
  return  firebaseConfig 
 };
 
 export const getFirestore = () => {
   return firebase.firestore(firebaseConfig);
 }; 
 