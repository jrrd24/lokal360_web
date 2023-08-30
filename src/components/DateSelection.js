import React from "react";
import { Stack, Select, MenuItem } from "@mui/material";
import theme from "../Theme";
import { useDateContext } from "../contexts/DateContext";

function DateSelection({ displayOnly }) {
  const { selectedRange, handleRangeChange } = useDateContext();

  const options = [
    { value: 1, label: "Today" },
    { value: 2, label: "This Week" },
    { value: 3, label: "This Month" },
    { value: 4, label: "This Year" },
    { value: 5, label: "All Time" },
  ];

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    handleRangeChange(selectedValue);
  };

  return (
    <Stack direction={"row"} spacing={2}>
      {/* Combo Box */}
      <Select
        labelId="select--time"
        name="selectTime"
        id="select--time"
        value={selectedRange}
        onChange={handleChange}
        sx={{
          width: "130px",
          maxHeight: 66,
          minHeight: 56,
          backgroundColor: `${theme.palette.background.paper}`,
          display: displayOnly ? "none" : "",
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </Stack>
  );
}

export default DateSelection;
