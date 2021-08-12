/** @format */

import firebase from "firebase";

const firebaseConfig = {
	apiKey: process.env.apiKey,

	authDomain: process.env.auth,

	projectId: process.env.projectId,

	storageBucket: process.env.storageBucket,

	messagingSenderId: process.env.messagingSenderId,

	appId: process.env.appId,
};

const firebaseApp = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
