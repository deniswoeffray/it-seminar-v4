import {ACTIONS} from '../actions';
import { messages, auth, users } from "../config/firebase";
import * as firebase from "../config/firebase";


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