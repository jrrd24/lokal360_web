import React from "react";
import { Stack, Typography, Alert } from "@mui/material";
import { CustomInput } from "../../../../../components/FormComponents/CustomInput";
import CheckBoxGroup from "../../../../../components/FormComponents/CheckBoxGroup";

function DEmployeeInfo({ sx, control, register, setValue }) {
  return (
    <Stack spacing={3} sx={{ sx }}>
      {/*Section Name */}
      <Stack sx={{ alignItems: "baseline", justifyContent: "space-between" }}>
        <Typography variant="sectionTitleSmall">Employee Details</Typography>
        <Alert severity="info" sx={{ mt: 1, width: "100%" }}>
          An Employee must have a <b>Registered User Account</b>
        </Alert>
      </Stack>

      {/*TextBoxes */}
      <Stack spacing={3}>
        {/*Employee Email */}
        <CustomInput
          control={control}
          name="employeeEmail"
          label="Email Address"
          width="100%"
          rules={{
            required: "Email Is Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid Email Address",
            },
            maxLength: {
              value: 255,
              message: "Max Length of Email is 255 Characters",
            },
          }}
        />

        {/*Job Title */}
        <CustomInput
          control={control}
          name="jobTitle"
          label="Job Title"
          width="100%"
          rules={{
            required: "Employee Job Title Is Required",
            maxLength: {
              value: 100,
              message: "Max Length of 100 Characters",
            },
          }}
        />
      </Stack>

      <Stack sx={{ py: 5 }}>
        <Typography variant="sectionTitleSmall">Priviledges</Typography>
        <Alert severity="info" sx={{ mt: 1, width: "100%" }}>
          Choose the <b>Modules</b> that can be <b>Accessed</b> by this Employee
        </Alert>

        <CheckBoxGroup
          name="employeePriviledges"
          control={control}
          label=""
          choices={{
            Analytics: false,
            Products: false,
            Customers: false,
            Orders: false,
            "Shop Information": false,
            Promos: false,
            "Lokal Ads": false,
            Vouchers: false,
          }}
          width="100%"
        />
      </Stack>
    </Stack>
  );
}

export default DEmployeeInfo;
