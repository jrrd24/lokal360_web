import { Divider, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { CustomInput } from "../../../components/FormComponents/CustomInput";
import { CustomPhoneNumberPicker } from "../../../components/FormComponents/CustomPhoneNumberPicker";
import { ProductsCategory } from "../../../utils/MapSelectMenuItems";

function OwnerDetailsForm({ control, trigger, data }) {
  const isMaxWidth = useMediaQuery("(max-width:600px)");

  return (
    <Stack spacing={5}>
      {/*Owner Info */}
      <Stack spacing={3}>
        <Typography variant="sectionTitleSmall">Owner Information</Typography>

        <Stack
          direction={isMaxWidth ? "column" : "row"}
          spacing={3}
          sx={{ minWidth: "100%" }}
        >
          <CustomInput
            control={control}
            name="firstName"
            label="First Name"
            value={data.first_name}
            width={isMaxWidth ? "100%" : "48%"}
            rules={{
              required: "First Name Is Required",
              maxLength: {
                value: 60,
                message: "Max Length of 60 Characters",
              },
            }}
          />

          <CustomInput
            control={control}
            name="lastName"
            label="Last Name"
            value={data.last_name}
            width={isMaxWidth ? "100%" : "48%"}
            rules={{
              required: "Last Name Is Required",
              maxLength: {
                value: 60,
                message: "Max Length of 60 Characters",
              },
            }}
          />
        </Stack>

        <Stack
          direction={isMaxWidth ? "column" : "row"}
          spacing={3}
          sx={{ minWidth: "100%" }}
        >
          <CustomInput
            control={control}
            name="email"
            label="Email"
            value={data.email}
            width={isMaxWidth ? "100%" : "48%"}
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

          <CustomPhoneNumberPicker
            control={control}
            name="phoneNumber"
            label="Phone Number"
            defaultValue={data.mobile_num || "+63"}
            width={isMaxWidth ? "100%" : "48%"}
            trigger={trigger}
            rules={{
              pattern: {
                value: /^(09|\+639|\+63 9)\d{9}$/,
                message: "Invalid Phone Number Format Must Be +63 966 123 4565",
              },
            }}
          />
        </Stack>
      </Stack>

      <Divider />

      {/*Shop Info */}
      <Stack spacing={3}>
        <Typography variant="sectionTitleSmall">Shop Details</Typography>

        <CustomInput
          control={control}
          name="shopName"
          label="Shop Name"
          width="100%"
          rules={{
            required: "Shop Name Is Required",
            maxLength: {
              value: 60,
              message: "Max Length of 60 Characters",
            },
          }}
        />
        <Stack
          direction={isMaxWidth ? "column" : "row"}
          spacing={3}
          sx={{ minWidth: "100%" }}
        >
          <CustomInput
            control={control}
            name="shopType"
            label="Shop Type"
            width={isMaxWidth ? "100%" : "48%"}
            rules={{
              required: "Shop Type Is Required",
              maxLength: {
                value: 60,
                message: "Max Length of 60 Characters",
              },
            }}
          />

          <CustomInput
            control={control}
            name="productsCategory"
            label="Products Category"
            width={isMaxWidth ? "100%" : "48%"}
            select
            selectMenuItems={ProductsCategory()}
            rules={{
              required: "Products Category Is Required",
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default OwnerDetailsForm;
