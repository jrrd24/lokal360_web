import React from "react";
import DataGridAds from "./DataGridAds";
import { Box, Typography, Stack } from "@mui/material";
import theme from "../../../../Theme";
import ButtonAdd from "../../../../components/Buttons/ButtonAdd";

function MyLokalAds() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={2} direction={"column"}>
        {/*Section Name */}
        <Box
          direction={"row"}
          sx={{
            ...theme.components.box.sectionName,
            "@media (max-width: 415px)": {
              gap: "6px",
            },
          }}
        >
          <Typography variant="sectionTitle">My Lokal Ads</Typography>
          <ButtonAdd label={"New Advertisment"} onClickAction={null} />

          {/*TODO: Add onClick for Button */}
        </Box>
        <Typography variant="seeAll" sx={{ textAlign: "left" }}>
          To search for an Advertisment, Click <b>Filters</b>, then{" "}
          <b>Select a Column</b>, then type what you are looking for in{" "}
          <b>Value</b>
        </Typography>

        <DataGridAds />
      </Stack>
    </Box>
  );
}

export default MyLokalAds;
