const firebase = require('firebase')
global.XMLHttpRequest = require("xhr2");
const firebaseStorage = require('firebase/storage')

const credentials = { // these are credentials firebase app gives to you
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
}

const app = firebase.initializeApp(credentials)

const storage = app.storage(); // Get instance of storage from your app

const fileRef = storage.ref().child('data.json') // Reference to file directly in storage

fileRef.getDownloadURL().then(function(url) { // function to read file
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function(event) {
    var data = xhr.response;
    console.log(data) // line that log the file content, here you can save it
  };

  xhr.open('GET', url);
  xhr.send();
})
