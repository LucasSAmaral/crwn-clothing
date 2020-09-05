import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA29TuKgF6xY3XjGzWHWXgflWBgTla0fHs",
  authDomain: "crwn-db-762af.firebaseapp.com",
  databaseURL: "https://crwn-db-762af.firebaseio.com",
  projectId: "crwn-db-762af",
  storageBucket: "crwn-db-762af.appspot.com",
  messagingSenderId: "1032240323513",
  appId: "1:1032240323513:web:5b1119b2c645f4e889b468",
  measurementId: "G-GCQ7GDL9NC",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
