import { createRoot } from "react-dom/client";

import { App } from "./component/App";
import "./global.scss";

const container = document.body;
createRoot(container).render(<App />);
