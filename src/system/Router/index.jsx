import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../../components/Home/HomePage";
import Cities from "../../components/Cities/CitiesPage";
import News from "../../components/News/NewsPage";
import Page404 from "../../components/Page404";

/**
 * @name Router
 * @description Building routing system
 */

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cities" component={Cities} />
      <Route exact path="/news" component={News} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>
);

export default Router;
