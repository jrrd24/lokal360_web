import React from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import { Box, Avatar } from "@mui/material";
import styles from "../../../css/containerStyles.module.css";
import DummyText from "./DummyText";

function DashboardShopContent() {
  return (
    <Box sx={{ backgroundColor: "transparent" }}>
      <PageInfoComponent
        PageName={"Shop Dashboard"}
        Subtitle={"Welcome, {Shop Owner Name}"}
      />

      {/*Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "32px",
          flexWrap: "wrap",
        }}
      >
        {/*User and Shop Info */}
        <Box
          className={`${styles.sectionContainer}`}
          sx={{
            height: "350px",
            maxWidth: "1300px",
            order: 1,
            "@media (max-width: 600px)": {
              order: 2,
            },
          }}
        >
          <Avatar>H</Avatar>
        </Box>

        {/*Order Summary */}
        <Box
          className={`${styles.sectionContainer}`}
          sx={{
            maxWidth: "600px",
            order: 1,
            "@media (max-width: 600px)": {
              order: 1,
            },
          }}
        >
          <DummyText />
        </Box>

        {/*Valuable Customers */}
        <Box
          className={`${styles.sectionContainer}`}
          sx={{
            height: "350px",
            maxWidth: "300px",
            order: 3,
            "@media (max-width: 600px)": {
              order: 3,
            },
          }}
        >
          Valuable Customers
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardShopContent;
