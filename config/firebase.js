import * as firebase from "firebase";

const databaseRef = firebase.database().ref();

export const messages = databaseRef.child("messages");
export const users = databaseRef.child("users");
export const auth = firebase.auth();

// export default config;