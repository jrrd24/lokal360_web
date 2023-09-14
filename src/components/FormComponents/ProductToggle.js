import {
  Avatar,
  Box,
  Stack,
  Typography,
  Switch,
  FormGroup,
} from "@mui/material";
import React from "react";
import theme from "../../Theme";
import Styles from "../../css/Styles.module.css";
import PropTypes from "prop-types";
import TruncateString from "../../utils/TruncateString";
import { Controller } from "react-hook-form";

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
            <Avatar src={product_image} alt="P" sx={{}} />

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

//For Shop Category
function ProductToggleCategory({ data, control }) {
  const {
    productID,
    product_image = "",
    name = "Unknown Product",
    shopCategoryID,
  } = data || {};

  return (
    <Controller
      name={`${productID}`}
      control={control}
      defaultValue={shopCategoryID !== null ? true : false}
      render={({ field }) => (
        <Box className={`${Styles.changeBG}`} sx={{ ...classes.main }}>
          <Stack
            spacing={1}
            direction={"row"}
            alignItems="center"
            textAlign={"left"}
          >
            {/* Product Image */}
            <Avatar src={product_image} alt="P" sx={{}} />

            {/* Product Name */}
            <Typography variant="sectionTitleSmall">
              <TruncateString str={name} n={30} />
            </Typography>
          </Stack>

          {/* Toggle */}
          <Switch
            name={`${productID}`}
            checked={field.value}
            onChange={field.onChange}
            value={productID}
          />
        </Box>
      )}
    />
  );
}

ProductToggleCategory.propTypes = {
  data: PropTypes.shape({
    productID: PropTypes.number,
    product_image: PropTypes.string,
    name: PropTypes.string,
    shopCategoryID: PropTypes.number,
  }),
  control: PropTypes.object.isRequired,
};

//For Promos
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
                <Avatar src={product.product_image} alt="P" sx={{}} />

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

const classes = {
  main: {
    minHeight: 60,
    backgroundColor: `${theme.palette.background.paper}`,
    p: 1,
    justifyContent: "space-between",
    display: "flex",
    width: "100%",
  },

  product_image: {
    backgroundColor: `${theme.palette.background.paper}`,
    width: 50,
    height: 50,
    border: "solid",
    borderColor: "transparent",
    borderRadius: 2,
  },
};

export { ProductToggle, ProductToggleCategory, ProductToggleNew };
