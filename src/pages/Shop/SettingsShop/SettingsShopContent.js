import React from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import { Box } from "@mui/material";
import theme from "../../../Theme";
import UnderContruction from "../../../components/Loading/UnderContruction";

function SettingsShopContent() {
  return (
    <Box sx={{ ...theme.components.box.pageContainer }}>
      <PageInfoComponent
        PageName={"Settings"}
        Subtitle={"View Shop Settings"}
      />
      <UnderContruction />
    </Box>
  );
}

export default SettingsShopContent;
