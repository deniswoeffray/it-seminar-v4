import { combineReducers } from 'redux'
import MessagesReducer from './MessagesReducer';

const rootReducer = combineReducers({
    allchannel: MessagesReducer,
});

export default rootReducer;