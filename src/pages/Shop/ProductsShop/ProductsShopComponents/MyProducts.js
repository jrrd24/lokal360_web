import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import ButtonAdd from "../../../../components/Buttons/ButtonAdd";
import DataGridProducts from "./DataGridProducts";

function MyProducts() {
  return (
    <Box
      sx={{
        maxWidth: "750px",
        "@media (max-width: 1516px)": {
          justifyContent: "center",
          maxWidth: "100%",
        },
      }}
    >
      <Stack spacing={2} direction={"column"}>
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
            "@media (max-width: 415px)": {
              gap: "6px",
            },
          }}
        >
          <Typography variant="sectionTitle">My Products</Typography>
          <ButtonAdd label={"New Products"} onClickAction={null} />
          {/*TODO: Add onClick for Button */}
        </Box>

        <DataGridProducts />
      </Stack>
    </Box>
  );
}

export default MyProducts;
