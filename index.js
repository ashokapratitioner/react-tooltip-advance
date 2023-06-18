import React from "react";
import ReactDOM from "react-dom/client";
import ReactTooltip from "./src/lib/components/ReactTooltip.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const ImageContent = (
  <img
    src="https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.jpg?s=612x612&w=0&k=20&c=6pxwL3JxNV2B_NZSLMZLhrSLqAbyCPlGuSZYKImpjKQ="
    width="200"
    role="presentation"
  />
);

const renderContent = (type) => {
  // your display content with html support
  if (type === "displayContent") {
    return ImageContent;
  } else {
    // your tooltip content with html support
    return (
      <>
        {ImageContent}
        <br />
        Hello World!
      </>
    );
  }
};

root.render(
  <React.StrictMode>
    <ReactTooltip render={renderContent} />
  </React.StrictMode>
);
