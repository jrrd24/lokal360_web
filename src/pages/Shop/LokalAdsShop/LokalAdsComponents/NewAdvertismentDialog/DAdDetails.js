import React from "react";
import { Alert, Stack, Typography } from "@mui/material";
import { CustomInput } from "../../../../../components/FormComponents/CustomInput";
import { UploadImage } from "../../../../../components/DialogBox/UploadImageDialog";
import CustomDatePicker from "../../../../../components/FormComponents/CustomDatePicker";

function DAdDetails({ sx, control, register, setValue, watch }) {
  const adTypes = [
    {
      value: 1,
      label: "Shop Page",
    },
    {
      value: 2,
      label: "Sitewide",
    },
  ];

  const startDate = watch("startDate");
  const today = new Date();
  const formattedToday = `${today.getFullYear()}-${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;

  return (
    <Stack spacing={3} sx={{ sx }}>
      {/*Section Name */}
      <Stack sx={{ alignItems: "baseline", justifyContent: "space-between" }}>
        <Typography variant="sectionTitleSmall">
          Advertisement Details
        </Typography>
      </Stack>

      {/*TextBoxes */}
      <Stack spacing={3}>
        {/*Ad Name */}
        <CustomInput
          control={control}
          name="adName"
          label="Ad Name"
          width="100%"
          rules={{
            required: "Product Name Is Required",
            maxLength: {
              value: 160,
              message: "Max Length of 160 Characters",
            },
          }}
        />
        {/*Start and End Date Pickers*/}
        <Stack direction={"row"} spacing={3} sx={{ minWidth: "100%" }}>
          {/*Start Date */}
          <CustomDatePicker
            control={control}
            name="startDate"
            label="Start Date"
            width={"48%"}
            value={formattedToday}
            disablePastDates
            rules={{ required: "Start Date Is Required" }}
          />

          {/*End Date */}
          <CustomDatePicker
            control={control}
            name="endDate"
            label="End Date"
            width={"48%"}
            rules={{ required: "End Date Is Required" }}
            value={formattedToday}
            disablePastDates
            startDateValue={startDate}
          />
        </Stack>

        {/*Ad Type*/}
        <Stack spacing={1}>
          <CustomInput
            control={control}
            name="adType"
            label="Ad Type"
            width="100%"
            select
            selectMenuItems={adTypes}
            rules={{ required: "Ad Type Is Required" }}
          />
          <Alert severity="info">
            Ad Type will determine where your Ad will be shown.
            <br /> <br />
            <b>Shop Page: </b> &ensp;Ads will be shown only in your Shop Page
            <br /> <br />
            <b>Sitewide: </b> &ensp;Ads will be shown in both your Shop Page and
            the Homepage. This method will require <b>Admin Approval</b> before
            the Ad is displayed
          </Alert>
          <Alert severity="warning">
            Ads <b>Cannot Be Edited</b> once it is Saved
          </Alert>
        </Stack>

        <Stack sx={{ py: 5 }}>
          <Typography variant="sectionTitleSmall">Upload Ad Image</Typography>

          <UploadImage
            name={"adImage"}
            alt={"adImage"}
            control={control}
            register={register}
            setValue={setValue}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default DAdDetails;
