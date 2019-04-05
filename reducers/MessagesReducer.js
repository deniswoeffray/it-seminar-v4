import {ACTIONS} from "../actions";

let initialState = {
    all: {},
    current: {},
}


export default function MessagesReducer(state = initialState , action) {
    switch (action.type) {
        case ACTIONS.ALL_CHANNEL.GET_ALL:
            return Object.assign({}, state, {
                all: action.payload
            });
        default:
            return state;
    }
}