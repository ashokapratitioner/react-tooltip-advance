import React from "react";
import ReactDOM from "react-dom/client";

import ReactTooltip from "./src/ReactTooltip.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ReactTooltip displayText="Hello text" tooltipText="hello tooltip" />
  </React.StrictMode>
);
