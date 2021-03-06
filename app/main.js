/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import CombinedReducers from './redux/reducers/index';
import RootSaga from './redux/sagas/RootSaga';

import Root from './config/Root';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = process.env.NODE_ENV !== 'production'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'Netgru - Beer MainPage'
    }) : compose;

const store = createStore(CombinedReducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        document.getElementById('root'),
    );
};

sagaMiddleware.run(RootSaga);

render(Root);

if (module.hot) {
    module.hot.accept('./config/Root', () => {
        const newApp = require('./config/Root').default;
        render(newApp);
    });
}
