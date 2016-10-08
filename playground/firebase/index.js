import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCQTY7UrISCgfy7y4uhcQ1M6jZcbFsvUi4",
    authDomain: "getz-todo-app.firebaseapp.com",
    databaseURL: "https://getz-todo-app.firebaseio.com",
    storageBucket: "getz-todo-app.appspot.com",
    messagingSenderId: "278320937418"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Tim',
        age: 25
    }
});

var notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot) => {
    console.log('child_added', snapshot.key, snapshot.val());
});

notesRef.on('child_changed', (snapshot) => {
    console.log('child_changed', snapshot.key, snapshot.val());
});

notesRef.on('child_removed', (snapshot) => {
    console.log('child_removed', snapshot.key, snapshot.val());
});



var newNoteRef = notesRef.push({
    text: 'Walk the dog!'
});

console.log('Todo id', newNoteRef.key);


