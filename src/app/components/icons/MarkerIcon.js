import React from "react";

const MarkerIcon = ({ size = 48, color = "#4b6b35" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      viewBox="0 0 48 48"
      style={{ fill: color }} // Use color for fill
      width={size} // Use size for width
      height={size} // Use size for height
    >
      <path d="M24,4A14.42,14.42,0,0,0,12.27,26.82L22.9,43.4a1.31,1.31,0,0,0,2.2,0L35.77,26.76A14.42,14.42,0,0,0,24,4Zm0,21a6.56,6.56,0,1,1,6.56-6.55A6.56,6.56,0,0,1,24,25Z"></path>
    </svg>
  );
};

export default MarkerIcon;
