import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Item from '../src/item/item';
import BodyItems from '../src/bodyItems/bodyItems';
import Header from '../src/header/header';
import Home from '../src/home/home';
import './App.css';

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/items/:id",
    component: BodyItems,
  },
  {
    path: "/items",
    component: BodyItems
  }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const RouteConfigExample = () => (
  <Router>
    <div id="page">
      <Header></Header>
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
  </Router>
);

export default RouteConfigExample;