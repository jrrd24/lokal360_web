import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { TextField } from "@mui/material";

const CustomDatePicker = ({
  name,
  control,
  label,
  width,
  rules,
  value: propValue,
  startDateValue, // Start date value passed as a prop
}) => {
  const [error, setError] = React.useState(null);
  const today = dayjs();
  const todayFormat = today.format("MM/DD/YYYY");

  const [fieldValue, setFieldValue] = useState(null);
  useEffect(() => {
    setFieldValue(dayjs(propValue));
  }, [propValue]);

  //DATE VALIDATION
  useEffect(() => {
    const isValidDate = fieldValue && fieldValue.isValid();
    if (!isValidDate) {
      setError("Invalid Date");
    } else if (fieldValue && fieldValue.isBefore(today, "day")) {
      setError(`Date must be on or after ${todayFormat}`);
    } else if (
      startDateValue &&
      fieldValue &&
      fieldValue.isBefore(startDateValue)
    ) {
      setError("End Date must be after Start Date");
    } else {
      setError(null);
    }
  }, [startDateValue, fieldValue]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control}
        defaultValue={dayjs(propValue) || today}
        rules={rules}
        render={({ field, fieldState }) => {
          const handleError = (newError) => {
            setError(newError);
          };

          return (
            <DatePicker
              value={fieldValue}
              label={label}
              onChange={(date) => {
                setFieldValue(date);
                field.onChange(date);
              }}
              sx={{ width: width }}
              minDate={today}
              onError={handleError}
              slotProps={{
                textField: {
                  error: !!fieldState.error || error,
                  helperText: fieldState.error
                    ? fieldState.error.message
                    : error
                    ? error
                    : "",
                },
              }}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
};
export default CustomDatePicker;
