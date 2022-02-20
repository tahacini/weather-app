import { useState, useEffect } from "react";
import HourBox from "./HourBox";

function Hours({ hours, time, tomorrow }) {
  const [currHours, setcurrHours] = useState([]);

  useEffect(() => {
    getHour();
  }, [time]); // eslint-disable-line react-hooks/exhaustive-deps

  const getHour = () => {
    const epoch = new Date(time * 1000);
    const currTime = epoch.getHours();

    setcurrHours(hours.slice(currTime).concat(tomorrow));
  };

  if (currHours.length > 0) {
    const slider = document.querySelector(".slider-inner");
    let sliderGrabbed = false;

    slider.addEventListener("mousedown", () => {
      sliderGrabbed = true;
      slider.style.cursor = "grabbing";
    });

    slider.addEventListener("mouseup", () => {
      sliderGrabbed = false;
      slider.style.cursor = "grab";
    });

    slider.addEventListener("mouseleave", () => {
      sliderGrabbed = false;
      slider.style.cursor = "grab";
    });

    slider.addEventListener("mousemove", (e) => {
      if (sliderGrabbed) {
        slider.parentElement.scrollLeft -= e.movementX;
      }
    });
  }

  return (
    <div className="slider">
      <div
        className="slider-inner"
        style={{ gridTemplateColumns: `repeat(${currHours.length}, 1fr)` }}
      >
        {currHours.map((item, index) => (
          <HourBox
            key={index}
            time={item.time}
            image={item.condition.icon}
            temp={item.temp_c}
          />
        ))}
      </div>
    </div>
  );
}

export default Hours;
