// Firebase config
var config = {
    apiKey: "AIzaSyAPKqSS7V9aSDRqoFDjEuHYtTmWQ6kf9KA",
    authDomain: "fable-farm.firebaseapp.com",
    databaseURL: "https://fable-farm.firebaseio.com",
    projectId: "fable-farm",
    storageBucket: "",
    messagingSenderId: "759325583688"
  };
// Initialize Firebase
firebase.initializeApp(config);

// Make a connection to the Firebase realtime database
const database = firebase.database()
const auth = firebase.auth()

// Access the values from the html forms
const storyForm = document.getElementById('login')

const loginEmail = document.getElementById('login-email')

const loginPassword = document.getElementById('login-password')


/* const loginButton = document.getElementById('login-button') */

const characterForm = document.getElementById('sign-up')

const signUpEmail = document.getElementById('sign-up-email')

const signUpPassword= document.getElementById('sign-up-password')

/* const signUpButton = document.getElementById('sign-up-button') */

const logoutButton = document.getElementById('logout-button')

const status = document.getElementById('status')
const errors = document.getElementById('errors')

const addItemForm = document.getElementById('add-item-form')
const toDoList = document.getElementById('to-do-list')

// Log in
storyForm.addEventListener('click', e => {
  console.log('log in was clickd');
  e.preventDefault()
  
})

// Sign up
characterForm.addEventListener('click', e => {
  console.log('sign up was clicked');
  e.preventDefault() 
})

// UID is global so it can be accessed anywhere
var uid = ""

// Firebase monitors the Auth state in real time. Use this if/else statement to do things based on that state.
firebase.auth().onAuthStateChanged(firebaseUser => {
  if (toggleOn){

    //Everything in this if is for a logged in user
    console.log("Stories")
    storyForm.classList.remove('hide')
    characterForm.classList.add('hide')
    uid = firebaseUser.uid
    localStorage.setItem("uid", uid)

  } else {

    //Everything in this "else" is when no one is logged in
    console.log('characters')
    storyForm.classList.add('hide')
    characterForm.classList.remove('hide')
  }
})

var displayError = (message) => {
  console.log('this happened');
  errors.innerHTML = message
  setTimeout(() => {
    errors.innerHTML = ""
  }, 2000)
}