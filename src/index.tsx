import React from "react";
import ReactDOM from "react-dom";

import "./global.scss";
import { App } from "./component/App";

const container = document.body;
ReactDOM.render(<App />, container);

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
} else {
    console.log("serviceWorker not support");
}
