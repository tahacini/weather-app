import { useEffect } from "react";

function DayBox({ day, data }) {
  const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  const epoch = new Date(day * 1000);
  const date = epoch.getUTCDate();
  const month = epoch.getUTCMonth();

  return (
    <div>
      <div className="fs-50">
        {date} {months[month]}
      </div>
      <div className="forecast-icon">
        <img src={data.condition.icon} alt="Weather Icon" />
      </div>
      <div className="fs-50 center-text">
        {data.maxtemp_c} / {data.mintemp_c}
      </div>
    </div>
  );
}

export default DayBox;
