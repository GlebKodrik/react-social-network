import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import store from "./Redux/redux-store";

let rerenderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                 store={store}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderTree(store.getState());
store.subscribe(() => {
    rerenderTree(store.getState());
});

serviceWorker.unregister(); 
