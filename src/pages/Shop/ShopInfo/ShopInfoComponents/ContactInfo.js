import React from "react";
import { Stack, Typography } from "@mui/material";
import { ReadOnlyCustomInput } from "../../../../components/FormComponents/CustomInput";
import { Language, Phone } from "@mui/icons-material";
import { ReadOnlyPhoneNumberPicker } from "../../../../components/FormComponents/CustomPhoneNumberPicker";

function ContactInfo({ phoneNum, website }) {
  return (
    <Stack spacing={3} width={"100%"}>
      {/*Section Name */}
      <Stack direction={"row"} sx={{ ...classes.main }}>
        <Typography variant="sectionTitleSmall">Contact Information</Typography>
      </Stack>

      {/*Phone Number and Shop Website */}
      <Stack direction={"row"} spacing={3}>
        {/*Phone Number*/}

        <ReadOnlyPhoneNumberPicker
          label="Phone Number"
          value={phoneNum}
          width="48%"
          sx={{ ...classes.max600 }}
          component={Phone}
        />

        {/*Shop Website */}
        <ReadOnlyCustomInput
          name="shopWebsite"
          label="Shop Website"
          defaultValue={website}
          width="48%"
          component={Language}
          sx={{ ...classes.max600 }}
        />
      </Stack>
    </Stack>
  );
}

const classes = {
  main: {
    alignItems: "baseline",
    justifyContent: "space-between",
  },

  max600: {
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
};

export default ContactInfo;
