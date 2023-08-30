import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import ButtonAdd from "../../../../components/Buttons/ButtonAdd";
import DataGridProducts from "./DataGridProducts";
import theme from "../../../../Theme";

function MyProducts() {
  return (
    <Box
      sx={{
        width: "750px",
        "@media (max-width: 1516px)": {
          justifyContent: "center",
          width: "100%",
        },
      }}
    >
      <Stack spacing={2} direction={"column"}>
        {/*Section Name */}
        <Box
          direction={"row"}
          sx={{ ...theme.components.box.sectionName.withButton }}
        >
          <Typography variant="sectionTitle">My Products</Typography>
          <ButtonAdd label={"New Products"} onClickAction={null} />
          {/*TODO: Add onClick for Button */}
        </Box>
        <Typography variant="seeAll" sx={{ textAlign: "left" }}>
          To search for a Product, Click <b>Filters</b>, then{" "}
          <b>Select a Column</b>, then type what you are looking for in{" "}
          <b>Value</b>
        </Typography>

        <Box sx={{ alignSelf: "center" }}>
          <DataGridProducts />
        </Box>
      </Stack>
    </Box>
  );
}

export default MyProducts;
