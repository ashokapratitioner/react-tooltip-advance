import React, { useRef } from "react";
import "./styles/react-tooltip.scss";
const ReactTooltip = ({
  displayContent,
  tooltipContent
}) => {
  const tooltipRef = useRef(null);
  let tooltipContainer;
  const paraRef = el => {
    tooltipContainer = el;
  };
  const handleMouseOut = () => {
    tooltipRef.current.style.opacity = 0;
  };
  const handleMouseOver = event => {
    const isOnDesiredElement = event.currentTarget === tooltipContainer;
    if (!isOnDesiredElement) {
      tooltipRef.current.style.opacity = 0;
      return false;
    }
    let x = event.clientX,
      y = event.clientY;
    tooltipRef.current.style.top = y + 10 + "px";
    tooltipRef.current.style.left = x + 10 + "px";
    tooltipRef.current.style.opacity = 1;
  };
  if (!displayContent) return /*#__PURE__*/React.createElement(React.Fragment, null);
  return /*#__PURE__*/React.createElement("div", {
    className: "react-tooltip-container"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-container"
  }, /*#__PURE__*/React.createElement("span", {
    ref: paraRef,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut
  }, displayContent)), /*#__PURE__*/React.createElement("span", {
    className: "tooltip-container",
    ref: tooltipRef
  }, tooltipContent));
};
export default ReactTooltip;