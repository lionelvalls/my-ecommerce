import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyAM9T3gE_M-Rt5518BCHmdYdVaj-1rgaTk",
    authDomain: "ecommerce-react-coder-62143.firebaseapp.com",
    projectId: "ecommerce-react-coder-62143",
    storageBucket: "ecommerce-react-coder-62143.appspot.com",
    messagingSenderId: "736018383883",
    appId: "1:736018383883:web:1b760a595619677c10b30e"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)