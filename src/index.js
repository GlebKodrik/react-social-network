import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import store from "./Redux/redux-store";
import {Provider} from "react-redux";

ReactDOM.render(
    //для Route маршрутизатора
    <BrowserRouter>
        {/*позволяет не прокидывать через props всем store а взять только тем кому нужно*/}
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

serviceWorker.unregister(); 
