import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import theme from "../../Theme";
import Styles from "../../css/Styles.module.css";
import PropTypes from "prop-types";
import TruncateString from "../../utils/TruncateString";
import NumberFormat from "../../utils/NumberFormat";
import { IconButton } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function ProductContainer({ data }) {
  // Destructuring data prop and adding default values
  // for error handiling in case of undefined params
  const {
    product_image = "",
    product_name = "Unknown Product",
    total_sold = 0,
  } = data || {};

  return (
    <Box sx={{ ...classes.main }} className={`${Styles.changeBG}`}>
      <Stack
        spacing={1}
        direction={"row"}
        alignItems="center"
        textAlign={"left"}
      >
        {/*Product Image */}
        <Avatar
          src={product_image || require("../../assets/lokal360_Logo.png")}
          alt="P"
          sx={{ ...classes.productImage }}
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
      {/*See More Button */}
      <IconButton>
        <ArrowCircleRightIcon sx={{ color: `${theme.palette.primary.main}` }} />
      </IconButton>
    </Box>
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
  },

  productImage: {
    objectFit: "contain",
    backgroundColor: "#FFF",
    width: 50,
    height: 50,
    border: "solid",
    borderColor: "transparent",
    borderRadius: 2,
  },
};

export default ProductContainer;
