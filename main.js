import {
    collection,
    addDoc,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

import { db } from "./config.js";


// html element use in javascript
let todo_form = document.querySelector('#todo_form')
let input = document.querySelector('#input')
let list = document.querySelector('#list')
let delete_btn = document.querySelector('.deleteBtn')
let edit_btn = document.querySelector('#editBtn')

// add todos in empty array
let array = []

async function getData() {
    const querySnapshot = await getDocs(collection(db, "todos"));
    querySnapshot.forEach((doc) => {
        console.log(doc.data())
        array.push(doc.data())
    });
    console.log(array)
    renderScreen()
}
getData()

// this func is for render screen
let renderScreen = () => {
    list.innerHTML = ''
    array.map((item, index) => {
        console.log(item);
        list.innerHTML += `
        <li class="list-style p-2 d-flex justify-content-between mt-2">
            ${item.value}
           <div>
           <button class="deleteBtn">Delete</button>
           <button id="editBtn">Edit</button>
           </div>
        </li>
        `
    })
}


// todo input
todo_form.addEventListener('submit', async event => {
    event.preventDefault()
    if (input.value === '') {
        alert('enter value')
    } else {
        array.push({
            value: input.value
        })
        try {
            const docRef = await addDoc(collection(db, "todos"), {
                value: input.value
            });
            console.log("Document written with ID: ", docRef.id);
            input.value = ''
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    renderScreen()
})


// delete button
