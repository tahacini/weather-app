export const fetchData = async (setState, setLoading, query) => {
  setLoading(false);
  const datas = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=41f8b985eb824356a1592455221502&q=${query}&days=3`
  );
  const data = await datas.json();
  setState(data);
  setLoading(true);
};

export const searchData = async (setState, setLoading, query) => {
  setLoading(false);
  const datas = await fetch(
    `https://api.weatherapi.com/v1/search.json?key=41f8b985eb824356a1592455221502&q=${query}`
  );
  const data = await datas.json();
  setState(data);
  setLoading(true);
};
