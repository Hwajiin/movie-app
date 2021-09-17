import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app.js";
import Api from "./service/api";

const api = new Api();
// document.cookie = "safeCookie1=foo; SameSite=None; Secure";
// document.cookie = "safeCookie2=foo";
// document.cookie = "safeCookie=bar; SameSite=None; Secure";
// document.cookie = "crossCookie=bar; SameSite=None; Secure";

ReactDOM.render(
  <React.StrictMode>
    <App api={api} />
  </React.StrictMode>,
  document.getElementById("root")
);
