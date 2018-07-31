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

const status = document.getElementById('status')
const errors = document.getElementById('errors')

const storyForm = document.getElementById('storyForm')
const myStoryList = document.getElementById('myStoryList')

const characterForm = document.getElementById('characterForm')
const myCharacterList = document.getElementById('myCharacterList')



const logoutButton = document.getElementById('logout-button')

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

// Log out
logoutButton.addEventListener('click', () => {
    console.log("Log out was clicked")
    auth.signOut()
  })


// UID is global so it can be accessed anywhere
var uid = ""

// Firebase monitors the Auth state in real time. Use this if/else statement to do things based on that state.
firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser){
  
      //Everything in this if is for a logged in user
      console.log(firebaseUser)
      logoutButton.classList.remove('hide')
     /*  status.innerHTML = 'Status: <span class="status-green">logged in</span>' */
      uid = firebaseUser.uid
      localStorage.setItem("uid", uid) 
     
  
      // Use the UID to get authorized data
   /*    database.ref('/to-do-list').orderByChild('uid').equalTo(uid).on("value", (snapshot) => {
        document.getElementById('to-do-list-items').innerHTML = ""
        snapshot.forEach(data => {
          var p = document.createElement('p')
          p.textContent = data.val().item
          var deleteButton = document.createElement('button')
          deleteButton.textContent = 'x'
          deleteButton.classList.add('delete-button')
          deleteButton.setAttribute('data', data.key)
          p.appendChild(deleteButton)
          document.getElementById('to-do-list-items').appendChild(p)
        })
      }) */
  
    } else {
  
      //Everything in this "else" is when no one is logged in
      console.log('not logged in')
      logoutButton.classList.add('hide')
      location.setItem('index.html')
   /*    status.innerHTML = 'Status: <span class="status-red">not logged in</span>' */
    }
  })


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