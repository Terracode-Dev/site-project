
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { type NextRequest } from 'next/server'
import { NextApiResponse, NextApiRequest } from "next";



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

export async function GET(req : NextRequest, res: NextApiResponse){
  
  console.log("called the function")
    let recData = req.nextUrl.searchParams

    let sendPack = {
      status : 0, //means the dovcument is yet to examine

      ClientData : {
        fname: recData.get("first-name"),
        lname: recData.get("last-name"),
        email: recData.get("email"),
        country: recData.get("country"),
        streetAddress : recData.get("street-address"),
        city: recData.get("city"),
        region : recData.get("region"),
        zipCode : recData.get("postal-code"),
      },
      
      forBusiness : recData.get("business"),
      forPersonal : recData.get("personal"),

      ClientRequest : {
        reqCategory: recData.get("service-category"),
        reqData : recData.get("req-about"),
      },
      notifyEmail : recData.get("not-email"),
      notifyMobile : recData.get("not-mobile"),
    }
    const docRef = await addDoc(collectionRef, sendPack);

    
};
   





