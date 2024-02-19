// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7hzx8nbswy5MPAbWpdHm9d8YV590tczg",
  authDomain: "minicrud-2962b.firebaseapp.com",
  databaseURL: "https://minicrud-2962b-default-rtdb.firebaseio.com",
  projectId: "minicrud-2962b",
  storageBucket: "minicrud-2962b.appspot.com",
  messagingSenderId: "865257598790",
  appId: "1:865257598790:web:702aef2c99784f8fabff47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
