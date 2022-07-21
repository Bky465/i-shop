import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBKo8cjwHawFZZWSczoqiZiIRriqnzpyBc",
  authDomain: "i-shop-cc5b6.firebaseapp.com",
  projectId: "i-shop-cc5b6",
  storageBucket: "i-shop-cc5b6.appspot.com",
  messagingSenderId: "367722269441",
  appId: "1:367722269441:web:8991f932e946bbbbf7a900",
  measurementId: "G-EXXMJL8LT1"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}