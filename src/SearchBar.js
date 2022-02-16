import { useState, useEffect } from "react";
import { searchData } from "./Api/Api.js";

function SearchBar({ handleQuery }) {
  const [query, setQuery] = useState("");
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query) {
        searchData(setdata, setLoading, query);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div>
      <input
        type={"text"}
        placeholder="Search City"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {loading ? (
        <div>
          {data.map((item, index) => (
            <div key={index} onClick={() => handleQuery(item.url)}>
              {item.name} / {item.url}
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SearchBar;
