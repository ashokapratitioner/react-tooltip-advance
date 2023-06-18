import React, { useRef } from "react";
import "./styles/react-tooltip.scss";

const DISPLAY_CONTENT = "displayContent";
const TOOLTIP_CONTENT = "tooltipContent";

const ReactTooltip = (props) => {
  const { displayContent, tooltipContent, render } = props;

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

  if (!displayContent && !render) return <></>;

  return (
    <div className="react-tooltip-container">
      <p className="text-container">
        <span
          ref={paraRef}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {!displayContent ? render(DISPLAY_CONTENT) : displayContent}
        </span>
      </p>
      <span className="tooltip-container" ref={tooltipRef}>
        {!tooltipContent ? render(TOOLTIP_CONTENT) : tooltipContent}
      </span>
    </div>
  );
};

export default ReactTooltip;
