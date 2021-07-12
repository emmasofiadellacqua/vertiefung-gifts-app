import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

<script src="https://www.gstatic.com/firebasejs/7.1.0/firebase-database.js"></script>

const app = firebase.initializeApp({
  apiKey: "AIzaSyD6AYyZv_ER9__Ozf6VmPiGO4dHU_0Cg_8",
  authDomain: "giftapp-a129f.firebaseapp.com",
  projectId:"giftapp-a129f",
  storageBucket: "giftapp-a129f.appspot.com",
  messagingSenderId: "43820114104",
  appId: "1:43820114104:web:f1d2b14064d56247ae144d",
  measurementId: "G-6J4VMC9QV5",
  databaseURL: "https://giftapp-a129f-default-rtdb.europe-west1.firebasedatabase.app"
});


export default app;
