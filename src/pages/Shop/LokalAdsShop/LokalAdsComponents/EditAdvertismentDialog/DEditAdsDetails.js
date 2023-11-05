import React from "react";
import { Alert, Divider, Stack, Typography } from "@mui/material";
import { ReadOnlyCustomInput } from "../../../../../components/FormComponents/CustomInput";
import { ReadOnlyCustomImage } from "../../../../../components/FormComponents/CustomImage";
import AdsStatus from "../../../../../components/ShopOnly/StatusAndTags/AdsStatus";
import { BASE_URL } from "../../../../../api/Api";

function DEditAdsDetails({ sx, data }) {
  return (
    <Stack spacing={5} sx={{ sx }}>
      {/*Ad Status */}
      <Stack spacing={3}>
        <Stack
          spacing={1}
          sx={{ alignItems: "baseline", justifyContent: "space-between" }}
        >
          <Typography variant="sectionTitleSmall">
            Advertisment Status
          </Typography>
          <AdsStatus status={data.status} />
        </Stack>

        {data.status === "Rejected" ? (
          <ReadOnlyCustomInput
            label={"Reason For Rejection"}
            defaultValue={data.message}
          />
        ) : data.status === "Approved" || data.status === "Active" ? (
          <Alert severity="info">Approved On: {data.approved_at}</Alert>
        ) : (
          ""
        )}
      </Stack>

      <Divider />
      <Stack spacing={3}>
        {/*Section Name */}
        <Stack sx={{ alignItems: "baseline", justifyContent: "space-between" }}>
          <Typography variant="sectionTitleSmall">
            Advertisement Details
          </Typography>
        </Stack>

        {/*TextBoxes */}
        <Stack spacing={3}>
          {/*Ad Name */}
          <ReadOnlyCustomInput
            name="adName"
            label="Ad Name"
            width="100%"
            defaultValue={data.ad_name}
          />
          {/*Start and End Date Pickers*/}
          <Stack direction={"row"} spacing={3} sx={{ minWidth: "100%" }}>
            {/*Start Date */}
            <ReadOnlyCustomInput
              name="startDate"
              label="Start Date"
              defaultValue={data.start_date}
              width={"48%"}
            />

            {/*End Date */}
            <ReadOnlyCustomInput
              name="endDate"
              label="End Date"
              defaultValue={data.end_date}
              width={"48%"}
            />
          </Stack>

          {/*Ad Type*/}
          <Stack spacing={1}>
            <ReadOnlyCustomInput
              name="adType"
              label="Ad Type"
              width="100%"
              defaultValue={data.type}
            />
          </Stack>
        </Stack>
      </Stack>

      <Divider />

      {/*Ad Image Preview*/}
      <Stack spacing={3}>
        <Typography variant="sectionTitleSmall">Ad Image</Typography>
        <ReadOnlyCustomImage
          selectedImage={`${BASE_URL}/${data.ad_image}`}
          alt={"ad"}
        />
      </Stack>
    </Stack>
  );
}

export default DEditAdsDetails;
