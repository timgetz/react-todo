import firebase from 'firebase';

try {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCQTY7UrISCgfy7y4uhcQ1M6jZcbFsvUi4",
        authDomain: "getz-todo-app.firebaseapp.com",
        databaseURL: "https://getz-todo-app.firebaseio.com",
        storageBucket: "getz-todo-app.appspot.com",
        messagingSenderId: "278320937418"
    };
    firebase.initializeApp(config);
} catch (e) {
    console.log('Error: Initializing firebase', e);
}

export var firebaseRef = firebase.database().ref();
export default firebase;