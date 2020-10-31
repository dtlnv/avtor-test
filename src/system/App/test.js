import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../utils/reducer';
import { BrowserRouter, Switch } from 'react-router-dom';

/**
 * @name TestAppWrapper
 * @description Building wrapper with redux and router providers
 */

const TestAppWrapper = ({ children }) => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                {children}
            </Switch>
        </BrowserRouter>
    </Provider>
);

export default TestAppWrapper;