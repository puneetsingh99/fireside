import firebase from "firebase/app";
import "firebase/firestore";

export const initializeDb = () => {
  const firebaseConfig = {};

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  return firebase.firestore();
};
