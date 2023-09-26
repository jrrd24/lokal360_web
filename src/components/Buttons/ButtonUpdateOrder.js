import React from "react";
import { Box, Button, Typography } from "@mui/material";

function ButtonUpdateOrder({ sx, onClick, disabled, currentStatus, hide }) {
  return (
    <Box sx={{ ...sx, display: hide ? "none" : "block" }}>
      <Button variant="contained" onClick={onClick} disabled={disabled}>
        <Typography
          variant="sectionTitleSmall"
          sx={{ color: "inherit", fontSize: 16 }}
        >
          {currentStatus}
        </Typography>
      </Button>
    </Box>
  );
}

export default ButtonUpdateOrder;
