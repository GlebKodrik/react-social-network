import {applyMiddleware, combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let reducer = combineReducers({
    messagePage: dialogsReducer,
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});
//applyMiddleware(thunkMiddleware) для промежуточного слоя thunk
let store = createStore(reducer , applyMiddleware(thunkMiddleware));

window.store = store;//что лежит в store через get.state()

export default store;
