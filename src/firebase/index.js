import firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// Replace this with your Firebase SDK config snippet
const firebaseConfig = {
    apiKey: "AIzaSyBvl5m_MsbG8kGDGzYGvQffmeYeuffiOKc",
    authDomain: "open-sesame-9ff16.firebaseapp.com",
    projectId: "open-sesame-9ff16",
    storageBucket: "open-sesame-9ff16.appspot.com",
    messagingSenderId: "965230535404",
    appId: "1:965230535404:web:5fccfbfa7ecf93aa41fbc9",
    measurementId: "G-7YBRNM5S0Q"
  /* YOUR FIREBASE CONFIG OBJECT HERE */
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };