import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import theme from "../../../../Theme";
import DataGridPromos from "./DataGridPromos";
import ButtonAdd from "../../../../components/Buttons/ButtonAdd";

function MyPromos() {
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
        <Box sx={{ ...theme.components.box.sectionName }}>
          <Typography variant="sectionTitle">My Promos</Typography>
          <ButtonAdd label={"New Promo"} onClickAction={null} />
        </Box>

        <Typography variant="seeAll" sx={{ textAlign: "left" }}>
          To search for a Promo, Click <b>Filters</b>, then{" "}
          <b>Select a Column</b>, then type what you are looking for in{" "}
          <b>Value</b>
        </Typography>

        <DataGridPromos />
      </Stack>
    </Box>
  );
}

export default MyPromos;
