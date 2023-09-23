import React from "react";
import { Stack, Typography, Divider } from "@mui/material";
import {
  CustomInput,
  CustomNumberInput,
  ReadOnlyCustomInput,
} from "../../../../../../components/FormComponents/CustomInput";
import { UploadImage } from "../../../../../../components/DialogBox/UploadImageDialog";

function DVariationInfo({ sx, control, register, setValue }) {
  //For Currency and Percentage Validation
  const validateMaxAmount = (value, inputName) => {
    const numericValue = parseFloat(value);
    if (numericValue > 999999.99) {
      return "Maximum amount is ₱999,999.99";
    } else if (numericValue < 1.0) {
      return "Minimum Amount is ₱1.00";
    }
    return true;
  };

  return (
    <Stack spacing={5} sx={{ sx }}>
      {/*Variation Details */}
      <Stack spacing={3}>
        {/*Section Name */}
        <Stack sx={{ alignItems: "baseline", justifyContent: "space-between" }}>
          <Typography variant="sectionTitleSmall">Variation Details</Typography>
        </Stack>

        {/*TextBoxes */}
        <Stack spacing={3}>
          {/*Variation Name*/}
          <CustomInput
            control={control}
            name="variationName"
            label="Variation Name"
            width="100%"
            rules={{
              required: "Variation Name Is Required",
              maxLength: {
                value: 50,
                message: "Max Length of Variation Name is 50 Characters",
              },
            }}
          />

          <CustomNumberInput
            control={control}
            name="price"
            label="Price"
            width="100%"
            type="Peso Discount"
            rules={{
              required: "Price Is Required",
              pattern: {
                value: /^\d+(\.\d{0,2})?$/,
                message: "Invalid Currency Format. Sample: ₱123.00",
              },
              validate: validateMaxAmount,
            }}
          />
        </Stack>
      </Stack>

      <Divider />

      {/*Variation Details */}
      <Stack spacing={3}>
        {/*Section Name */}
        <Stack sx={{ alignItems: "baseline", justifyContent: "space-between" }}>
          <Typography variant="sectionTitleSmall">Inventory</Typography>
        </Stack>

        {/*TextBoxes */}
        <Stack direction={"row"} spacing={3}>
          {/*Variation Name*/}
          <ReadOnlyCustomInput
            name="amountSold"
            label="AmountSold"
            width="48%"
            defaultValue={"0"}
          />

          <CustomNumberInput
            control={control}
            name="amountOnHand"
            label="Amount On Hand"
            width="48%"
            rules={{
              required: "Price Is Required",
              pattern: {
                value: /^\d+(\.\d{0,2})?$/,
                message: "Invalid Currency Format. Sample: ₱123.00",
              },
              validate: validateMaxAmount,
            }}
          />
        </Stack>
      </Stack>

      <Divider />

      {/*Variation thumbnail */}
      <Stack spacing={0}>
        <Typography variant="sectionTitleSmall">Product Thumbnail</Typography>
        <UploadImage
          name={"variationThumbnail"}
          alt={"Variation Thumbnail"}
          control={control}
          register={register}
          setValue={setValue}
        />
      </Stack>
    </Stack>
  );
}

export default DVariationInfo;
