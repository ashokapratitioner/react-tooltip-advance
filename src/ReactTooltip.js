import React, { useRef } from "react";
import "./react-tooltip.scss";

const ReactTooltip = ({ displayText, tooltipText }) => {
  const tooltipRef = useRef(null);
  let offset;
  // const paraRef = useRef(null);

  const paraRef = (el) => {
    offset = el && el.getBoundingClientRect();
  };

  const handleMouseOver = () => {
    console.log(isInViewport());
  };

  const isInViewport = (offset = 0) => {
    if (!tooltipRef.current) return false;
    const top = tooltipRef.current.getBoundingClientRect().top;
    return top + offset >= 0 && top - offset <= window.innerHeight;
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
