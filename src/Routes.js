import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import SingUp from "./components/core/SingUp.jsx";
import LogIn from "./components/core/logIn.jsx";
import ForgetPassword from "./components/core/forgetPassword.jsx";
import ResetPassword from "./components/core/resetPassword.jsx";
import PrivateRoute from "./components/privateRoute.jsx";
import DashBoard from "./components/dashBoard.jsx";
import history from "./History";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashBoard/Notes" component={SingUp} />
          </Route>
          <Route exact path="/singUp" component={SingUp} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/forgetPassword" component={ForgetPassword} />
          <Route exact path="/resetpassword/*" component={ResetPassword} />
          <PrivateRoute
            path="/dashBoard"
            redirectPath="/login"
            component={DashBoard}
            condition={
              localStorage.getItem("id") && localStorage.getItem("id").length
            }
          />
        </Switch>
      </Router>
    );
  }
}
