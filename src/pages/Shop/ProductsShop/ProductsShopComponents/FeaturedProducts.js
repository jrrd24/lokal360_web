import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ButtonAdd from "../../../../components/Buttons/ButtonAdd";
import theme from "../../../../Theme";

function FeaturedProducts() {
  return (
    <Stack spacing={2} direction={"column"} sx={{ width: "100%" }}>
      {/*Section Name */}
      <Box direction={"row"} sx={{ ...theme.components.box.sectionName }}>
        <Typography variant="sectionTitle">Featured Products</Typography>
        <ButtonAdd label={"Add / Edit Featured"} onClickAction={null} />
        {/*TODO: Add onClick for Button */}
      </Box>

      {/*TODO: Add vouchers here */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          flexWrap: "wrap",
          alignItems: "flex-start",
          width: "100%",
          overflow: "auto",
          height: 275,
          "@media (max-width: 709px)": {
            justifyContent: "flex-start",
          },
        }}
      >
        <Box sx={{ height: 265, width: 180, backgroundColor: "#ffbb03" }} />
        <Box sx={{ height: 265, width: 180, backgroundColor: "#ffd14d" }} />
        <Box sx={{ height: 265, width: 180, backgroundColor: "#6ef" }} />
      </Box>
    </Stack>
  );
}

export default FeaturedProducts;
