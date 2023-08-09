import React, { createContext, useContext, useState, useEffect } from "react";
import {
  GetDate,
  GetMonthFirstDay,
  GetMonthLastDay,
  GetWeekFirstDay,
  GetWeekLastDay,
  GetYearFirstDay,
  GetYearLastDay,
} from "../utils/GetDate";

const DateContext = createContext();

// Purpose of this Context:
// Context to Manage and share date-related state
// and functions across components
// eliminating the need for prop drilling
export const useDateContext = () => {
  return useContext(DateContext);
};

export const DateProvider = ({ children }) => {
  const [selectedRange, setSelectedRange] = useState(1);
  const [range, setRange] = useState(<GetDate />);
  const [rangeEnd, setRangeEnd] = useState(null);

  useEffect(() => {
    console.log("Range updated:", range);
  }, [range]);

  const handleRangeChange = (selectedValue) => {
    setSelectedRange(selectedValue);

    if (selectedValue === 1) {
      setRange(<GetDate />);
      setRangeEnd(null);
    } else if (selectedValue === 2) {
      setRange(<GetWeekFirstDay />);
      setRangeEnd(<GetWeekLastDay />);
    } else if (selectedValue === 3) {
      setRange(<GetMonthFirstDay />);
      setRangeEnd(<GetMonthLastDay />);
    } else if (selectedValue === 4) {
      setRange(<GetYearFirstDay />);
      setRangeEnd(<GetYearLastDay />);
    } else {
      setRange(null);
      setRangeEnd(<GetDate />);
    }
  };

  const contextValue = {
    selectedRange,
    range,
    rangeEnd,
    handleRangeChange,
  };

  return (
    <DateContext.Provider value={contextValue}>{children}</DateContext.Provider>
  );
};
