import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App/App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HashRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HashRouter>
  </Provider>
);
