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
/* const database = firebase.database() */
const auth = firebase.auth()

const status = document.getElementById('status')
const errors = document.getElementById('errors')

const logoutButton = document.getElementById('logout-button')
const loginButton = document.getElementById('login-button')

//dev nav link
const aboutDev = document.getElementById('aboutDev')

//for the jumbotron
const farmJumbo = document.getElementById('farmJumbo')
const userJumbo = document.getElementById('userJumbo')


/* this is for the profile page */
const myStoryList = document.getElementById('myStoryList')
const myCharacterList = document.getElementById('myCharacterList')

$("#userImg").attr("src", $.cookie('userImg'));

/* This is for the Create page */
/* const storyForm = document.getElementById('storyForm')
const characterForm = document.getElementById('characterForm') */
/* const Switch = document.getElementById('Switch')
//Code to show/hide the create forms using the toggle switch 
 Switch.addEventListener('tap', () => {
  if (Switch.option.value == "story") {
    console.log("story")
    storyForm.classList.remove('hide')
    characterForm.classList.add('hide')
  } else {
     console.log("character")
    storyForm.classList.add('hide')
    characterForm.classList.remove('hide')
  }
})  */

// Log out
logoutButton.addEventListener('click', () => {
  console.log("Log out was clicked")
  console.log("remove cookies!!!");
  $.removeCookie('userId'); // remove cookie
  $.removeCookie('uid');
  $.removeCookie("userImg");
  auth.signOut()
  location.reload(); //refresh page
})

// UID is global so it can be accessed anywhere
var uid = ""

firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {

    //Everything in this if is for a logged in user
    console.log(firebaseUser)
    /*  status.innerHTML = 'Status: <span class="status-green">logged in</span>' */

   //switches around jumbotron to reflect auth status
   farmJumbo.classList.add('hide')
   userJumbo.classList.remove('hide')

    /* hides the dev nav link if no one is signed in
    ---we'll use the about button in the fable farm jumbo until someone logs in */
   aboutDev.classList.remove('hide') 

   //this hides/shows login/logout based on auth
   loginButton.classList.add('hide')
   logoutButton.classList.remove('hide')
   
    uid = firebaseUser.uid
    localStorage.setItem("uid", uid)

  } else {

    //Everything in this "else" is when no one is logged in
    console.log('not logged in')
    //switches around jumbotron to reflect auth status
    farmJumbo.classList.remove('hide')
    userJumbo.classList.add('hide')

    /* hides the dev nav link if no one is signed in
    ---we'll use the about button in the fable farm jumbo until someone logs in */
    aboutDev.classList.add('hide')

    //this hides/shows login/logout based on auth
    logoutButton.classList.add('hide')
    loginButton.classList.remove('hide')
    /*    status.innerHTML = 'Status: <span class="status-red">not logged in</span>' */
  }
})


/*   
  // create new story
  storyForm.addEventListener('submit', e => {
      console.log('Story was added to your list!');
      e.preventDefault()
      
    })
  // create new character
  characterForm.addEventListener('submit', e => {
      console.log('Character was added to your list!');
      e.preventDefault() 
    })
  
   */

/* 
firebase.auth().onToggle(firebaseUser => {
  if (toggle == true){
 
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
}) */

var displayError = (message) => {
  console.log('this happened');
  errors.innerHTML = message
  setTimeout(() => {
    errors.innerHTML = ""
  }, 2000)
}