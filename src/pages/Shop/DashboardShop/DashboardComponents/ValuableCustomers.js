import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import CustomerContainer from "../../../../components/ShopOnly/CustomerContainer";
import Styles from "../../../../css/Styles.module.css";
import CustomLink from "../../../../components/CustomLink";

const data = [
  {
    id: 1,
    img: require("../../../../assets/avatars/128_9.png"),
    name: "User 1",
    orders: 27,
    total: 99999.99,
  },
  {
    id: 2,
    img: require("../../../../assets/avatars/128_8.png"),
    name: "User 2",
    orders: 19,
    total: 99999.99,
  },
  {
    id: 3,
    img: require("../../../../assets/avatars/128_1.png"),
    name: "User 3",
    orders: 22,
    total: 99999.99,
  },
  {
    id: 4,
    img: require("../../../../assets/avatars/128_6.png"),
    name: "User 4",
    orders: 16,
    total: 99999.99,
  },
  {
    id: 5,
    img: require("../../../../assets/avatars/128_12.png"),
    name: "User 5",
    orders: 13,
    total: 99999.99,
  },
  {
    id: 6,
    img: require("../../../../assets/avatars/128_14.png"),
    name: "User 6",
    orders: 15,
    total: 99999.99,
  },
];

function ValuableCustomers() {
  // Sort the data in descending order based on the 'orders' property
  const sortedData = data.slice().sort((a, b) => b.orders - a.orders);
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
        {sortedData.length > 0 ? (
          sortedData.map((userData) => (
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
