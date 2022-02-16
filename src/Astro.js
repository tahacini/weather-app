function Astro({ data }) {
  return (
    <div>
      <div>
        Sunrise: {data.sunrise}
        Sunset: {data.sunset}
      </div>
      <div>
        Moonrise: {data.moonrise}
        Moonset: {data.moonset}
      </div>
      <div>
        Moon Phase: {data.moon_phase}
        Moon Illumination: {data.moon_illumination}
      </div>
    </div>
  );
}

export default Astro;
