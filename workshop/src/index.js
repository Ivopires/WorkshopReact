import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import todoApp from './reducers/todoApp'

let store = createStore(todoApp, window.STATE_FROM_SERVER)

ReactDOM.render(<App />, document.getElementById('root'));
