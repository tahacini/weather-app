import React from "react";

function HourBox({ time, temp, image }) {
  let hour = time.slice(11, 13);

  return (
    <div className="item">
      <div>{temp}</div>
      <div className="small-icon">
        <img src={image} alt="Weather Icon" />
      </div>
      <div>{hour}:00</div>
    </div>
  );
}

export default HourBox;
