import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDItXVUhkMweG8FZ5I2fhrFvQBgko5siWg",
    authDomain: "netflix-xlone-e5652.firebaseapp.com",
    projectId: "netflix-xlone-e5652",
    storageBucket: "netflix-xlone-e5652.appspot.com",
    messagingSenderId: "200961627254",
    appId: "1:200961627254:web:cbca23117ff613310b7b57"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {auth}
  export default db;