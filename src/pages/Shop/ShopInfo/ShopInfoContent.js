import React from "react";
import { Box } from "@mui/material";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import styles from "../../../css/Styles.module.css";
import BasicShopInfo from "./ShopInfoComponents/BasicShopInfo";
import DisplayShopInfo from "./ShopInfoComponents/DisplayShopInfo";
import ShopAddress from "./ShopInfoComponents/ShopAddress";
import ContactInfo from "./ShopInfoComponents/ContactInfo";
import OperatingHours from "./ShopInfoComponents/OperatingHours";
import LogoAndHeader from "./ShopInfoComponents/LogoAndHeader";
import SelectColor from "./ShopInfoComponents/SelectColor";

function ShopInfoContent() {
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
        PageName={"Shop Information"}
        Subtitle={"View and Manage your Basic Shop Information"}
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
            maxWidth: "600px",
            "@media (max-width: 912px)": {
              maxWidth: "100%",
            },
          }}
        >
          {/*(Left Side)*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              flexWrap: "wrap",
              "@media (max-width: 1516px)": {
                alignItems: "center",
                justifyContent: "center",
                minWidth: "100%",
              },
            }}
          >
            {/*Display Shop Info*/}
            <Box
              sx={{
                minWidth: "600px",

                "@media (max-width: 912px)": {
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "100%",
                },
              }}
            >
              <DisplayShopInfo />
            </Box>

            {/*Basic Shop Info*/}
            <Box
              className={`${styles.sectionContainer}`}
              sx={{
                minWidth: "600px",

                "@media (max-width: 912px)": {
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "100%",
                },
              }}
            >
              <BasicShopInfo />
            </Box>

            {/*Address Info*/}
            <Box
              className={`${styles.sectionContainer}`}
              sx={{
                minWidth: "600px",

                "@media (max-width: 912px)": {
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "100%",
                },
              }}
            >
              <ShopAddress />
            </Box>

            {/*Contact Info*/}
            <Box
              className={`${styles.sectionContainer}`}
              sx={{
                minWidth: "600px",

                "@media (max-width: 912px)": {
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "100%",
                },
              }}
            >
              <ContactInfo />
            </Box>

            {/*Operating hours*/}
            <Box
              className={`${styles.sectionContainer}`}
              sx={{
                minWidth: "600px",

                "@media (max-width: 912px)": {
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "100%",
                },
              }}
            >
              <OperatingHours />
            </Box>

            {/*Logo and Header*/}
            <Box
              className={`${styles.sectionContainer}`}
              sx={{
                minWidth: "600px",

                "@media (max-width: 912px)": {
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "100%",
                },
              }}
            >
              <LogoAndHeader />
            </Box>

            {/*Color*/}
            <Box
              className={`${styles.sectionContainer}`}
              sx={{
                minWidth: "600px",

                "@media (max-width: 912px)": {
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "100%",
                },
              }}
            >
              <SelectColor />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ShopInfoContent;
