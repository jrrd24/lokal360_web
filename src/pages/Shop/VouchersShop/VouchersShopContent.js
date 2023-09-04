import React from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import { Box } from "@mui/material";
import theme from "../../../Theme";
import MyVouchers from "./VouchersShopComponents/MyVouchers";

function VouchersShopContent() {
  return (
    <Box sx={{ ...theme.components.box.pageContainer }}>
      <PageInfoComponent
        PageName={"Vouchers"}
        Subtitle={"View and Manage your Vouchers"}
        isPartner={true}
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
            <MyVouchers />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default VouchersShopContent;
