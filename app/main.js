/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CombinedReducers from './redux/reducers/index';

import Root from './config/Root';

const store = createStore(CombinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({name: 'Netgru - Beer App'}));

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

render(Root);

if (module.hot) {
    module.hot.accept('./config/Root', () => {
        const newApp = require('./config/Root').default;
        render(newApp);
    });
}
