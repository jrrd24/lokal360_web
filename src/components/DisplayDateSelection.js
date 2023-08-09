import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import { DateRange } from "@mui/icons-material";
import { useDateContext } from "../contexts/DateContext";

function DisplayDateSelection() {
  const { range, rangeEnd } = useDateContext();

  return (
    <Stack
      spacing={1}
      direction={"row"}
      sx={{
        minWidth: 140,
        maxWidth: 160,
        maxHeight: 66,
        minHeight: 56,
        backgroundColor: "#F2F2F2",
        p: 1,
        alignItems: "center",
        justifyItems: "center",
        border: "1px solid #444",
        borderRadius: 2,
      }}
    >
      <Box>
        <DateRange />
      </Box>
      <Box>
        <Typography variant="h7">
          {range} {rangeEnd === null ? "" : "to"}{" "}
        </Typography>
        <Typography variant="h7">{rangeEnd} </Typography>
      </Box>
    </Stack>
  );
}

export default DisplayDateSelection;
