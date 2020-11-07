import firebase from "firebase";

import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCFUBRC42wrkfo5c9W5UebfHIOo38wZopQ",
    authDomain: "react-native-crud-16774.firebaseapp.com",
    databaseURL: "https://react-native-crud-16774.firebaseio.com",
    projectId: "react-native-crud-16774",
    storageBucket: "react-native-crud-16774.appspot.com",
    messagingSenderId: "445306051677",
    appId: "1:445306051677:web:2eecbc97576561b8e801b4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export default {
    firebase,
    db
  }