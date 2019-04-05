import * as firebase from "firebase";
// import {APP_CONFIG} from '../APP_CONFIG';

// firebase.initializeApp(APP_CONFIG);

const databaseRef = firebase.database().ref();

export const messages = databaseRef.child("messages");
export const users = databaseRef.child("users");
export const auth = firebase.auth();

// export default config;