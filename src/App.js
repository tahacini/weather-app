import { useEffect, useState } from "react";
import { fetchData } from "./Api/Api.js";
import Footer from "./Footer";
import WeatherCard from "./WeatherCard";
import SearchBar from "./SearchBar";
import Background from "./Background.js";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("Ankara");

  useEffect(() => {
    fetchData(setData, setLoading, city);
  }, [city]);

  return (
    <>
      <Background />
      <SearchBar setCity={setCity} />
      <WeatherCard data={data} loading={loading} />
      <Footer />
    </>
  );
}

export default App;
