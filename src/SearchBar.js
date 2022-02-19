import { useState, useEffect, useRef } from "react";
import { searchData } from "./Api/Api.js";

function SearchBar({ setCity }) {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const resultsRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query) {
        searchData(setData, setLoading, query);
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [query]);

  const handleQuery = (element) => {
    setCity(element);
    setQuery("");
    setLoading(false);
    setData([]);
  };

  // Close results when clicked outside

  useEffect(() => {
    window.addEventListener("click", onClickOutSide);

    return () => {
      window.removeEventListener("click", onClickOutSide);
    };
  }, []);

  function onClickOutSide(e) {
    if (document.getElementById("search-box").contains(e.target)) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }

  // Navigate through arrow keys

  useEffect(() => {
    const inputIsFocused = document.activeElement === inputRef.current;
    if (inputIsFocused && data.length > 0 && query.length > 0) {
      document.addEventListener("keydown", onKeyDown);
    } else {
      document.removeEventListener("keydown", onKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [loading, query]); // eslint-disable-line react-hooks/exhaustive-deps

  function onKeyDown(event) {
    const isUp = event.key === "ArrowUp";
    const isDown = event.key === "ArrowDown";

    const inputIsFocused = document.activeElement === inputRef.current;
    const resultsItems = Array.from(resultsRef.current.children);
    const activeResultIndex = resultsItems.findIndex((child) => {
      return child === document.activeElement;
    });

    if (isUp) {
      if (inputIsFocused) {
        resultsItems[resultsItems.length - 1].focus();
      } else if (resultsItems[activeResultIndex - 1]) {
        resultsItems[activeResultIndex - 1].focus();
      } else {
        inputRef.current.focus();
      }
    }

    if (isDown) {
      if (inputIsFocused) {
        resultsItems[0].focus();
      } else if (resultsItems[activeResultIndex + 1]) {
        resultsItems[activeResultIndex + 1].focus();
      } else {
        inputRef.current.focus();
      }
    }
  }

  // Query on focused item with enter

  const handleEnter = (event, item) => {
    if (event.keyCode === 13) {
      handleQuery(item);
    }
  };

  return (
    <div className="search-container relative">
      <div id="search-box" className="relative">
        <i className="fas fa-search absolute fa-lg"></i>
        <input
          type={"text"}
          placeholder="Search City"
          ref={inputRef}
          className={
            data.length > 0 && query && loading
              ? "search-bar-active"
              : "search-bar"
          }
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      {loading && query ? (
        <div className={data.length > 0 ? "result-container" : ""}>
          <ul ref={resultsRef}>
            {data.map((item, index) => (
              <li
                tabIndex="-1"
                key={index}
                onClick={() => handleQuery(item.url)}
                onKeyUp={(e) => handleEnter(e, item.url)}
              >
                {item.name}, {item.region}, {item.country}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default SearchBar;
