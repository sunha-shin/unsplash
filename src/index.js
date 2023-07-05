import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './App';
import history from "./lib/history";
import store from "./redux-thunk/store";

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);


