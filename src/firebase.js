import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import Constants from 'expo-constants'

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyB_ezxklzKkd7EPN8QDy62Qwdxq6wp7lvw",
  authDomain: "open-sesame-ebca1.firebaseapp.com",
  projectId: "open-sesame-ebca1",
  storageBucket: "open-sesame-ebca1.appspot.com",
  messagingSenderId: "39815518069",
  appId: "1:39815518069:web:56d273e4f9314bc59ca53c",
  measurementId: "G-QHGKDHV7G5",

};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database= getFirestore();
