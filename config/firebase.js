/** @format */

import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyArUCMZQf2PQJvOSyqJl5FFlThkk1GluX0",

	authDomain: "email-clone-app.firebaseapp.com",

	projectId: "email-clone-app",

	storageBucket: "email-clone-app.appspot.com",

	messagingSenderId: "1057375020112",

	appId: "1:1057375020112:web:10a8f6e3efa94ae5501d55",
};

const firebaseApp = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
