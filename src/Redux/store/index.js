import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { profileReducer } from './Profile_/reducer';
import { chatsReducer } from './Chats_/reducer';
import { messagesReducer } from './Messages_/reducer';
import { todosReducer } from './Gists_/reducer';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage
}

const allReducers = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
    profile: profileReducer,
    gists: todosReducer
});
const persistedReducer = persistReducer(persistConfig, allReducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//export const store = createStore(profileReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);

