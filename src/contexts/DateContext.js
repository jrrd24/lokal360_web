//! Depreciated Context (Replaced bu Date Range Context)
// TODO: Delete this context

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
// It makes the selected date the same accross all pages

// Create a custom hook that returns the DateContext using useContext
export const useDateContext = () => {
  return useContext(DateContext);
};

// DateProvider component that wraps its children with DateContext
export const DateProvider = ({ children }) => {
  const [selectedRange, setSelectedRange] = useState(1);
  const [range, setRange] = useState(<GetDate />);
  const [rangeEnd, setRangeEnd] = useState(null);

  // Function to handle changes in the selected range
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
      setRangeEnd(null);
    }
  };

  // Create an object containing the context values
  const contextValue = {
    selectedRange,
    range,
    rangeEnd,
    handleRangeChange,
  };

  // Provide the context values to its children using DateContext.Provider
  return (
    <DateContext.Provider value={contextValue}>{children}</DateContext.Provider>
  );
};
