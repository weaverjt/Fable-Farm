// Firebase config
var config = {
  apiKey: "AIzaSyAPKqSS7V9aSDRqoFDjEuHYtTmWQ6kf9KA",
  authDomain: "fable-farm.firebaseapp.com",
  databaseURL: "https://fable-farm.firebaseio.com",
  projectId: "fable-farm",
  storageBucket: "",
  messagingSenderId: "759325583688"
};

var uidToExport = "";
// Initialize Firebase
firebase.initializeApp(config);

var creatingNewUser = false;

// Make a connection to the Firebase realtime database
// const database = firebase.database()
const auth = firebase.auth()


/* use this variable to hide/show the authForm background */
const authForm = document.getElementById('authForm')

// Access the values from the html sign up and log in form
const loginForm = document.getElementById('login')
const loginEmail = document.getElementById('login-email')
const loginPassword = document.getElementById('login-password')
const forgottenId = document.getElementById('forgottenId')
/* const loginButton = document.getElementById('login-button') */

const signUpForm = document.getElementById('sign-up')
const signUpEmail = document.getElementById('sign-up-email')
const signUpPassword = document.getElementById('sign-up-password')
const signUpScreenName = document.getElementById('sign-up-displayName');
const signUpImgUrl = document.getElementById('sign-up-Img');
/* const signUpButton = document.getElementById('sign-up-button') */

const logoutButton = document.getElementById('logout-button')
const loginButton = document.getElementById('login-button')


const status = document.getElementById('status')
const errors = document.getElementById('errors')

const accountForm = document.getElementById('accountForm')
const toDoList = document.getElementById('to-do-list')

/* Jumbotron variables */
const farmJumbo = document.getElementById('farmJumbo')
const userJumbo = document.getElementById('userJumbo')


//forgotten id
forgottenId.addEventListener('click', () => {
  console.log("Sucks, don't it.")
  alert("That sucks...")
})



// Log in
$.removeCookie('uid'); // remove cookie
$.removeCookie('userId'); // remove cookie
loginForm.addEventListener('click', e => {
  console.log('log in was clicked');
  e.preventDefault()
  const email = loginEmail.value
  const pass = loginPassword.value
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(function () {
      return firebase.auth().signInWithEmailAndPassword(email, pass);
    })
    .catch(function (error) {
      displayError(e.message);
    });
})

// Sign up
$("#newUserBtn").on('click', e => {
  console.log('sign up was clicked');
  e.preventDefault()
  const email = signUpEmail.value
  const pass = signUpPassword.value
  const promise = auth.createUserWithEmailAndPassword(email, pass)
  promise.catch(e => displayError(e.message))
  creatingNewUser = true;
})

// Log out
logoutButton.addEventListener('click', () => {

  console.log("Log out was clicked")

  auth.signOut()

})

// UID is global so it can be accessed anywhere
var uid = ""

// Firebase monitors the Auth state in real time. Use this if/else statement to do things based on that state.
firebase.auth().onAuthStateChanged(firebaseUser => {

  if (firebaseUser) {
    uid = firebaseUser.uid
    uidToExport = uid;
    Cookies.set("uid", uid);
    //Everything in this if is for a logged in user
    console.log(firebaseUser)

    /*  status.innerHTML = 'Status: <span class="status-green">logged in</span>' */

    /* login-auth-status hide/show code */
    loginButton.classList.add('hide')
    logoutButton.classList.remove('hide')

    /* jumbo-auth-status hide/show code */
    farmJumbo.classList.add('hide')
    userJumbo.classList.remove('hide')

    localStorage.setItem("uid", uid)

    if (creatingNewUser && signUpScreenName.value !== "") {

      $.post("/api/user", { userName: signUpScreenName.value, userFirebase: uid, imageURL: signUpImgUrl.value }, function (data) {
        window.location.replace("/");
      })
    } else {
      window.location.replace("/");
    }
  } else {

    //Everything in this "else" is when no one is logged in
    console.log('not logged in')
    logoutButton.classList.add('hide')
    loginButton.classList.remove('hide')

    farmJumbo.classList.remove('hide')
    userJumbo.classList.add('hide')

    /*    status.innerHTML = 'Status: <span class="status-red">not logged in</span>' */
  }
})


var displayError = (message) => {
  console.log('Displaying Error');
  console.log(message)
  errors.innerHTML = message
  setTimeout(() => {
    errors.innerHTML = ""
  }, 2000)
}

/* This is erring!!! */
module.exports = uidToExport;
/* !!!! */