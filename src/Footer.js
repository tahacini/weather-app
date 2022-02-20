import logo from "./img/logo.png";

function Footer() {
  return (
    <footer className="footer-container flex fs-100 white">
      <div className="footer-text">
        <div>Designed & Built by Taha Cini </div>
        <div className="logo-small">
          <a
            href="https://github.com/tahacini"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} alt="My Logo" />
          </a>
        </div>
      </div>
      <div className="api-icon">
        <a href="https://www.weatherapi.com/" title="Weather API">
          <img
            src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
            alt="Weather data by WeatherAPI.com"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
