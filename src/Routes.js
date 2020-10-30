import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import SingUp from "./components/core/SingUp.jsx";
import LogIn from "./components/core/logIn.jsx";
import history from "./History";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={SingUp} />
          <Route exact path="/logIn" component={LogIn} />
        </Switch>
      </Router>
    );
  }
}
