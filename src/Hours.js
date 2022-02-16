import { useState, useEffect } from "react";
import HourBox from "./HourBox";

function Hours({ hours, time, tomorrow }) {
  const [currHours, setcurrHours] = useState([]);

  useEffect(() => {
    getHour();
  }, [time]);

  const getHour = () => {
    const epoch = new Date(time * 1000);
    const currTime = epoch.getUTCHours();

    setcurrHours(hours.slice(currTime).concat(tomorrow));
  };

  return (
    <div className="flex">
      {currHours.map((item, index) => (
        <HourBox
          key={index}
          time={item.time}
          image={item.condition.icon}
          temp={item.temp_c}
        />
      ))}
    </div>
  );
}

export default Hours;
