import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {rerenderTree} from './render.js';
import state from './Redux/state';


rerenderTree(state);


serviceWorker.unregister(); 
