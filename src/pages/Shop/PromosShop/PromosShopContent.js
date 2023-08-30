import React from "react";
import { Box } from "@mui/material";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import theme from "../../../Theme";

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
    </Box>
  );
}

export default PromosShopContent;
