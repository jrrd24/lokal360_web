import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import theme from "../../Theme";
import TruncateString from "../../utils/TruncateString";
import { StarHalf } from "@mui/icons-material";
import NumberFormat from "../../utils/NumberFormat";

function ProductPreview({ data }) {
  const {
    image = data ? data.product_image : null,
    product_name = data ? data.product_name : null,
    rating = data ? data.rating : null,
    amtSold = data ? data.total_sold : null,
    price = data ? data.price : null,
    origPrice = data ? data.orig_price : null,
  } = data || {};
  return (
    <Box sx={{ ...classes.main }}>
      {/*Prod Image */}
      <Box sx={{ ...classes.imageContainer }}>
        <img
          src={image || require("../../assets/lokal360_Logo.png")}
          style={{ ...classes.image }}
          alt="logo"
        />
      </Box>
      {/*Prod Details */}
      <Box sx={{ ...classes.prodDetailsContainer }}>
        <Stack spacing={1}>
          {/*Prod Name */}
          <Typography sx={{ ...classes.prodName }}>
            <TruncateString str={product_name || "NaN"} n={44} />
          </Typography>

          {/*Prod Ratings and Amt Sold */}
          <Box sx={{ ...classes.prodDetail }}>
            <StarHalf sx={{ ...classes.star }} />
            <Typography sx={{ fontSize: "inherit" }}>
              <span style={{ ...classes.prodDetailBig }}>
                {rating || "N/A"}
              </span>
              /5 | <b>{amtSold || 0}</b> Sold
            </Typography>
          </Box>
        </Stack>

        {/*Prod Price*/}
        <Box sx={{ ...classes.prodDetail }}>
          <Typography sx={{ fontSize: "inherit", alignItems: "baseline" }}>
            <span style={{ ...classes.prodDetailBig }}>
              <NumberFormat value={price || 0} isPeso />
            </span>
            &nbsp;&nbsp;
            {origPrice !== price ? (
              <span style={{ textDecoration: "line-through" }}>
                <NumberFormat value={origPrice} isPeso noDecimal />
              </span>
            ) : null}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

const classes = {
  main: {
    minHeight: 270,
    width: 180,
    backgroundColor: `${theme.palette.background.paper}`,
    boxShadow: "1px 2px 5px 1px rgba(110, 95, 222, 0.25)",
    borderRadius: "10px",
    border: `solid 1px ${theme.palette.text.ten}`,
    textAlign: "left",
  },

  imageContainer: {
    height: 130,
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },

  image: {
    objectFit: "cover",
    objectPosition: "center",
    height: 130,
    width: 178,
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    backgroundColor: `${theme.palette.background.paper}`,
  },

  prodDetailsContainer: {
    p: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: 140,
  },

  prodName: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#444",
    lineHeight: "19px",
    letterSpacing: -0.3,
  },

  star: {
    fontSize: "22px",
    fontWeight: 600,
    color: `${theme.palette.primary.main}`,
  },

  prodDetailBig: {
    fontSize: "18px",
    fontWeight: 600,
    color: `${theme.palette.primary.main}`,
  },

  prodDetail: {
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    color: `${theme.palette.text.sixty}`,
  },
};

export default ProductPreview;
