import "isomorphic-fetch";
import "babel-polyfill";
import React from "react";
import { hot } from "react-hot-loader";
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";

const Root = ({ Router, location, context }) => (

  <Router location={location} context={context}>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movie/:id" component={MoviePage} />

      </Switch>
    </div>
  </Router>
);

Root.defaultProps = {
  location: null,
  context: null,
};

export default hot(module)(Root);
