import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ButtonAdd from "../../../../components/Buttons/ButtonAdd";

function FeaturedProducts() {
  return (
    <Stack
      spacing={2}
      direction={"column"}
      sx={{
        "@media (max-width: 1516px)": {
          justifyContent: "center",
          maxWidth: "100%",
        },
      }}
    >
      {/*Section Name */}
      <Box
        direction={"row"}
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          flexWrap: "wrap",
          alignItems: "baseline",
          justifyContent: "flex-start",
          "@media (max-width: 500px)": {
            gap: "0px",
          },
        }}
      >
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
          justifyContent: "flex-start",
          maxWidth: "100%",
          height: "275px",
          overflow: "auto",
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
