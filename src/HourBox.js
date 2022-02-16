import React from "react";

function HourBox({ time, temp, image }) {
  let hour = time.slice(11, 13);

  return (
    <div>
      <div>{hour}</div>
      <div>
        <img src={image} alt="Weather Icon" />
      </div>
      <div>{temp}</div>
    </div>
  );
}

export default HourBox;
