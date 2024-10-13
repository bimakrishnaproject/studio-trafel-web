import React from "react";

const TransferIcon = ({
  size = 23, // Default size
  color = "#414141",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} // Use size for width
      height={(size * 22) / 23} // Adjust height proportionally
      viewBox="0 0 23 22"
      fill="none"
    >
      <path
        d="M18.0371 8.12836C18.0371 7.24827 17.3259 6.53227 16.4518 6.53227H15.9233V4.97165C15.9233 4.07202 15.1964 3.34009 14.3028 3.34009H3.73424C2.8407 3.34009 2.11372 4.07202 2.11372 4.97165V6.53227H1.58529C0.711161 6.53227 0 7.24827 0 8.12836V10.7984H2.11372V19.0073H2.81829V19.9039C2.81829 20.784 3.52945 21.5 4.40358 21.5H5.11802C5.99214 21.5 6.70331 20.784 6.70331 19.9039V19.0073H11.3338V19.9039C11.3338 20.784 12.045 21.5 12.9191 21.5H13.6335C14.5076 21.5 15.2188 20.784 15.2188 19.9039V19.0073H15.9233V10.7984H18.0371V8.12836ZM3.73424 4.40415H14.3028C14.6136 4.40415 14.8665 4.65874 14.8665 4.97165V5.46821H3.17058V4.97165C3.17058 4.65874 3.42345 4.40415 3.73424 4.40415ZM1.05686 9.73438V8.12836C1.05686 7.83499 1.29391 7.59633 1.58529 7.59633H2.11372V9.73438H1.05686ZM14.8665 16.8792V17.9432H11.505V15.8151H6.53206V17.9432H3.17058V16.8792H5.29906V15.8151H3.17058V13.7755C5.11245 14.064 7.06546 14.2088 9.01853 14.2088C10.9716 14.2088 12.9246 14.064 14.8665 13.7755V15.8151H12.738V16.8792H14.8665ZM10.4481 17.9432H7.58892V16.8792H10.4481V17.9432ZM5.64645 19.9039C5.64645 20.1973 5.40939 20.436 5.11802 20.436H4.40358C4.1122 20.436 3.87515 20.1973 3.87515 19.9039V19.0073H5.64645V19.9039ZM14.1619 19.9039C14.1619 20.1973 13.9249 20.436 13.6335 20.436H12.9191C12.6277 20.436 12.3907 20.1973 12.3907 19.9039V19.0073H14.1619V19.9039ZM14.8665 12.6999C10.9836 13.2927 7.05351 13.2927 3.17058 12.6999V10.7984V6.53227H14.8665V10.7984V12.6999ZM16.9802 9.73438H15.9233V7.59633H16.4518C16.7432 7.59633 16.9802 7.83499 16.9802 8.12836V9.73438Z"
        fill={color}
      ></path>
      <circle
        cx="14.8548"
        cy="7.92703"
        r="6.92703"
        fill="white"
        stroke={color}
      ></circle>
      <path
        d="M16.8179 8.4799H11.6725C11.3789 8.4799 11.1413 8.23933 11.1413 7.94268C11.1413 7.64603 11.3789 7.40547 11.6725 7.40547H16.8067L15.1804 5.64851C14.9796 5.43185 14.9905 5.0919 15.2047 4.8891C15.4189 4.68609 15.7556 4.69737 15.9553 4.91403L18.3981 7.55266C18.4561 7.60757 18.501 7.67429 18.5301 7.75068C18.5438 7.78555 18.5455 7.82251 18.5517 7.85904C18.5562 7.8874 18.5684 7.91303 18.5684 7.94263C18.5684 7.94376 18.5677 7.94472 18.5677 7.94585C18.5684 8.07876 18.5211 8.21177 18.4247 8.31588L15.9552 10.9833C15.851 11.0961 15.7094 11.1533 15.5678 11.1533C15.4376 11.1533 15.3074 11.1053 15.2047 11.0082C14.9905 10.8055 14.9796 10.4655 15.1803 10.2488L16.8179 8.4799Z"
        fill={color}
      ></path>
    </svg>
  );
};

export default TransferIcon;
