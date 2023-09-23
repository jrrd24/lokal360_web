import React from "react";
import { Stack, Typography, Divider } from "@mui/material";
import {
  CustomInput,
  CustomNumberInput,
  ReadOnlyCustomInput,
} from "../../../../../../components/FormComponents/CustomInput";
import { UploadImage } from "../../../../../../components/DialogBox/UploadImageDialog";

function DEditVariationInfo({ sx, control, register, setValue, data }) {
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

  const validateMaxNumber = (value) => {
    const numericValue = parseInt(value);
    if (numericValue > 99999) {
      return "Maximum amount 99,999";
    } else if (numericValue < 0) {
      return "Minimum Amount is 0";
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
            value={data.name}
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
            value={data.price}
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
            defaultValue={data.amt_sold}
          />

          <CustomNumberInput
            control={control}
            name="amountOnHand"
            label="Amount On Hand"
            width="48%"
            value={data.amt_on_hand}
            rules={{
              required: "Amount On Hand Is Required",
              validate: validateMaxNumber,
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default DEditVariationInfo;
