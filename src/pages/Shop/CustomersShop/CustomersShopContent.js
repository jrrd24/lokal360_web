import React from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import { Box } from "@mui/material";
import styles from "../../../css/Styles.module.css";
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
        <Box
          sx={{
            ...theme.components.box.contentColumn,
            "@media (max-width: 1516px)": {
              alignItems: "center",
              justifyContent: "center",
              minWidth: "100%",
            },
          }}
        >
          {/*My Customers*/}
          <Box
            sx={{
              ...theme.components.box.sectionContainer,
              minWidth: "600px",
              order: 1,
              "@media (max-width: 912px)": {
                order: 1,
                alignItems: "center",
                justifyContent: "center",
                minWidth: "100%",
              },
            }}
          >
            <MyCustomers />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CustomersShopContent;
