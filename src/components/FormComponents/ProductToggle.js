import {
  Avatar,
  Box,
  Stack,
  Typography,
  Switch,
  FormGroup,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import React, { useState, useEffect, useMemo } from "react";
import theme from "../../Theme";
import Styles from "../../css/Styles.module.css";
import TruncateString from "../../utils/TruncateString";
import { Controller } from "react-hook-form";
import { LocalShipping, Percent } from "@mui/icons-material";
import { FaPesoSign } from "react-icons/fa6";
import { BASE_URL } from "../../api/Api";

//For displaying products with toggles
const ProductToggle = ({
  name,
  control,
  data,
  width,
  targetField,
  targetID,
}) => {
  // SET INITIAL VALUES FOR TOGGLES
  const [switchValues, setSwitchValues] = useState(
    data?.reduce((acc, product) => {
      // Convert undefined to false, and keep other values as is
      targetID
        ? (acc[product.productID] =
            product[targetField] !== undefined &&
            product[targetField] === targetID
              ? Boolean(product[targetField])
              : false)
        : (acc[product.productID] =
            product[targetField] !== undefined
              ? Boolean(product[targetField])
              : false);

      return acc;
    }, {})
  );

  useMemo(() => {
    const updatedValues = data.reduce((acc, product) => {
      targetID
        ? (acc[product.productID] =
            product[targetField] !== undefined &&
            product[targetField] === targetID
              ? Boolean(product[targetField])
              : false)
        : (acc[product.productID] =
            product[targetField] !== undefined
              ? Boolean(product[targetField])
              : false);
      return acc;
    }, {});
    setSwitchValues(updatedValues);
  }, [data, targetField, targetID]);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={switchValues}
      render={({ field }) => (
        <FormGroup style={{ width: width }}>
          {data.map((product) => {
            // Check if ProductImages property is defined and is an array
            const hasProductImages =
              product.ProductImages && Array.isArray(product.ProductImages);

            // Construct image URL with conditional checks
            const image =
              hasProductImages && product.ProductImages.length > 0
                ? `${BASE_URL}/${product.ProductImages[0].prod_image}`
                : null;

            return (
              <Box
                className={`${Styles.changeBG}`}
                sx={{ ...classes.main }}
                key={product.productID}
              >
                <Stack
                  spacing={2}
                  direction={"row"}
                  alignItems={"center"}
                  textAlign={"left"}
                >
                  {/* Product Image */}
                  <img
                    src={
                      image ||
                      require("../../assets/product_placeholder_big.jpg")
                    }
                    style={{ ...classes.image }}
                    alt="Product"
                  />

                  {/* Product Name */}
                  <Typography variant="sectionTitleSmall">
                    <TruncateString str={product.product_name} n={30} />
                  </Typography>
                </Stack>

                {/* Toggle */}
                <Switch
                  name={`${name}[${product.productID}]`}
                  checked={switchValues[product.productID]}
                  onChange={(e) => {
                    setSwitchValues((prevState) => {
                      const updatedData = {
                        ...prevState,
                        [product.productID]: e.target.checked,
                      };
                      field.onChange(updatedData); // Update the form control's value
                      return updatedData;
                    });
                  }}
                />
              </Box>
            );
          })}
        </FormGroup>
      )}
    />
  );
};

//For Mapping data toggle
const ProductToggleNew = ({
  name,
  control,
  label,
  data,
  width,
  condition,
  targetField,
  targetID,
}) => {
  const filteredData = data.filter(condition);
  const initialValue = filteredData.reduce((acc, product) => {
    acc[product.productID] = targetID
      ? product[targetField] === targetID
      : product[targetField] !== null;
    return acc;
  }, {});

  // Use state to manage the switch values
  const [switchValues, setSwitchValues] = useState(initialValue);

  // Listen for changes in the 'data' prop and update the switch values
  useEffect(() => {
    const updatedValues = filteredData.reduce((acc, product) => {
      acc[product.productID] = targetID
        ? product[targetField] === targetID
        : product[targetField] !== null;
      return acc;
    }, {});
    setSwitchValues(updatedValues);
  }, [filteredData, condition, targetField, targetID]);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={initialValue}
      render={({ field }) => (
        <FormGroup style={{ width: width }}>
          {data.filter(condition).map((product) => (
            <Box
              className={`${Styles.changeBG}`}
              sx={{ ...classes.main }}
              key={product.productID}
            >
              <Stack
                spacing={1}
                direction={"row"}
                alignItems="center"
                textAlign={"left"}
              >
                {/* Product Image */}
                <Avatar
                  src={
                    product.product_image ||
                    require("../../assets/lokal360_Logo.png")
                  }
                  alt="P"
                  sx={{}}
                />

                {/* Product Name */}
                <Typography variant="sectionTitleSmall">
                  <TruncateString str={product.product_name} n={30} />
                </Typography>
              </Stack>

              {/* Toggle */}
              <Switch
                name={`${name}[${product.productID}]`} // Use a unique name for each switch
                checked={switchValues[product.productID]}
                onChange={(e) => {
                  const updatedData = {
                    ...switchValues,
                    [product.productID]: e.target.checked, // Update the local state
                  };
                  setSwitchValues(updatedData); // Update the local state
                  field.onChange(updatedData); // Update the form control
                }}
              />
            </Box>
          ))}
        </FormGroup>
      )}
    />
  );
};

//For Mapping Promo toggles
const PromoToggle = ({
  name,
  control,
  label,
  data,
  width,
  condition,
  value,
}) => {
  const labelStyle = {
    display: "flex",
    justifyContent: "space-between", // Add space between radio and label
  };

  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    setSelectedValue(value); // Set the initial value from the prop when it changes
  }, [value]);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <RadioGroup
          sx={{ width: "100%" }}
          value={selectedValue}
          onChange={(e) => {
            const selectedProductId = e.target.value;
            setSelectedValue(selectedProductId); // Update the local state
            field.onChange(selectedProductId);
          }}
        >
          {data.filter(condition).map((promo) => (
            <FormControlLabel
              key={promo.promoID}
              value={promo.promoID.toString()}
              control={<Radio />}
              labelPlacement="start"
              className={`${Styles.changeBG}`}
              sx={{ ...classes.main }}
              label={
                <div style={labelStyle}>
                  <Box>
                    <Stack
                      spacing={2}
                      direction={"row"}
                      alignItems="center"
                      textAlign={"left"}
                      sx={{ display: "flex", alignContent: "center" }}
                    >
                      <Box
                        sx={{
                          backgroundColor:
                            promo.promo_type === "Peso Discount"
                              ? theme.palette.promo.peso
                              : promo.promo_type === "Percent Discount"
                              ? theme.palette.promo.percent
                              : theme.palette.promo.freeShipping,
                          ...theme.components.box.iconContainer,
                        }}
                      >
                        {" "}
                        {promo.promo_type === "Peso Discount" ? (
                          <FaPesoSign style={{ ...classes.icon }} />
                        ) : promo.promo_type === "Percent Discount" ? (
                          <Percent sx={{ ...classes.icon }} />
                        ) : (
                          <LocalShipping sx={{ ...classes.icon }} />
                        )}
                      </Box>
                      {/* promo Image */}

                      <Stack>
                        {/* promo Name */}
                        <Typography variant="sectionTitleSmall">
                          <TruncateString str={promo.promo_type} n={30} />
                        </Typography>

                        {/* discount amt */}
                        <Typography>
                          {promo.promo_type === "Percent Discount"
                            ? `${promo.discount_amount * 100}% off`
                            : promo.promo_type === "Peso Discount"
                            ? `₱${promo.discount_amount} off`
                            : `Up to ₱${promo.discount_amount} off`}
                        </Typography>

                        {/* min spend */}
                        <Typography>{`Minimum Spend: ₱${promo.min_spend}`}</Typography>
                      </Stack>
                    </Stack>
                  </Box>
                  {/* Add some space */}
                  <div style={{ marginLeft: "16px" }}></div>
                </div>
              }
              onChange={(e) => {
                const selectedProductId = e.target.value;
                setSelectedValue(selectedProductId);
                field.onChange(selectedProductId);
              }}
            />
          ))}
        </RadioGroup>
      )}
    />
  );
};

//For Mapping Promo toggles
const ReadOnlyPromoToggle = ({ data, condition, value }) => {
  const labelStyle = {
    display: "flex",
    justifyContent: "space-between", // Add space between radio and label
  };

  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    setSelectedValue(value); // Set the initial value from the prop when it changes
  }, [value]);

  return (
    <RadioGroup sx={{ width: "100%" }} value={selectedValue}>
      {data.filter(condition).map((promo) => (
        <FormControlLabel
          key={promo.promoID}
          value={promo.promoID.toString()}
          control={<Radio />}
          labelPlacement="start"
          className={`${Styles.changeBG}`}
          sx={{ ...classes.main }}
          label={
            <div style={labelStyle}>
              <Box>
                <Stack
                  spacing={2}
                  direction={"row"}
                  alignItems="center"
                  textAlign={"left"}
                  sx={{ display: "flex", alignContent: "center" }}
                >
                  <Box
                    sx={{
                      backgroundColor:
                        promo.promo_type === "Peso Discount"
                          ? theme.palette.promo.peso
                          : promo.promo_type === "Percent Discount"
                          ? theme.palette.promo.percent
                          : theme.palette.promo.freeShipping,
                      ...theme.components.box.iconContainer,
                    }}
                  >
                    {" "}
                    {promo.promo_type === "Peso Discount" ? (
                      <FaPesoSign style={{ ...classes.icon }} />
                    ) : promo.promo_type === "Percent Discount" ? (
                      <Percent sx={{ ...classes.icon }} />
                    ) : (
                      <LocalShipping sx={{ ...classes.icon }} />
                    )}
                  </Box>
                  {/* promo Image */}

                  <Stack>
                    {/* promo Name */}
                    <Typography variant="sectionTitleSmall">
                      <TruncateString str={promo.promo_type} n={30} />
                    </Typography>

                    {/* discount amt */}
                    <Typography>
                      {promo.promo_type === "Percent Discount"
                        ? `${promo.discount_amount * 100}% off`
                        : promo.promo_type === "Peso Discount"
                        ? `₱${promo.discount_amount} off`
                        : `Up to ₱${promo.discount_amount} off`}
                    </Typography>

                    {/* min spend */}
                    <Typography>{`Minimum Spend: ₱${promo.min_spend}`}</Typography>
                  </Stack>
                </Stack>
              </Box>
              {/* Add some space */}
              <div style={{ marginLeft: "16px" }}></div>
            </div>
          }
        />
      ))}
    </RadioGroup>
  );
};

const classes = {
  main: {
    minHeight: 60,
    backgroundColor: `${theme.palette.background.paper}`,
    display: "flex",
    justifyContent: "space-between",
    p: 2,
    m: 0,
    borderRadius: 5,
    width: "100%",
  },

  icon: { color: theme.palette.text.contrastText, fontSize: 20 },

  product_image: {
    backgroundColor: `${theme.palette.background.paper}`,
    width: 40,
    height: 40,
    border: "solid",
    borderColor: "transparent",
    borderRadius: 2,
  },

  image: {
    objectFit: "cover",
    objectPosition: "center",
    height: 50,
    width: 50,
    borderRadius: 10,
    backgroundColor: `${theme.palette.background.paper}`,
  },
};

export { ProductToggle, ProductToggleNew, PromoToggle, ReadOnlyPromoToggle };
