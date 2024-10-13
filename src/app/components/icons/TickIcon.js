import React from "react";

const TickIcon = ({ size = 48, color = "#a7282e" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      viewBox="0 0 48 48"
      style={{ fill: color }} // Gunakan color untuk mengisi warna
      width={size} // Gunakan size untuk lebar
      height={size} // Gunakan size untuk tinggi
    >
      <path d="M42.4,10.54a3.17,3.17,0,0,0-4.49,0L17.72,30.73l-9-9a3.17,3.17,0,0,0-4.49,4.48L15.47,37.46a3.17,3.17,0,0,0,4.49,0L42.4,15A3.19,3.19,0,0,0,42.4,10.54Z"></path>
    </svg>
  );
};

export default TickIcon;
