import React from "react";
import userData from "../DummyCustomerData";
import { Box, Stack, Typography } from "@mui/material";
import CustomerContainer from "../../../../components/ShopOnly/CustomerContainer";
import Styles from "../../../../css/Styles.module.css";
import CustomLink from "../../../../components/CustomLink";

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
        {userData.length > 0 ? (
          userData.map((userData) => (
            <CustomerContainer
              key={userData.id}
              img={userData.img}
              name={userData.name}
              orders={userData.orders}
              total={userData.total}
            />
          ))
        ) : (
          <Typography>No Record Found</Typography>
        )}
      </Stack>
    </Stack>
  );
}

export default ValuableCustomers;
