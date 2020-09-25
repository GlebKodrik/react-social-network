import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addElement , changeNewPost} from './Redux/state'


export let rerenderTree = (state) => {
  ReactDOM.render(
  <React.StrictMode>
    <App  state={state} addElement={addElement} changeNewPost={changeNewPost}/>
  </React.StrictMode>,
  document.getElementById('root') 
  );
}

