import DayBox from "./DayBox";

function Days({ days }) {
  return (
    <div className="flex forecast-container">
      {days.map((item, index) => (
        <DayBox key={index} day={item.date_epoch} data={item.day} />
      ))}
    </div>
  );
}

export default Days;
