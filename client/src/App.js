import React from "react";
import AppRouter from "routers/AppRouter";
import ToastAlert, { showToast } from "components/main/alert";

function App() {
  return (
    <>
      <AppRouter />
      <ToastAlert />
    </>
  );
}
export default App;
