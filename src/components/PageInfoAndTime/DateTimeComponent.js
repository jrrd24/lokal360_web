import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

const DateTimeComponent = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update the date and time every second (1000 milliseconds)

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  // Function to get the formatted time string
  const getFormattedTime = () => {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = addZero(currentDate.getSeconds());
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12 || 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${hours}:${minutes}:${seconds} ${ampm}`;
  };

  // Function to get the formatted date string
  const getFormattedDate = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const currentDate = currentDateTime;
    const dayOfWeek = days[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const dayOfMonth = currentDate.getDate();
    const year = currentDate.getFullYear();

    return (
      <>
        <Typography variant="subtitle1">
          <Typography variant="h5" component="span" sx={{ fontWeight: "bold" }}>
            {dayOfWeek}
            {", "}
          </Typography>
          {`${month} ${dayOfMonth}, ${year}`}
        </Typography>
      </>
    );
  };

  return (
    <div style={{ textAlign: "right", userSelect: "none" }}>
      {getFormattedDate()}
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {getFormattedTime()}
      </Typography>
    </div>
  );
};

export default DateTimeComponent;
