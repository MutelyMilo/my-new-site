import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import {routesConfig, RouterItem} from "./config";

export const RouteWithSubRoutes = (route: RouterItem) => {
  return (
    <Route
      exact={route.exact}
      path={route.path}
      render={_ => {
        document.title = route.title || "MilkSaga";
        return <route.component {..._} routes={route.routes} />
      }}
    />
  );
};

const mapRoutes = () => (
  <Switch>
    {
      routesConfig.map((item) => (
        <RouteWithSubRoutes key={item.path} {...item}/>
      ))
    }
    <Redirect from={"/"} to={"/home"}/>
  </Switch>
);

export default mapRoutes;