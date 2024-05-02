import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC3xSOLAxGc9P6EKTJr60PlVt8K-qT_tq8",
    authDomain: "webinterface-793bb.firebaseapp.com",
    projectId: "webinterface-793bb",
    storageBucket: "webinterface-793bb.appspot.com",
    messagingSenderId: "38307258777",
    appId: "1:38307258777:web:71c2dbc12881c19e227308"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;