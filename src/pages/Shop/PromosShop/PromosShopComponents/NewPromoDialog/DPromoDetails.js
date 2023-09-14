import React, { useEffect, useState } from "react";
import { Stack, Typography, Alert, Divider } from "@mui/material";
import {
  CustomInput,
  CustomNumberInput,
} from "../../../../../components/FormComponents/CustomInput";
import { promoTypes } from "../../../../../utils/MapSelectMenuItems";
import MapData from "../../../../../utils/MapData";
import productData from "../../../../../data/productData";
import {
  ProductToggleNew,
  ProductToggleTry,
} from "../../../../../components/FormComponents/ProductToggle";

function DPromoDetails({ sx, control, register, setValue }) {
  const [promoType, setPromoType] = useState("");
  const [disableInput, setDisableInput] = useState(true);

  const handlePromoChange = (promo) => {
    setPromoType(promo);
  };

  useEffect(() => {
    promoType !== "" ? setDisableInput(false) : setDisableInput(true);
  }, [promoType]);

  //For Currency and Percentage Validation
  const validateMaxAmount = (value, inputName) => {
    const numericValue = parseFloat(value);
    if (
      numericValue > 999999.99 &&
      (promoType === "Free Shipping" ||
        promoType === "Peso Discount" ||
        inputName === "minSpend")
    ) {
      return "Maximum amount is ₱999,999.99";
    } else if (
      numericValue < 1.0 &&
      (promoType === "Free Shipping" ||
        promoType === "Peso Discount" ||
        inputName === "minSpend")
    ) {
      return "Minimum Amount is ₱1.00";
    } else if (
      numericValue > 100 &&
      promoType === "Percent Discount" &&
      inputName !== "minSpend"
    ) {
      return "Maximum Percentage must be between or equal to 1 and 100";
    } else if (inputName === "minSpend" && promoType === "Percent Discount") {
      return true;
    }
    return true;
  };

  return (
    <Stack spacing={5} sx={{ sx }}>
      {/*Promo Details */}
      <Stack spacing={3}>
        {/*Section Name */}
        <Stack sx={{ alignItems: "baseline", justifyContent: "space-between" }}>
          <Typography variant="sectionTitleSmall">Promo Details</Typography>
        </Stack>

        {/*TextBoxes */}
        <Stack spacing={3}>
          {/*Promo Type*/}
          <CustomInput
            control={control}
            name="promoType"
            label="Promo Type"
            width="100%"
            select
            selectMenuItems={promoTypes}
            rules={{ required: "Promo Type Is Required" }}
            setPromoType={handlePromoChange}
          />

          {/*Discount Value*/}
          <Stack spacing={1} sx={{ width: "100%" }}>
            <CustomNumberInput
              control={control}
              name="discountValue"
              label="Discount Value"
              width="100%"
              type={promoType}
              disabled={disableInput}
              rules={{
                required: "Discount Value Is Required",
                pattern: {
                  value:
                    promoType === "Percent Discount"
                      ? /^\d+$/
                      : /^\d+(\.\d{0,2})?$/,
                  message:
                    promoType === "Percent Discount"
                      ? "Invalid Number Format. Decimals are not allowed. Sample: 20%"
                      : "Invalid Currency Format. Sample: ₱123.00",
                },
                validate: validateMaxAmount,
              }}
            />

            <Alert severity="info">
              {promoType === "Percent Discount" ? (
                <>
                  Please enter a <b>Percentage</b>
                  <br />
                  Example: 20%
                </>
              ) : (
                <>
                  Please enter a <b>Peso Value</b>
                  <br />
                  Example: ₱100.00
                </>
              )}
            </Alert>
          </Stack>

          {/*Minimum Spend*/}
          <Stack spacing={1} sx={{ width: "100%" }}>
            <CustomNumberInput
              control={control}
              name="minSpend"
              label="Minimum Spend"
              width="100%"
              type={"Peso Discount"}
              disabled={disableInput}
              rules={{
                required: "Minimum Spent Is Required",
                pattern: {
                  value: /^\d+(\.\d{0,2})?$/,
                  message: "Invalid Currency Format. Must be ₱123.00",
                },
                validate: (value) => validateMaxAmount(value, "minSpend"),
              }}
            />

            <Alert severity="info">
              Please enter a <b>Peso Value</b> <br /> Example: ₱100.00{" "}
            </Alert>
          </Stack>
        </Stack>
      </Stack>

      <Divider />

      {/*Products Applied To */}
      <Stack spacing={3}>
        {/*Section Name */}
        <Stack spacing={1}>
          <Stack
            sx={{ alignItems: "baseline", justifyContent: "space-between" }}
          >
            <Typography variant="sectionTitleSmall">
              Products Applied To
            </Typography>
          </Stack>
          <Alert severity="info">
            Click the Toggle to <b>Apply</b> or <b>Remove</b> this Promo from a
            Product
          </Alert>
        </Stack>
        {/*Product Containers (MAP) */}
        {/*TODO: Add Product Containers Here */}
        <Stack spacing={3}>
          {/* Mapping user data */}
          <ProductToggleNew
            name="promoProducts"
            control={control}
            label=""
            data={productData}
            condition={(product) => product.promoID === null}
            targetField={"promoID"}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default DPromoDetails;
