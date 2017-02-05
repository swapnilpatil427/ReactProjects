import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyCNv6FWsS8eLjb8cP5lGM1B1-z9l4xUBVE",
        authDomain: "todoapp-7cc8a.firebaseapp.com",
        databaseURL: "https://todoapp-7cc8a.firebaseio.com",
        storageBucket: "todoapp-7cc8a.appspot.com",
        messagingSenderId: "717149341970"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;