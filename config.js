// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyDILqdRfxUMtME-WV-ZaJGHjNU8igIGf-U",
    authDomain: "todo-app-by-firestore.firebaseapp.com",
    projectId: "todo-app-by-firestore",
    storageBucket: "todo-app-by-firestore.appspot.com",
    messagingSenderId: "278026399732",
    appId: "1:278026399732:web:afc08593af280df00e93a1",
    measurementId: "G-RX3RDCMD2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);