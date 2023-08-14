import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Styles from "../../../../css/Styles.module.css";
import CustomLink from "../../../../components/CustomLink";
import CustomBarChart from "../../../../components/CustomBarChart";

const data = [
  {
    name: "Category A",
    amtSold: 164,
  },
  {
    name: "Category B",
    amtSold: 10,
  },
  {
    name: "Category C",
    amtSold: 82,
  },
  {
    name: "Category D",
    amtSold: 20,
  },
  {
    name: "Category E",
    amtSold: 45,
  },
  {
    name: "Category F",
    amtSold: 2,
  },
  {
    name: "Category G",
    amtSold: 99,
  },
];

function SoldPerCategory({ hideShowAll }) {
  return (
    <Stack spacing={2}>
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
        <CustomBarChart data={data} />
      </Stack>
    </Stack>
  );
}

export default SoldPerCategory;
