import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import Home from '../../pages/Home'
import Cities from "../../app/Cities/cities_page";
import News from "../../app/News/list_page";
import Page404 from "../../app/Page404";
// import _404 from '../../pages/_404';

/**
 * @name Router
 * @description Building routing system
 */

const Router = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route exact path='/' component={Home} /> */}
      <Route exact path="/cities" component={Cities} />
      <Route exact path="/news" component={News} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>
);

export default Router;
