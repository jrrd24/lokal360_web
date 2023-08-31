import React from "react";
import { Box } from "@mui/material";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import theme from "../../../Theme";
import MyPromos from "./PromosShopComponents/MyPromos";

function PromosShopContent() {
  return (
    <Box
      sx={{
        ...theme.components.box.pageContainer,
      }}
    >
      <PageInfoComponent
        PageName={"Promos"}
        Subtitle={
          "Promos can be applied directly to a Product or be used in a Voucher"
        }
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
            <MyPromos />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PromosShopContent;
