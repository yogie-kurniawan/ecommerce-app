import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import adminStore from "./redux/admin/store";
// import mainStore from "./redux/main/store";
import "./style.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>
);
