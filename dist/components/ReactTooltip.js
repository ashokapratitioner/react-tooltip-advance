import React, { useRef } from "react";
import "./styles/react-tooltip.scss";
const ReactTooltip = ({
  displayText,
  tooltipText
}) => {
  const tooltipRef = useRef(null);
  let tooltipContainer;
  const paraRef = el => {
    tooltipContainer = el;
  };
  const handleMouseOver = event => {
    let x = event.clientX,
      y = event.clientY;
    tooltipRef.current.style.top = y + 10 + "px";
    tooltipRef.current.style.left = x + 10 + "px";
    tooltipRef.current.style.opacity = 1;
  };
  if (!displayText) return /*#__PURE__*/React.createElement(React.Fragment, null);
  return /*#__PURE__*/React.createElement("div", {
    className: "react-tooltip-container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-container",
    ref: paraRef,
    onMouseOver: handleMouseOver
  }, displayText), /*#__PURE__*/React.createElement("span", {
    className: "tooltip-container",
    ref: tooltipRef
  }, tooltipText));
};
export default ReactTooltip;