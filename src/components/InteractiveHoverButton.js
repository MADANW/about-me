import React from "react";

// Simple utility function to combine class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// Arrow right icon component
const ArrowRight = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

const InteractiveHoverButton = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "interactive-hover-button group relative cursor-pointer overflow-hidden rounded-full border p-2 px-6 text-center font-semibold",
          className
        )}
        {...props}
      >
        <div className="hover-background"></div>
        <div className="button-content">
          <span className="button-text">{children}</span>
        </div>
        <div className="hover-content">
          <span>{children}</span>
          <ArrowRight />
        </div>
      </button>
    );
  }
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export default InteractiveHoverButton; 