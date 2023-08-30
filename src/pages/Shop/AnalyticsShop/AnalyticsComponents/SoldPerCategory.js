import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Styles from "../../../../css/Styles.module.css";
import CustomLink from "../../../../components/CustomLink";
import CustomBarChart from "../../../../components/CustomBarChart";
import shopCategoryData from "../../../../data/shopCategoryData";

function SoldPerCategory({ hideShowAll }) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      {/*Section header */}
      <Stack
        spacing={3}
        direction={"row"}
        sx={{ alignItems: "baseline", justifyContent: "space-between" }}
      >
        {/*Section Name */}
        <Typography variant="sectionTitle" sx={{ textAlign: "left" }}>
          Products Sold Per Category
        </Typography>

        {/*See All */}
        <Box
          className={`${Styles.grow}`}
          sx={{
            minWidth: 60,
            textAlign: "right",
            display: hideShowAll ? "none" : "block",
          }}
        >
          <CustomLink to="/shop/products/shop_category">{"See All"}</CustomLink>
        </Box>
      </Stack>

      {/*Content */}
      <Stack
        spacing={1}
        direction={"column"}
        sx={{
          "@media (max-width: 1516px)": {
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <CustomBarChart data={shopCategoryData} />
      </Stack>
    </Stack>
  );
}

export default SoldPerCategory;
