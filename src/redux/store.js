import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension';

import sagas from "./sagas";
import rootReducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagas);

export default store;