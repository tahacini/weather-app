function Astro({ data }) {
  return (
    <div className="fs-50 grid astro-container">
      <div className="flex astro-info">
        <div>Sunrise: {data.sunrise}</div>
        <div>Sunset: {data.sunset}</div>
      </div>
      <div className="flex astro-info">
        <div>Moonrise:{data.moonrise}</div>
        <div>Moonset:{data.moonset}</div>
      </div>
      <div className="center-text">
        Moon Phase: {data.moon_phase} <br /> Moon Illumination:
        {data.moon_illumination}
      </div>
    </div>
  );
}

export default Astro;
