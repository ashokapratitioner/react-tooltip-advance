import React, { useRef } from "react";
import "./styles/react-tooltip.scss";

const ReactTooltip = ({ displayText, tooltipText }) => {
  const tooltipRef = useRef(null);
  let tooltipContainer;

  const paraRef = (el) => {
    tooltipContainer = el;
  };

  const handleMouseOver = (event) => {
    let x = event.clientX,
      y = event.clientY;

    tooltipRef.current.style.top = y + 10 + "px";
    tooltipRef.current.style.left = x + 10 + "px";
    tooltipRef.current.style.opacity = 1;
  };

  if (!displayText) return <></>;

  return (
    <div className="react-tooltip-container">
      <p className="text-container" ref={paraRef} onMouseOver={handleMouseOver}>
        {displayText}
      </p>
      <span className="tooltip-container" ref={tooltipRef}>
        {tooltipText}
      </span>
    </div>
  );
};

export default ReactTooltip;
