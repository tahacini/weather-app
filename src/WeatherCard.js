import Current from "./Current.js";
import Hours from "./Hours.js";
import Days from "./Days.js";
import Astro from "./Astro.js";

function WeatherCard({ data, loading }) {
  return (
    <section className="stick section-container">
      {loading ? (
        <div className="card-main">
          <Current current={data.current} location={data.location} />
          <div className="slider-container">
            <Hours
              hours={data.forecast.forecastday[0].hour}
              tomorrow={data.forecast.forecastday[1].hour.slice(0, 19)}
              time={data.location.localtime_epoch}
            />
          </div>
          <div className="card-bottom">
            <div className="card-forecast">
              <Days days={data.forecast.forecastday} />
              <Astro data={data.forecast.forecastday[0].astro} />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}

export default WeatherCard;
