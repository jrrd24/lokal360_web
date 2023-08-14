import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import theme from "../../Theme";
import Styles from "../../css/Styles.module.css";
import PropTypes from "prop-types";
import TruncateString from "../../utils/TruncateString";
import { IconButton } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function ProductContainer({ data }) {
  // Destructuring data prop and adding default values
  // for error handiling in case of undefined params
  const {
    product_image = "",
    name = "Unknown Product",
    total_sold = 0,
  } = data || {};

  return (
    <Box
      sx={{
        minHeight: 60,
        minWidth: 300,
        backgroundColor: `${theme.palette.background.paper}`,
        p: 1,
        justifyContent: "center",
      }}
      className={`${Styles.changeBG}`}
    >
      <Stack
        spacing={1}
        direction={"row"}
        alignItems="center"
        textAlign={"left"}
      >
        {/*User Image */}
        <Avatar
          src={product_image}
          alt="P"
          sx={{
            backgroundColor: "#FFF",
            width: 50,
            height: 50,
            border: "solid",
            borderColor: "transparent",
            borderRadius: 2,
          }}
        />

        {/*Content */}
        <Stack
          spacing={0}
          direction={"column"}
          alignItems="flex-start"
          sx={{ width: 200 }}
        >
          {/* User Name*/}
          <Typography variant="sectionTitleSmall">
            <TruncateString str={name} n={30} />
          </Typography>

          {/* Order Count and Total Spent*/}
          <Typography
            variant="body1"
            sx={{ color: "#44444499", textAlign: "start" }}
          >
            Total Sold:
            <Typography component={"span"} sx={{ fontWeight: 700 }}>
              {" "}
              {total_sold}
            </Typography>{" "}
          </Typography>
        </Stack>

        {/*See More Button */}
        <IconButton>
          <ArrowCircleRightIcon
            sx={{ color: `${theme.palette.primary.main}` }}
          />
        </IconButton>
      </Stack>
    </Box>
  );
}

ProductContainer.propTypes = {
  product_image: PropTypes.string,
  name: PropTypes.string,
  total_sold: PropTypes.number,
};

export default ProductContainer;
