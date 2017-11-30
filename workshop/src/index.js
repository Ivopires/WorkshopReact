import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers/todoApp'
import App from './components/App'

function configureStore() {
    const store = createStore(todoApp)

    return store;
}

render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
)
