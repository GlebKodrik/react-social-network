import {combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

let reducer = combineReducers({
    messagePage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducer);

export default store;
