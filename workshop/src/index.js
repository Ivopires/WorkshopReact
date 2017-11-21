import React from 'react';
import App from './components/App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import todoApp from './reducers/todoApp'

let store = createStore(todoApp, window.STATE_FROM_SERVER)

render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root'));
