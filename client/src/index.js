import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// import { legacy_createStore as createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import reducers from "./reducers";
import App from "./App";
import "./index.css";

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";
const theme = createTheme({});
const store = configureStore(
  { reducer: reducers },
  compose(applyMiddleware(thunk))
);

// const store = createStore(reducers, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
