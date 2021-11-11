import { createStore, combineReducers } from 'redux';
import { profileReducer } from './Profile_/reducer';
import { chatsReducer } from './Chats_/reducer';
import { messagesReducer } from './Messages_/reducer';

const allReducers = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    profile: profileReducer
});

//export const store = createStore(profileReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());