import firebase from 'firebase/app';
// import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAzHMvI6Rcb8HoPbYh3GEmQmATQW5MCVPM",
    authDomain: "reacttodo-e1540.firebaseapp.com",
    databaseURL: "https://reacttodo-e1540.firebaseio.com",
    projectId: "reacttodo-e1540",
    storageBucket: "reacttodo-e1540.appspot.com",
    messagingSenderId: "601363771217"
  };
  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const db = firebase.firestore();
  export const storage = firebase.storage();