import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../utils/reducer';
import Home from '../../pages/Home'
import Cities from '../../pages/Cities';
import News from '../../pages/News';
import _404 from '../../pages/_404';
import { syncStorageAndReducer } from '../../utils/globalStorage';

const Router = () => {
    syncStorageAndReducer();
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/cities' component={Cities} />
                    <Route exact path='/news' component={News} />
                    <Route component={_404} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default Router;