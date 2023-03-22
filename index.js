import React from "react";
import ReactDOM from "react-dom/client";
import ReactTooltip from "./src/lib/components/ReactTooltip.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ReactTooltip displayText="hello" tooltipText="hello" />
  </React.StrictMode>
);
