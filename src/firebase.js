import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyByHcDrTeMIHxUAzNUuzROEmvxPzQGaJJs",
    authDomain: "what-s-app-clone-eee49.firebaseapp.com",
    projectId: "what-s-app-clone-eee49",
    storageBucket: "what-s-app-clone-eee49.appspot.com",
    messagingSenderId: "897784125251",
    appId: "1:897784125251:web:9f626eb2323b2a343201f6",
    measurementId: "G-Y37B2LRY5N"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;