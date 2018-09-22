import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAqpqo8aWpC_sJ18CIUvWYUktGMf8w1ylE",
  authDomain: "course-4895c.firebaseapp.com",
  databaseURL: "https://course-4895c.firebaseio.com",
  projectId: "course-4895c",
  storageBucket: "",
  messagingSenderId: "369023837879"
    };

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();


