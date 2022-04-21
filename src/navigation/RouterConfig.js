import React from "react";
import { Switch, Route } from "react-router-dom";

import { NotFound } from "navigation/NotFound";
import { ROOT, DASHBOARD, PAGE_ONE, AUTH_PAGE } from "navigation/CONSTANTS";

import Home from "pages/Home";
import Dashboard from "pages/Dashboard";
import { PageOne } from "pages/PageOne";
import { Authorized } from "pages/Authorized";

import Login from "./Auth/Login";
import PrivateRoute from "./Auth/PrivateRoute";

export const RouterConfig = () => {
  return (
    <div>
      <Switch>
        {/* List all public routes here */}
        <Route exact path={ROOT} component={Home} />
        <Route exact path={DASHBOARD} component={Dashboard} />
        <Route exact path={PAGE_ONE} component={PageOne} />
        <Route path="/login">
          <Login />
        </Route>

        {/* List all private/auth routes here */}
        <PrivateRoute path={AUTH_PAGE}>
          <Authorized />
        </PrivateRoute>
        {/* Do not hesitate to play around by moving some routes from public to private and vice-versa */}
        {/* <PrivateRoute path={DASHBOARD}>
          <Dashboard />
        </PrivateRoute> */}

        {/* List a generic 404-Not Found route here */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};
