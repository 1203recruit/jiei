import React from "react";
import App from "./App";
import ScrollTop from "./components/parts/ScrollTop";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ScrollTop />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
