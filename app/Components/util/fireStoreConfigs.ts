
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB8Vr7n-G6BuYG-WbyrdOdGdzmNXv_RISw",
  authDomain: "terracodesite.firebaseapp.com",
  projectId: "terracodesite",
  storageBucket: "terracodesite.appspot.com",
  messagingSenderId: "55779367441",
  appId: "1:55779367441:web:b23f345c813761cee7afb0",
  measurementId: "G-13C13D56TF"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let collectionRef = collection(db, "Orders");

async function addData(Data : any){

     const docRef = await addDoc(collectionRef, Data);
     console.log("Document written with ID: ", docRef.id);

 
};
   


//sampleOrder //TODO: this is temporary

try {
addData({"name":"detail1", "date":"2021-10-10", "data": {"test": "test"}});
}catch(e){
    console.log(`Error Occured: ${e}`);
}


