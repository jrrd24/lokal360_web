import React from "react";
import { Stack, Typography } from "@mui/material";
import DisplayInfo from "../../../../components/TextField/DisplayInfo";
import { CalendarMonth, LockClock, PunchClock } from "@mui/icons-material";

function OperatingHours() {
  return (
    <Stack spacing={3}>
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
        <DisplayInfo
          name="daysOpen"
          label="Days Open"
          defaultValue={"Everyday"}
          width="100%"
          component={CalendarMonth}
        />

        {/*Open and Closing Time */}
        <Stack direction={"row"} spacing={3}>
          {/*Opening Time*/}
          <DisplayInfo
            name="openingTime"
            label="Opening Time"
            defaultValue={"7:00 AM"}
            width="48%"
            component={PunchClock}
          />

          {/*Shop Type */}

          <DisplayInfo
            name="closingTime"
            label="Closing Time"
            defaultValue={"5:00 PM"}
            width="48%"
            component={LockClock}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default OperatingHours;
