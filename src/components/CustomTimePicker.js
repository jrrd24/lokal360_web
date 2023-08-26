import React from "react";
import { Controller } from "react-hook-form";

import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function CustomTimePicker({ name, control, value, label, width }) {
  return (
    <Controller
      name={name}
      label={label}
      control={control}
      defaultValue={value}
      render={({ field }) => (
        //TODO: Fix Width

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label={label}
            showDateInput={false}
            {...field}
            sx={{ width: width }}
          />
        </LocalizationProvider>
      )}
    />
  );
}

export default CustomTimePicker;
