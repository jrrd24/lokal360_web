import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Styles from "../../../../css/Styles.module.css";
import CustomLink from "../../../../components/CustomLink";
import ProductContainer from "../../../../components/ShopOnly/ProductContainer";
import MapData from "../../../../utils/MapData";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import { useRequestProcessor } from "../../../../hooks/useRequestProcessor";
import useAuth from "../../../../hooks/useAuth";
import { LoadingCircle } from "../../../../components/Loading/Loading";

function TopProducts({ hideShowAll }) {
  // API CALL GET TOP 5 PRODUCTS
  const { useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const { data, isLoading } = useCustomQuery(
    "getTopProducts",
    () =>
      axiosPrivate
        .get(`/api/product/top_products/?shopID=${auth.shopID}`)
        .then((res) => res.data),
    { enabled: true }
  );

  if (isLoading || !data || data.length === 0) {
    <LoadingCircle />;
  }

  return (
    <Stack spacing={2} sx={{ ...classes.main }}>
      {/*Section name */}
      <Stack spacing={3} direction={"row"} sx={{ ...classes.sectionName }}>
        <Typography variant="sectionTitle">Top Products</Typography>
        <Box
          className={`${Styles.grow}`}
          sx={{ display: hideShowAll ? "none" : "block" }}
        >
          <CustomLink to="/shop/products">{"See All"}</CustomLink>
        </Box>
      </Stack>

      {/*Content */}
      <Stack spacing={1} direction={"column"} sx={{ ...classes.content }}>
        {/*Mapping user data*/}
        <MapData
          inputData={data?.topProducts}
          component={ProductContainer}
          sortByField={"total_sold"}
          showUpTo={5}
          idName={"productID"}
        />
      </Stack>
    </Stack>
  );
}

const classes = {
  main: { width: "100%" },

  sectionName: { alignItems: "baseline", justifyContent: "space-between" },

  content: {
    width: "100%",
    "@media (max-width: 1516px)": {
      alignItems: "center",
      justifyContent: "center",
    },
  },
};

export default TopProducts;
