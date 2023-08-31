import React from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { useDateRange } from "../../contexts/DateRangeContext"; // Update with the correct path

//TODO: Get number of days selected then get previous date range equivalent to the number of days selected
//TODO: Also save this to the DateRangeContext
function DateRangePicker() {
  const { dateRange, setDateRange } = useDateRange(); // Access the context values

  const handleDateChange = (newDateRange) => {
    setDateRange(newDateRange.selection); // Update the context with the new date range
  };

  return (
    <div>
      <DateRange
        editableDateInputs={true}
        onChange={handleDateChange}
        moveRangeOnFirstSelection={false}
        ranges={[dateRange]} // Pass the dateRange directly, as it's an object
      />
    </div>
  );
}

export default DateRangePicker;
