import city from "./img/city.png";

function Current({ current, location }) {
  return (
    <div className="card-upper relative white">
      <div>
        <div className="card-name relative">
          <div className="fs-300 center-text">
            {location.name.toUpperCase()} <span className="name-line"></span>
          </div>
        </div>
      </div>
      <div className="city-img none-mobil">
        <img src={city} alt="City Img" />
      </div>
      <div>
        <div className="grid card-current">
          <div className="fs-900 relative">
            {current.temp_c} <span className="degree"></span>
          </div>
          <div className="fs-200">{current.condition.text}</div>
          <div className="current-weather">
            <img src={current.condition.icon} alt="Weather Icon" />
          </div>
        </div>
        <div className="flex current-info fs-100">
          <div>
            <div>Wind</div>
            <div>{current.wind_kph} KM/H</div>
          </div>
          <div>
            <div>UV</div>
            <div>{current.uv}</div>
          </div>
          <div>
            <div>Humidity</div>
            <div>{current.humidity}%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Current;
