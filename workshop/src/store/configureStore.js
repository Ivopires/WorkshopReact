import { createStore, compose } from 'redux'
import { persistStore } from 'redux-persist'
import reducers from '../reducers/todoApp'

function configureStore() {

    const enhancer = compose(window.__REDUX_DEV_TOOLS_EXTENSION__ &&
        window.__REDUX_DEV_TOOLS_EXTENSION__());

    const store = createStore(reducers, enhancer);

    persistStore(store);

    return store
}

export default configureStore();
