import React from "react";
import {
  Stack,
  Typography,
  Alert,
  Divider,
  Avatar,
  Box,
  Badge,
} from "@mui/material";
import { CustomInput } from "../../../../../components/FormComponents/CustomInput";
import CheckBoxGroup from "../../../../../components/FormComponents/CheckBoxGroup";

function DEditEmployeeDetails({ sx, control, setValue, data }) {
  return (
    <Stack spacing={5} sx={{ sx }}>
      <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <Badge
          badgeContent={""}
          overlap="circular"
          color="active"
          invisible={!data.is_active}
        >
          <Avatar src={data.profile_pic} sx={{ ...classes.avatar }} />
        </Badge>
        <Stack spacing={-0.5}>
          <Typography variant="sectionTitle">{data.username}</Typography>
          <Typography variant="seeAll">{data.email}</Typography>
        </Stack>
      </Box>
      {/*Details */}
      <Stack spacing={3}>
        {/*Section Name */}
        <Stack sx={{ alignItems: "baseline", justifyContent: "space-between" }}>
          <Typography variant="sectionTitleSmall">Employee Details</Typography>
        </Stack>

        {/*TextBoxes */}
        <Stack spacing={3}>
          {/*Job Title */}
          <CustomInput
            control={control}
            name="jobTitle"
            label="Job Title"
            width="100%"
            value={data.job_title}
            rules={{
              required: "Employee Job Title Is Required",
              maxLength: {
                value: 100,
                message: "Max Length of 100 Characters",
              },
            }}
          />
        </Stack>
      </Stack>

      <Divider />

      <Stack>
        <Typography variant="sectionTitleSmall">Priviledges</Typography>
        <Alert severity="info" sx={{ mt: 1, width: "100%" }}>
          Choose the <b>Modules</b> that can be <b>Accessed</b> by this Employee
        </Alert>

        <CheckBoxGroup
          name="employeePriviledges"
          control={control}
          label=""
          choices={{
            Analytics: data.access_analytics,
            Products: data.access_products,
            Customers: data.access_customers,
            Orders: data.access_orders,
            "Shop Information": data.access_shop_information,
            Promos: data.access_promos,
            "Lokal Ads": data.access_lokal_ads,
            Vouchers: data.access_vouchers,
          }}
          width="100%"
          setValue={setValue}
        />
      </Stack>
    </Stack>
  );
}

const classes = {
  avatar: {
    backgroundColor: "#FFF",
    width: 80,
    height: 80,
    border: "solid",
    borderColor: "transparent",
    borderRadius: 2,
  },
};
export default DEditEmployeeDetails;
