import Navbar from "components/main/Navbar";
import * as view from "views";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

const AppRouter = () => {
  const location = useLocation();

  const excludeRoutes = ["/signin", "/signup"];

  return (
    <>
      {!excludeRoutes.includes(location.pathname) && (
        <>
          <Navbar />
        </>
      )}
      <Routes>
        <Route exact path="/" element={<view.Home />} />
        <Route path="/products" element={<view.Product />} />
        <Route path="/products/:id" element={<view.DetailProduct />} />
        <Route path="/cart" element={<view.Cart />} />
        <Route path="/sigin" element={<view.Product />} />
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
