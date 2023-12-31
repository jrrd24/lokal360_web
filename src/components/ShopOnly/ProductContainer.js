import { Avatar, Box, Stack, Typography, ButtonBase } from "@mui/material";
import React from "react";
import theme from "../../Theme";
import Styles from "../../css/Styles.module.css";
import PropTypes from "prop-types";
import TruncateString from "../../utils/TruncateString";
import NumberFormat from "../../utils/NumberFormat";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../api/Api";

function ProductContainer({ data }) {
  // Destructuring data prop and adding default values
  // for error handiling in case of undefined params
  const {
    productID = "",
    product_name = "Unknown Product",
    total_sold = 0,
  } = data || {};

  let image = null;
  if (data.ProductImages[0]) {
    image = `${BASE_URL}/${data.ProductImages[0].prod_image}`;
  }

  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/shop/products/product_page/${productID}`);
  };
  return (
    <ButtonBase onClick={onClick} sx={{ ...theme.components.buttonBase.large }}>
      <Box sx={{ ...classes.main }} className={`${Styles.changeBG}`}>
        <Stack
          spacing={1}
          direction={"row"}
          alignItems="center"
          textAlign={"left"}
        >
          {/*Product Image */}
          <img
            src={image || require("../../assets/product_placeholder_big.jpg")}
            alt="P"
            style={{ ...classes.productImage }}
            loading="lazy"
          />

          {/*Content */}
          <Stack
            spacing={0}
            direction={"column"}
            alignItems="flex-start"
            sx={{ width: "100%" }}
          >
            {/* User Name*/}
            <Typography variant="sectionTitleSmall">
              <TruncateString str={product_name} n={30} />
            </Typography>

            {/* Order Count and Total Spent*/}
            <Typography
              variant="body1"
              sx={{ color: "#44444499", textAlign: "start" }}
            >
              Total Sold:
              <Typography component={"span"} sx={{ fontWeight: 700 }}>
                {" "}
                <NumberFormat value={total_sold} />
              </Typography>{" "}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </ButtonBase>
  );
}

ProductContainer.propTypes = {
  product_image: PropTypes.string,
  product_name: PropTypes.string,
  total_sold: PropTypes.number,
};

const classes = {
  main: {
    minHeight: 60,
    backgroundColor: `${theme.palette.background.paper}`,
    p: 1,
    justifyContent: "space-between",
    display: "flex",
    borderRadius: 2,
    minWidth: "100%",
  },

  productImage: {
    objectFit: "cover",
    backgroundColor: "#FFF",
    width: 50,
    height: 50,
    border: "solid",
    borderColor: "transparent",
    borderRadius: 5,
  },
};

export default ProductContainer;
