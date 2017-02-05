import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCNv6FWsS8eLjb8cP5lGM1B1-z9l4xUBVE",
    authDomain: "todoapp-7cc8a.firebaseapp.com",
    databaseURL: "https://todoapp-7cc8a.firebaseio.com",
    storageBucket: "todoapp-7cc8a.appspot.com",
    messagingSenderId: "717149341970"
};

firebase.initializeApp(config);
var firebaseRef =  firebase.database().ref();


//---------------- Setting Data -------------------- //
firebaseRef.set({
      app : {
          name : 'Todo App',
          version : '1.0.0'
      },
      isRunning : true
}).then(() => {
      console.log('Set worked');
}, (e) => {
      console.log('error');
});

// ---------------- Update Data -------------------- //
// Only update first child
firebaseRef.update({
    isRunning : false
});

//Multi Child update
firebaseRef.update({
    isRunning : true,
    'app/name' : 'Todo App - By Swapnil'
}).then(() => {
    console.log('Update child worked');
}, (e) => {
    console.log('update failed');
});

// ------------------ Remove Data -------------------- //
firebaseRef.child('app/version').remove().then(() => {
    console.log('Application version removed');
}, (e) => {
    console.log('Error removing app version');
});

// or Update key to Null to remove the data.

//------------------------- Listen for event ------------- //
var appListener = (snapshot) => {
    console.log('Got updated value' + snapshot.val());
    
};
firebaseRef.child('app').once('value').then((snapshot) => {
    console.log('Got entire database', snapshot.key, snapshot.val());
}, (e) => {
    console.log('Unable to fetch value');
});

firebaseRef.on('value', appListener);

//------------- Remove Listener ---------- //
//firebaseRef.off();
//firebaseRef.off(appListener);

//------------- Push function FIrebase ----------- // 
var newNote = firebaseRef.child('notes');
newNote.on('child_added', (snapshot) => {
    console.log(snapshot.key);
    console.log(snapshot.val());
})
newNote.push({
    text : 'first try!!!'
});
