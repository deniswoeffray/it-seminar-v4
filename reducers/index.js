import { combineReducers } from 'redux'
import TodoReducer from './MessagesReducer'
import MessagesReducer from './MessagesReducer';

const rootReducer = combineReducers({
    allchannel: MessagesReducer,
});

export default rootReducer;