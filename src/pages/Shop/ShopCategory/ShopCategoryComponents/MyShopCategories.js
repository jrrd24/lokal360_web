import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import ButtonAdd from "../../../../components/Buttons/ButtonAdd";
import DataGridCategories from "./DataGridCategories";

function MyShopCategories() {
  return (
    <Box
      sx={{
        maxWidth: "600px",
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
          <Typography variant="sectionTitle">My Categories</Typography>
          <ButtonAdd label={"New Category"} onClickAction={null} />

          {/*TODO: Add onClick for Button */}
        </Box>
        <Typography variant="seeAll" sx={{ textAlign: "left" }}>
          To search for a Category, Click <b>Filters</b>, then{" "}
          <b>Select a Column</b>, then type what you are looking for in{" "}
          <b>Value</b>
        </Typography>

        <DataGridCategories />
      </Stack>
    </Box>
  );
}

export default MyShopCategories;
