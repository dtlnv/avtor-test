import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home'
import Cities from '../../pages/Cities';
import News from '../../pages/News';
import _404 from '../../pages/_404';

/**
 * @name Router
 * @description Building routing system 
 */

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cities' component={Cities} />
            <Route exact path='/news' component={News} />
            <Route component={_404} />
        </Switch>
    </BrowserRouter>
);

export default Router;