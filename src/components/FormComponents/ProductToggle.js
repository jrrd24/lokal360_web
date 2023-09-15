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
import React from "react";
import theme from "../../Theme";
import Styles from "../../css/Styles.module.css";
import PropTypes from "prop-types";
import TruncateString from "../../utils/TruncateString";
import { Controller } from "react-hook-form";
import { LocalShipping, Percent } from "@mui/icons-material";
import { FaPesoSign } from "react-icons/fa6";

//For Featured Products
function ProductToggle({ data, control }) {
  const {
    product_image = "",
    name = "Unknown Product",
    is_featured,
  } = data || {};

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={is_featured}
      render={({ field }) => (
        <Box className={`${Styles.changeBG}`} sx={{ ...classes.main }}>
          <Stack
            spacing={1}
            direction={"row"}
            alignItems="center"
            textAlign={"left"}
          >
            {/* Product Image */}
            <Avatar
              src={product_image || require("../../assets/lokal360_Logo.png")}
              alt="P"
              sx={{}}
            />

            {/* Product Name */}
            <Typography variant="sectionTitleSmall">
              <TruncateString str={name} n={30} />
            </Typography>
          </Stack>

          {/* Toggle */}
          <Switch name={name} checked={field.value} onChange={field.onChange} />
        </Box>
      )}
    />
  );
}

ProductToggle.propTypes = {
  data: PropTypes.shape({
    product_image: PropTypes.string,
    name: PropTypes.string,
    is_featured: PropTypes.bool,
  }),
  control: PropTypes.object.isRequired,
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
}) => {
  const filteredData = data.filter(condition);
  const initialValue = filteredData.reduce((acc, product) => {
    acc[product.productID] = product[targetField] !== null;
    return acc;
  }, {});

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
                  <TruncateString str={product.name} n={30} />
                </Typography>
              </Stack>

              {/* Toggle */}
              <Switch
                name={`${name}[${product.productID}]`} // Use a unique name for each switch
                checked={field.value[product.productID]}
                onChange={(e) => {
                  const updatedData = {
                    ...field.value,
                    [product.productID]: !field.value[product.productID], // Toggle the boolean value
                  };
                  field.onChange(updatedData);
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
  targetField,
}) => {
  const labelStyle = {
    display: "flex",
    justifyContent: "space-between", // Add space between radio and label
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <RadioGroup sx={{ width: "100%" }} value={field.value}>
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
                field.onChange(selectedProductId);
              }}
            />
          ))}
        </RadioGroup>
      )}
    />
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
    width: 50,
    height: 50,
    border: "solid",
    borderColor: "transparent",
    borderRadius: 2,
  },
};

export { ProductToggle, ProductToggleNew, PromoToggle };
