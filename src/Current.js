import React from "react";

function Current({ current, location }) {
  return (
    <div className="grid card-current">
      <div>
        <div>
          <div>{current.temp_c}</div>
          <div>
            <div>{current.condition.text}</div>
            <div>
              <img src={current.condition.icon} alt="Weather Icon" />
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <div>HUMIDITY</div>
            <div>{current.humidity}%</div>
          </div>
          <div>
            <div>WIND {current.wind_dir}</div>
            <div>{current.wind_kph} KM/H</div>
          </div>
          <div>
            <div>UV</div>
            <div>{current.uv}</div>
          </div>
        </div>
      </div>
      <div>
        <div>{location.name}</div>
        <div>{location.country}</div>
      </div>
    </div>
  );
}

export default Current;
