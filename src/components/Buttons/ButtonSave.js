import React from "react";
import { Save } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

function ButtonSave({ handleOpen, sx }) {
  return (
    <Box sx={{ ...sx }}>
      <Button variant="contained" startIcon={<Save />} onClick={handleOpen}>
        <Typography
          variant="sectionTitleSmall"
          sx={{ color: "inherit", fontSize: 16 }}
        >
          Save
        </Typography>
      </Button>
    </Box>
  );
}

export default ButtonSave;
