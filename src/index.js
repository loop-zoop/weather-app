import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {rHelper} from './reducers';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import {persistedReducer} from './reducers';
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();

console.log('reduxHelper' , rHelper)
console.log('rootReducer', rootReducer)

console.log('persistedReducer', persistedReducer)

const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
const persistor = persistStore(store)
export const actions = rHelper.generateActions(store);
console.log('store', store.getState())

sagaMiddleware.run(rootSaga)

ReactDOM.render(<Provider store={store}><PersistGate loading={null} persistor={persistor}><App /></PersistGate></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
