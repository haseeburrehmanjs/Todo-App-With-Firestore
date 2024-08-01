// import function 
import {
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

import { db } from "./config.js";

let form = document.getElementById('form')
let todo = document.getElementById('input')
let list = document.getElementById('list')

// here is empty array for push todos
let array = []

async function getDataFromDb() {
    const querySnapshot = await getDocs(collection(db, "todos"));
    querySnapshot.forEach((doc) => {
        array.push({ ...doc.data(), id: doc.id })
    })
    console.log(array);
    renderScreen()
}
getDataFromDb()

// todos render in html screen
function renderScreen() {
    list.innerHTML = ''
    array.map(item => {
        list.innerHTML += `
    <li class="text-light d-flex justify-content-between align-items-center">${item.values}
    <div>
    <button id="delete_btn"><i class="fa-solid fa-delete-left"></i></button>
    <button id="edit_btn"><i class="fa-solid fa-pen-to-square"></i></button>
    </div>
    </li>`
    })

    let delete_btn = document.querySelectorAll('#delete_btn')

    delete_btn.forEach((btn, index) => {
        btn.addEventListener('click', async () => {
            console.log(array[index].id);
            await deleteDoc(doc(db, "todos", array[index].id));
            array.splice(index, 1)
            renderScreen()
        })
    })
}




form.addEventListener('submit', async event => {
    event.preventDefault()

    if (todo.value === '') {
        alert('Enter todo first')
    } else {
        try {
            const docRef = await addDoc(collection(db, "cities"), {
                values: todo.value,
                createdAt: new Date().toISOString()
            });
            console.log("Document written with ID: ", docRef.id);
            array.push({
                values: todo.value,
                createdAt: new Date().toISOString(),
                id: docRef.id
            })
            renderScreen()
            todo.value = ''
            console.log(array);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
})