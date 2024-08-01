// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyAA6_A2OK5ZCJazqIswRPtwKGlP_fE2TaA",
    authDomain: "todoappwithfirestore1.firebaseapp.com",
    projectId: "todoappwithfirestore1",
    storageBucket: "todoappwithfirestore1.appspot.com",
    messagingSenderId: "150922754020",
    appId: "1:150922754020:web:cb2ce1732bcf2f2c1bb9f1",
    measurementId: "G-GXTDDT1H63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);