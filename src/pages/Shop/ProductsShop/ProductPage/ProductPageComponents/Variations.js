import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import ButtonAdd from "../../../../../components/Buttons/ButtonAdd";
import theme from "../../../../../Theme";
import DataGridVariations from "./DataGridVariations";

function Variations({ variations }) {
  return (
    <Stack spacing={3} width={"100%"}>
      {/*Section Name */}
      <Box direction={"row"} sx={{ ...theme.components.box.sectionName }}>
        <Typography variant="sectionTitle">Variations</Typography>
        <ButtonAdd label={"New Variation"} onClickAction={null} />
        {/*TODO: Add onClick for Button */}
      </Box>

      <Box sx={{ alignSelf: "center", width: "100%" }}>
        <DataGridVariations data={variations} />
      </Box>
    </Stack>
  );
}

export default Variations;
