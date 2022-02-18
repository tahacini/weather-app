import { useEffect, useState } from "react";
import { fetchData } from "./Api/Api.js";
import Footer from "./Footer";
import WeatherCard from "./WeatherCard";
import SearchBar from "./SearchBar";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("Istanbul");

  useEffect(() => {
    fetchData(setData, setLoading, city);
  }, [city]);

  return (
    <>
      <SearchBar setCity={setCity} />
      <WeatherCard data={data} loading={loading} />
      <Footer />
    </>
  );
}

export default App;
