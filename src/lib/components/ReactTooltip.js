import React, { useRef } from "react";
import "./styles/react-tooltip.scss";

const ReactTooltip = ({ displayContent, tooltipContent }) => {
  const tooltipRef = useRef(null);
  let tooltipContainer;

  const paraRef = (el) => {
    tooltipContainer = el;
  };
  const handleMouseOut = () => {
    tooltipRef.current.style.opacity = 0;
  };

  const handleMouseOver = (event) => {
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

  if (!displayContent) return <></>;

  return (
    <div className="react-tooltip-container">
      <p className="text-container">
        <span
          ref={paraRef}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {displayContent}
        </span>
      </p>
      <span className="tooltip-container" ref={tooltipRef}>
        {tooltipContent}
      </span>
    </div>
  );
};

export default ReactTooltip;
