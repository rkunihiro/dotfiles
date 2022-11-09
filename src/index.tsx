import { createRoot } from "react-dom/client";

import "./global.scss";

import { App } from "./component/App";

const container = document.body;
createRoot(container).render(<App />);

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js");
} else {
    console.log("serviceWorker not support");
}
