import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import CustomerContainer from "../../../../components/ShopOnly/CustomerContainer";
import Styles from "../../../../css/Styles.module.css";
import CustomLink from "../../../../components/CustomLink";
import MapData from "../../../../utils/MapData";
import userData from "../../../../data/userData";
import { useRequestProcessor } from "../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import useAuth from "../../../../hooks/useAuth";
import { LoadingCircle } from "../../../../components/Loading/Loading";

function ValuableCustomers() {
  //API CALL GET ALL CUSTOMERS
  const { useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const { data: userData, isLoading } = useCustomQuery(
    "getShopCustomer",
    () =>
      axiosPrivate
        .get(`/api/customer/?shopID=${auth.shopID}&limit=${5}`)
        .then((res) => res.data),
    { enabled: true }
  );

  if (isLoading) {
    return <LoadingCircle />;
  }

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      {/*Section name */}
      <Stack spacing={3} direction={"row"} sx={{ ...classes.sectionName }}>
        <Typography variant="sectionTitle">Valuable Customers</Typography>
        <Box className={`${Styles.grow}`}>
          <CustomLink to="/shop/customers">{"See All"}</CustomLink>
        </Box>
      </Stack>

      {/*Content */}
      <Stack spacing={1} direction={"column"} sx={{ ...classes.content }}>
        {/*Mapping user data*/}
        <MapData
          inputData={userData}
          component={CustomerContainer}
          sortByField={"orders"}
          showUpTo={5}
          idName={"shopperID"}
        />
      </Stack>
    </Stack>
  );
}

const classes = {
  sectionName: { alignItems: "baseline", justifyContent: "space-between" },
  content: {
    "@media (max-width: 1516px)": {
      alignItems: "center",
      justifyContent: "center",
    },
  },
};
export default ValuableCustomers;
