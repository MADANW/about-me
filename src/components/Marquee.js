import React, { useCallback } from 'react';
import './Marquee.css';

/**
 * Utility function to combine class names
 */
const cn = (...args) => args.filter(Boolean).join(' ');

/**
 * Marquee component for scrolling content
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS class name
 * @param {boolean} [props.reverse=false] - Whether to reverse the animation direction
 * @param {boolean} [props.pauseOnHover=false] - Whether to pause the animation on hover
 * @param {React.ReactNode} props.children - Content to display in the marquee
 * @param {boolean} [props.vertical=false] - Whether to animate vertically
 * @param {number} [props.repeat=2] - Number of times to repeat the content
 */
const Marquee = ({
  className = '',
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 2,
  ...props
}) => {
  // Function to render content multiple times
  const renderContent = useCallback(() => {
    const content = [];
    for (let i = 0; i < repeat; i++) {
      content.push(
        <div
          key={i}
          className={cn(
            "marquee-content-item",
            {
              "marquee-reverse": reverse,
              "marquee-pause-on-hover": pauseOnHover,
              "marquee-animate-vertical": vertical,
            }
          )}
        >
          {children}
        </div>
      );
    }
    return content;
  }, [children, repeat, reverse, pauseOnHover, vertical]);

  return (
    <div
      {...props}
      className={cn(
        "marquee-container",
        className,
        vertical ? "marquee-vertical" : ""
      )}
    >
      <div
        className={cn(
          "marquee-content",
          reverse ? "marquee-reverse" : "",
          pauseOnHover ? "marquee-pause-on-hover" : "",
          vertical ? "marquee-animate-vertical" : ""
        )}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default Marquee; 