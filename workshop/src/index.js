import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import todoApp from './reducers/todoApp';
import App from './components/App';

function configureStore() {

    const store = createStore(todoApp, composeWithDevTools(
        applyMiddleware()
    ))

    return store;
}

render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
)
