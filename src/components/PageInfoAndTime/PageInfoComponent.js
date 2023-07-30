import React from "react";
import { Box, Typography, Stack, Hidden } from "@mui/material";
import DateTimeComponent from "./DateTimeComponent";

function PageInfoComponent({ PageName, Subtitle }) {
  return (
    <Box>
      {/*Shop Info */}
      <Box
        sx={{
          textAlign: "start",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "space-between", // Align content to the start and end of the flex container
          alignItems: "center", // Align the content vertically in the middle
          gap: "16px", // Set the gap between the Stack and DateTimeComponent
        }}
      >
        <Stack spacing={-1}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
            {PageName}
          </Typography>
          <Typography variant="subtitle1">{Subtitle}</Typography>
        </Stack>
        <Hidden only={['xs','sm']}>
          <DateTimeComponent />
        </Hidden>
      </Box>
    </Box>
  );
}

export default PageInfoComponent;
