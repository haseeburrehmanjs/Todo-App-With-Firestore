import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./config.js";

let form = document.querySelector('#form')
let email = document.querySelector('#email')
let password = document.querySelector('#password')

form.addEventListener("submit", event => {
    event.preventDefault()

    if(email.value === '' && password.value === ''){
        alert('enter email and password')
    }else {
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location = 'index.html'
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage)
        });
    }
})