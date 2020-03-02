import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../utils/reducer';
import { syncApp } from '../../utils/globalStorage';
import Router from '../_Router';

/**
 * @name App
 * @description Building application with redux provider
 */

const App = () => {

    syncApp();

    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
}

export default App;