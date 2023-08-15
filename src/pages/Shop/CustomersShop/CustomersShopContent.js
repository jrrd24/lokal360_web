import React from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import { Box } from "@mui/material";
import styles from "../../../css/Styles.module.css";
import MyCustomers from "./CustomersShopComponents/MyCustomers";
function CustomersShopContent() {
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        maxWidth: 2250,
        alignItems: "center",
        justifyContent: "center",
        pb: 5,
      }}
    >
      <PageInfoComponent
        PageName={"Customers"}
        Subtitle={"View and Manage your Shop's Customers"}
      />

      {/*Page Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "32px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/*Main Content*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "32px",
            flexWrap: "wrap",
            order: 2,
          }}
        >
          {/*(Left Side)*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              flexWrap: "wrap",
              order: 3,
              "@media (max-width: 1516px)": {
                alignItems: "center",
                justifyContent: "center",
                minWidth: "100%",
              },
            }}
          >
            {/*My Customers*/}
            <Box
              className={`${styles.sectionContainer}`}
              sx={{
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
    </Box>
  );
}

export default CustomersShopContent;
