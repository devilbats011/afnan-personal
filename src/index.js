import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "my-firebase";

ReactDOM.render(
  <React.StrictMode>
      <App firebase={firebase} />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
