import React, { useState } from "react";
import AdminRoute from "./AdminRoute";
import MainRoute from "./MainRoute";
import Navbar from "components/main/Navbar";
import Cart from "components/main/cart/Cart";
import * as view from "views";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

const AppRouter = () => {
  const [isCartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(!isCartVisible);
  };
  const closeCart = () => {
    setCartVisible(false);
  };

  const location = useLocation();

  const excludeRoutes = ["/signin", "/signup"];

  return (
    <>
      {!excludeRoutes.includes(location.pathname) && (
        <>
          <Navbar toggleCart={toggleCart} />
          <Cart isCartVisible={isCartVisible} closeCart={closeCart} />
        </>
      )}
      <Routes>
        <Route exact path="/" element={<view.Home />} />
        <Route exact path="/products" element={<view.Product />} />
        <Route exact path="/sigin" element={<view.Product />} />
        {/* <AdminRoute
          path="/admin"
          element={<Navigate to="/admin/dashboard" />}
        /> */}
        {/* <AdminRoute path="/admin/dashboard" element={view.admin.Dashboard} /> */}
        {/* <AdminRoute
          path="/admin/products"
          element={view.admin.product.Product}
        />
        <AdminRoute
          path="/admin/products/create"
          element={view.admin.product.CreateProduct}
        />
        <AdminRoute
          path="/admin/prodcts/:id/edit"
          element={view.admin.product.EditProduct}
        /> */}
      </Routes>
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <AppRouter />
  </Router>
);

export default AppWrapper;
