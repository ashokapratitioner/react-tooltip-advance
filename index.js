import React from "react";
import ReactDOM from "react-dom/client";
import ReactTooltip from "./src/lib/components/ReactTooltip.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const imgContentRFC = (
  <img
    src="https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?s=612x612&w=0&k=20&c=6pxwL3JxNV2B_NZSLMZLhrSLqAbyCPlGuSZYKImpjKQ="
    width={200}
  />
);

root.render(
  <React.StrictMode>
    <ReactTooltip
      displayContent={imgContentRFC}
      tooltipContent={imgContentRFC}
    />
  </React.StrictMode>
);
