import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDTixsi5SV3fY4Wqn6tscEe8QLv5JihAkI",
  authDomain: "rn-login-7e81e.firebaseapp.com",
  projectId: "rn-login-7e81e",
  storageBucket: "rn-login-7e81e.appspot.com",
  messagingSenderId: "838079033698",
  appId: "1:838079033698:web:a2a2db4b58c2284bf47c3b",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const auth = firebase.auth();

export { auth };
