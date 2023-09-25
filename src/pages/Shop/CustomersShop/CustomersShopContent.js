import React from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import { Box } from "@mui/material";
import MyCustomers from "./CustomersShopComponents/MyCustomers";
import theme from "../../../Theme";

function CustomersShopContent() {
  return (
    <Box sx={{ ...theme.components.box.pageContainer }}>
      <PageInfoComponent
        PageName={"Customers"}
        Subtitle={"View and Manage your Shop's Customers"}
      />

      {/*Main Content*/}
      <Box sx={{ ...theme.components.box.mainContent }}>
        {/*(Left Side)*/}
        <Box sx={{ ...classes.leftContainer }}>
          {/*My Customers*/}
          <Box sx={{ ...classes.customersContainer }}>
            <MyCustomers />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const classes = {
  leftContainer: {
    ...theme.components.box.contentColumn,

    alignItems: "center",
    justifyContent: "center",
    minWidth: "100%",
  },

  customersContainer: {
    ...theme.components.box.sectionContainer,
    minWidth: "600px",
    "@media (max-width: 900px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },
};
export default CustomersShopContent;
