// src/routes/AdminRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ component: Component, ...rest }) => {
  const { isAuth, role } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth && role === "ADMIN" ? (
          <Component {...props} />
        ) : (
          <Navigate to="/admin/login" />
        )
      }
    />
  );
};

export default AdminRoute;
