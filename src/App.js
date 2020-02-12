import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { rgba } from "polished";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Add from "./components/add/Add"

import { Auth } from "./auth/auth";

import "./App.css";

export default function () {
  return (
    <Auth>
      <div className="background">
        <Router>
          <div className="App">
            {/* <Navbar /> */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute path="/add" component={Add} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </div>
    </Auth>
  );
}
