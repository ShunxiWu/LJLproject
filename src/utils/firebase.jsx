import * as firebase from "firebase/app";
import "firebase/auth";

// if (!process.env.REACT_APP_FIREBASE_CONFIG) {
//   console.error("REACT_APP_FIREBASE_CONFIG must be defined");
//   console.log("ENV: ", process.env);
// }
const firebaseConfig = {

    apiKey: "AIzaSyBiP6DUS3YmKMvHMNIZXBjzPrqROP7T2NM",
        
    authDomain: "esp8266-imu.firebaseapp.com",
        
    databaseURL: "https://esp8266-imu-default-rtdb.firebaseio.com",
        
    projectId: "esp8266-imu",
        
    storageBucket: "esp8266-imu.appspot.com",
        
    messagingSenderId: "759100494124",
        
    appId: "1:759100494124:web:644ee9c94e37a6ad9d9c89",
        
    measurementId: "G-8W91FMNL2G"
        
    };

export function initialize() {
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}

export function attachAuthListener(handler) {
  return firebase.auth().onAuthStateChanged(user => {
    handler(user);
  });
}

export async function createNewUser(email, password) {
  await firebase.auth().createUserWithEmailAndPassword(email, password);
}

export async function signIn(email, password) {
  await firebase.auth().signInWithEmailAndPassword(email, password);
}

export async function signOut() {
  await firebase.auth().signOut();
}