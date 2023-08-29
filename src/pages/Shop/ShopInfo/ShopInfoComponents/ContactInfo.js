import React from "react";
import { Stack, Typography } from "@mui/material";
import DisplayInfo from "../../../../components/TextField/DisplayInfo";
import { Language, Phone } from "@mui/icons-material";
import { ReadOnlyPhoneNumberPicker } from "../../../../components/CustomPhoneNumberPicker";

function ContactInfo({ phoneNum, website }) {
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

        <ReadOnlyPhoneNumberPicker
          label="Phone Number"
          value={phoneNum}
          width="48%"
          sx={{
            "@media (max-width: 600px)": {
              width: "100%",
            },
          }}
          component={Phone}
        />

        {/*Shop Website */}
        <DisplayInfo
          name="shopWebsite"
          label="Shop Website"
          defaultValue={website}
          width="48%"
          component={Language}
          sx={{
            "@media (max-width: 600px)": {
              width: "100%",
            },
          }}
        />
      </Stack>
    </Stack>
  );
}

export default ContactInfo;
