import {ACTIONS} from '../actions';
import * as firebase from "firebase";

const databaseRef = firebase.database().ref();

export const messages = databaseRef.child("messages");
export const users = databaseRef.child("users");
export const auth = firebase.auth();

export const getAllChannel = () => async dispatch => {
    messages.child("all").orderByChild("timestamp").on("value", snapshot => {
        let json = [];
        snapshot.forEach(function(childSnapshot) {
            let item = childSnapshot.val();
            item.key = childSnapshot.key;
            json.push(item);
        });
        dispatch({
            type: ACTIONS.ALL_CHANNEL.GET_ALL,
            payload: json
        });
    });
};

export const sendMessage = (message) => async dispatch => {
    users.child(auth.currentUser.uid).on("value",snapshot=>{
        messages.child("all").push(
            {
                message:message,
                senderName:snapshot.val().firstname+" "+snapshot.val().lastname,
                senderId:auth.currentUser.uid,
                timestamp:Math.floor(Date.now() / 1000)
        });

    })
};