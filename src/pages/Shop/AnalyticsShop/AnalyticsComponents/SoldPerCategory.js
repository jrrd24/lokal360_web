import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Styles from "../../../../css/Styles.module.css";
import CustomLink from "../../../../components/CustomLink";
import CustomBarChart from "../../../../components/CustomBarChart";

import { useRequestProcessor } from "../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import useAuth from "../../../../hooks/useAuth";
import { LoadingCircle } from "../../../../components/Loading/Loading";

function SoldPerCategory({ hideShowAll }) {
  // all shop categories (for shop)
  const { useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const { data: shopCategoryData, isLoading } = useCustomQuery(
    "getShopCategory",
    () =>
      axiosPrivate
        .get(`/api/shop_category/?shopID=${auth.shopID}`)
        .then((res) => res.data),
    { enabled: true }
  );

  if (isLoading) {
    return <LoadingCircle />;
  }

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      {/*Section header */}
      <Stack spacing={3} direction={"row"} sx={{ ...classes.sectionHeader }}>
        {/*Section Name */}
        <Typography variant="sectionTitle" sx={{ textAlign: "left" }}>
          Top Categories
        </Typography>

        {/*See All */}
        <Box
          className={`${Styles.grow}`}
          sx={{ ...classes.seeAll, display: hideShowAll ? "none" : "block" }}
        >
          <CustomLink to="/shop/products/shop_category">{"See All"}</CustomLink>
        </Box>
      </Stack>

      {/*Content */}
      <Stack spacing={1} direction={"column"} sx={{ ...classes.content }}>
        <CustomBarChart data={shopCategoryData} />
      </Stack>
    </Stack>
  );
}

const classes = {
  sectionHeader: {
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  seeAll: {
    minWidth: 60,
    textAlign: "right",
  },
  content: {
    "@media (max-width: 1516px)": {
      alignItems: "center",
      justifyContent: "center",
    },
  },
};
export default SoldPerCategory;
