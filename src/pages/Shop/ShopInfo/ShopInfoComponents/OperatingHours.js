import React from "react";
import { Stack, Typography } from "@mui/material";
import { ReadOnlyCustomInput } from "../../../../components/FormComponents/CustomInput";
import { CalendarMonth } from "@mui/icons-material";
import dayjs from "dayjs";
import { ReadOnlyTimePicker } from "../../../../components/FormComponents/CustomTimePicker";

function OperatingHours({ days = [], timeOpen, timeClose }) {
  // ? Displays Everyday if every day is true
  // ? Displays All days set to true (For Days Open)
  const openDays = days.filter((day) => day.value);
  let DaysOpen;
  if (openDays.length === 7) {
    DaysOpen = "Everyday";
  } else {
    const openDayNames = openDays.map((day) => day.name);
    DaysOpen = openDayNames.join(", ");
  }

  return (
    <Stack spacing={3} width={"100%"}>
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
        <ReadOnlyCustomInput
          name="daysOpen"
          label="Days Open"
          defaultValue={DaysOpen}
          width="100%"
          component={CalendarMonth}
        />

        {/*Open and Closing Time */}
        <Stack direction={"row"} spacing={3}>
          {/*Opening Time*/}
          {timeOpen && (
            <ReadOnlyTimePicker
              name="openingTime"
              label="Opening Time"
              value={dayjs(timeOpen) || "00:00:00"}
              width="48%"
            />
          )}

          {!timeOpen && (
            <ReadOnlyCustomInput
              name="openingTime"
              label="Opening Time"
              defaultValue={"--"}
              width="48%"
            />
          )}

          {/*Closing Time*/}
          {timeClose && (
            <ReadOnlyTimePicker
              name="closingTime"
              label="Closing Time"
              value={dayjs(timeClose)}
              width="48%"
            />
          )}

          {!timeClose && (
            <ReadOnlyCustomInput
              name="closingTime"
              label="Closing Time"
              defaultValue={"--"}
              width="48%"
            />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default OperatingHours;
