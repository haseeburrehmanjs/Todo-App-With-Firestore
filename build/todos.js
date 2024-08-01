// import function 
import {
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
    updateDoc,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

import {
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

import { db } from "./config.js";
import { auth } from "./config.js";


let form = document.getElementById('form')
let todo = document.getElementById('input')
let list = document.getElementById('list')
let logOut = document.getElementById('logOut')
let userImage = document.getElementById('userImage')
let UserName = document.getElementById('UserName')

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user;
        userImage.src = user.photoURL
        UserName.innerHTML = user.displayName
        console.log(uid);
    } else {
        window.location = 'index.html'
    }
});

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

    // delete button
    let delete_btn = document.querySelectorAll('#delete_btn')

    delete_btn.forEach((btn, index) => {
        btn.addEventListener('click', async () => {
            console.log(array[index].id);
            await deleteDoc(doc(db, "todos", array[index].id));
            array.splice(index, 1)
            renderScreen()
        })
    })

    // edit button
    let edit_btn = document.querySelectorAll('#edit_btn')

    edit_btn.forEach((btn, index) => {
        btn.addEventListener('click', async () => {
            let ubdateTodoValue = prompt('enter new value')
            const washingtonRef = doc(db, "todos", array[index].id);
            await updateDoc(washingtonRef, {
                values: ubdateTodoValue
            });

            // javascript array 
            array[index].values = ubdateTodoValue
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
            const docRef = await addDoc(collection(db, "todos"), {
                values: todo.value,
                createdAt: new Date().toISOString()
            });
            console.log("Document written with ID: ", docRef.id);
            array.push({
                values: todo.value,
                createdAt: new Date().toISOString(),
                id: docRef.id
            })
            console.log(array);
            renderScreen()
            todo.value = ''
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
})


logOut.addEventListener('click', () => {
    console.log('logout');
    signOut(auth).then(() => {
        window.location = 'index.html'
    }).catch((error) => {
        // An error happened.
    });
})