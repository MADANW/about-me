import React from 'react';
import './RetroGrid.css';

// Simple utility function to combine class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const RetroGrid = ({
  className,
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "rgba(0, 0, 0, 0.6)",
  darkLineColor = "rgba(255, 255, 255, 0.6)",
  ...props
}) => {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor,
  };

  return (
    <div
      className={cn(
        "retro-grid",
        className
      )}
      style={gridStyles}
      {...props}
    >
      <div className="grid-perspective">
        <div className="grid-lines"></div>
      </div>
      <div className="grid-fade"></div>
    </div>
  );
};

export default RetroGrid; 