import React from "react";
import { Stack, Typography } from "@mui/material";
import CustomInput from "../../../../../components/FormComponents/CustomInput";
import { CalendarMonth } from "@mui/icons-material";
import { CustomTimePicker } from "../../../../../components/FormComponents/CustomTimePicker";
import dayjs from "dayjs";
import CheckBoxGroup from "../../../../../components/FormComponents/CheckBoxGroup";

function OperatingHoursD({
  control,
  sx,
  mon,
  tues,
  wed,
  thurs,
  fri,
  sat,
  sun,
  timeOpen,
  timeClose,
  setValue,
}) {
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
        <CheckBoxGroup
          name="daysOpen"
          control={control}
          label="Days Open"
          choices={{
            Monday: mon,
            Tuesday: tues,
            Wednesday: wed,
            Thursday: thurs,
            Friday: fri,
            Saturday: sat,
            Sunday: sun,
          }}
          width="100%"
          setValue={setValue}
        />

        {/*Open and Closing Time */}
        <Stack direction={"row"} spacing={3}>
          {/*Opening Time*/}
          <CustomTimePicker
            control={control}
            name="openingTime"
            label="Opening Time"
            value={dayjs(timeOpen)}
            width="48%"
          />
          
          {/*Closing Time*/}
          <CustomTimePicker
            control={control}
            name="closingTime"
            label="Closing Time"
            value={dayjs(timeClose)}
            width="48%"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default OperatingHoursD;
