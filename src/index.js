import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app.js";
import Api from "./service/api";

const api = new Api();

ReactDOM.render(
  <React.StrictMode>
    <App api={api} />
  </React.StrictMode>,
  document.getElementById("root")
);
