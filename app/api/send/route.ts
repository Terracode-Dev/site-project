
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { NextRequest } from "next/server";

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

export async function GET(req : NextRequest){

    let recData = req.nextUrl.searchParams

    let sendPack = {
      name: recData.get("name"),
      email: recData.get("email"),
      message: recData.get("message"),
    }

    const docRef = await addDoc(collectionRef, sendPack);
    return Response.json({ "data" : `Document written with ID:${docRef.id}` })
};
   





