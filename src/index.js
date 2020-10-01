import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import {store} from "./Redux/state";

let rerenderTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
        <App  state={state}
              dispatch={store.dispatch.bind(store)}
        />
    </BrowserRouter>,
  document.getElementById('root') 
  );
}

rerenderTree(store.getState());
store.subscriber(rerenderTree);

serviceWorker.unregister(); 
