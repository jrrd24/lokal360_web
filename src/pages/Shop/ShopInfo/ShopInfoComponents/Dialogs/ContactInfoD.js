import React from "react";
import { Stack, Typography } from "@mui/material";
import CustomInput from "../../../../../components/TextField/CustomInput";
import { Language } from "@mui/icons-material";
import CustomPhoneNumberPicker from "../../../../../components/CustomPhoneNumberPicker";

function ContactInfoD({ control, sx, trigger }) {
  return (
    <Stack spacing={3} sx={{ sx }}>
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
        <CustomPhoneNumberPicker
          control={control}
          name="phoneNumber"
          label="Phone Number"
          defaultValue={"+639661234567"}
          width="48%"
          trigger={trigger}
          rules={{
            pattern: {
              value: /^(09|\+639|\+63 9)\d{9}$/,
              message: "Invalid Phone Number Format Must Be +63 966 123 4565",
            },
          }}
        />

        {/*Shop Website */}
        <CustomInput
          control={control}
          name="shopWebsite"
          label="Shop Website"
          value={"facebook.com/bambooLand_2023"}
          width="48%"
          component={Language}
        />
      </Stack>
    </Stack>
  );
}

export default ContactInfoD;