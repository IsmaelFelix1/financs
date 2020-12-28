import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


let firebaseConfig = {
    apiKey: "AIzaSyB4gV6H7qQZhxmKLISwq158TSXyX156FqY",
    authDomain: "financs.firebaseapp.com",
    projectId: "financs",
    storageBucket: "financs.appspot.com",
    messagingSenderId: "222987122070",
    appId: "1:222987122070:web:a8562996314e5b761799b7",
    measurementId: "G-ZLHVEVPEPZ"
  };

  if(!firebase.apps.length){
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }

  export default firebase;