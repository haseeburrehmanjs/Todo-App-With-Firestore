import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

import { auth } from "./config.js";
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

let form = document.querySelector('#form')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let google_login = document.querySelector('#google_login')
let github_login = document.querySelector('#github_login')

form.addEventListener('submit', event => {
  event.preventDefault()

  if (email.value === '' && password.value === '') {
    alert('enter email and password')
  } else {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        window.location = 'todos.html'
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
})


// google login
google_login.addEventListener('click', ()=> {
  signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    console.log(user);
    window.location = 'todos.html'
  }).catch((error) => {
    // Handle Errors here.
    const errorMessage = error.message;
    console.log(errorMessage);
  });

})

// github login
github_login.addEventListener('click', ()=> {
  console.log('github');
  signInWithPopup(auth, githubProvider)
  .then((result) => {
    const user = result.user;
    console.log(user);
    window.location = 'todos.html'
  }).catch((error) => {
    // Handle Errors here.
    const errorMessage = error.message;
    console.log(errorMessage);
  });

})