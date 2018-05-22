import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../src/header/header';
import './App.css';

const routes = [
  {
    path: "/header",
    component: Header
  },
  // {
  //   path: "/tacos",
  //   component: Tacos,
  //   routes: [
  //     {
  //       path: "/tacos/bus",
  //       component: Bus
  //     },
  //     {
  //       path: "/tacos/cart",
  //       component: Cart
  //     }
  //   ]
  // }
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
  <Header></Header>
  // <Router>
  //   <div>
  //     <ul>
  //       <li>
  //         <Link to="/header">Aboutyy</Link>
  //       </li>
  //     </ul>

  //     {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
  //   </div>
  // </Router>
);

export default RouteConfigExample;