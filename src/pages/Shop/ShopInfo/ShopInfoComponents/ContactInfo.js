import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import DisplayInfo from "../../../../components/TextField/DisplayInfo";
import { Language, Phone } from "@mui/icons-material";

function ContactInfo() {
  return (
    <Stack spacing={3}>
      {/*Section Name */}
      <Stack
        direction={"row"}
        sx={{ alignItems: "baseline", justifyContent: "space-between" }}
      >
        <Typography variant="sectionTitleSmall">Contact Information</Typography>
      </Stack>

      {/*Phone Number and Shop Website */}
      <Stack direction={"row"} spacing={3}>
        {/*Phone Number*/}

        <DisplayInfo
          name="phoneNumber"
          label="Phone Number"
          defaultValue={"0966 123 4567"}
          width="48%"
          component={Phone}
        />

        {/*Shop Website */}
        <DisplayInfo
          name="shopWebsite"
          label="Shop Website"
          defaultValue={"facebook.com/bambooLand_2023"}
          width="48%"
          component={Language}
        />
      </Stack>
    </Stack>
  );
}

export default ContactInfo;
