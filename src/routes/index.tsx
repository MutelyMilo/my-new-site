import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Index, RouterItem} from "./config";

export const RouteWithSubRoutes = (route: RouterItem) => {
  return (
    <Route
      exact={route.exact}
      path={route.path}
      render={_ => {
        document.title = route.title || "";
        return <route.component {..._} routes={route.routes} />
      }}
    />
  );
};

export default () => (
  <Switch>
    {
      Index.map((item, index) => (
        <RouteWithSubRoutes key={index} {...item}/>
      ))
    }
    <Redirect from={"/"} to={"/course-management/online-course"}/>
  </Switch>
);