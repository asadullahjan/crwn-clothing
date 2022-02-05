import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAHr6jSnKv8O9r4BvEfztbOeWOr9x5Q0IM",
  authDomain: "crwn-db-67dca.firebaseapp.com",
  projectId: "crwn-db-67dca",
  storageBucket: "crwn-db-67dca.appspot.com",
  messagingSenderId: "940670701667",
  appId: "1:940670701667:web:8c69418264ec57f06ae856",
  measurementId: "G-R02TFLSY4L"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;