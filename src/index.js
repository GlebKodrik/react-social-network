import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './Redux/state';
import {addElement} from './Redux/state'

addElement("Пошел нахуй глебка")
ReactDOM.render(
  <React.StrictMode>
    <App  state={state} addElement={addElement}/>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
