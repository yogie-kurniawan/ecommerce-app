import React from "react";
import { Route, Navigate } from "react-router";

const MainRoute = ({ component: Component, ...rest }) => {
  const isAuth = true;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default MainRoute;
