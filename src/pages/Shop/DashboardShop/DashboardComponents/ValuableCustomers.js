import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import CustomerContainer from "../../../../components/ShopOnly/CustomerContainer";
import Styles from "../../../../css/Styles.module.css";
import CustomLink from "../../../../components/CustomLink";
import MapData from "../../../../utils/MapData";
import userData from "../../../../data/userData";

function ValuableCustomers() {
  return (
    <Stack spacing={2}>
      {/*Section name */}
      <Stack
        spacing={3}
        direction={"row"}
        sx={{ alignItems: "baseline", justifyContent: "space-between" }}
      >
        <Typography variant="sectionTitle">Valuable Customers</Typography>
        <Box className={`${Styles.grow}`}>
          <CustomLink to="/shop/customers">{"See All"}</CustomLink>
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

export default ValuableCustomers;
