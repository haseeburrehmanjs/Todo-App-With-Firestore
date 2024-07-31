// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

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
const db = getFirestore(app);

// function addNumberToDB() {
//     try {
//         let numberCollection = collection(db, 'number')
//         let docRef = addDoc(numberCollection, {
//             number: Math.round(Math.random() * 1000)
//         })
//         console.log(docRef);
//     } catch (e) {
//         console.error("Error adding document: ", e);
//     }
// }
// addNumberToDB()


// html element use in javascript

let todo_form = document.getElementById('todo_form')
let input = document.getElementById('input')

// create collection
let todoCollectionToDb = collection(db, 'todos')

todo_form.addEventListener('submit', async event => {
    event.preventDefault()

    try {
        let docRef = await addDoc(todoCollectionToDb, {
            values: input.value,
            createdAt: new Date().toISOString(),
        })
        console.log(docRef);
        input.value = ''
    } catch (e) {
        console.log(e);
    }
})