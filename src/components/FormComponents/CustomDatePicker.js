import React from "react";
import { Controller } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { TextField } from "@mui/material";

const CustomDatePicker = ({ name, control, label, width, rules }) => {
  const [error, setError] = React.useState(null);
  const today = dayjs();
  const todayFormat = dayjs().format("MM/DD/YYYY");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        defaultValue={today}
        rules={rules}
        render={({ field, fieldState }) => (
          <DatePicker
            value={field.value}
            label={label}
            onChange={(date) => field.onChange(date)}
            sx={{ width: width }}
            minDate={today}
            onError={(newError) => setError(newError)}
            slotProps={{
              textField: {
                error: !!fieldState.error || error,
                helperText: fieldState.error
                  ? fieldState.error.message
                  : error
                  ? `Invalid Date, Date Must be ${todayFormat} onwards`
                  : "",
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
