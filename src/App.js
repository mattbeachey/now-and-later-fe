import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grommet } from "grommet";
import { normalizeColor } from "grommet/utils";
import { rgba } from "polished";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Game from "./components/game/Game";

import { Auth } from "./auth/auth";

import "./App.css";

export default function() {
  return (
    <Grommet >
      <Auth>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/games/:gameId" component={Game} />
            </Switch>
          </div>
        </Router>
      </Auth>
    </Grommet>
  );
}
