import React from "react";
import { Stack, Typography } from "@mui/material";
import CustomInput from "../../../../../components/TextField/CustomInput";
import { CalendarMonth } from "@mui/icons-material";
import CustomTimePicker from "../../../../../components/CustomTimePicker";
import dayjs from "dayjs";
import DaysOpenSelector from "../../../../../components/DaysOpenSelectior";

function OperatingHoursD({ control, sx }) {
  return (
    <Stack spacing={3} sx={{ sx }}>
      {/*Section Name */}
      <Stack
        direction={"row"}
        sx={{ alignItems: "baseline", justifyContent: "space-between" }}
      >
        <Typography variant="sectionTitleSmall">Operating Hours</Typography>
      </Stack>

      {/*TextBoxes */}
      <Stack spacing={3}>
        {/*Days Opem */}
        <DaysOpenSelector
          name="daysOpen"
          control={control}
          label="Days Open"
          days={{
            Monday: false,
            Tuesday: true,
            Wednesday: false,
            Thursday: true,
            Friday: true,
            Saturday: false,
            Sunday: false,
          }}
          width="100%"
        />

        {/*Open and Closing Time */}
        <Stack direction={"row"} spacing={3}>
          {/*Opening Time*/}
          <CustomTimePicker
            control={control}
            name="openingTime"
            label="Opening Time"
            value={dayjs("2023-08-25T07:00")}
            width="48%"
          />

          {/*Closing Time*/}
          <CustomTimePicker
            control={control}
            name="closingTime"
            label="Closing Time"
            value={dayjs("2023-08-25T20:00")}
            width="48%"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default OperatingHoursD;
