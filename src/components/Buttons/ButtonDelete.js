import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import theme from "../../Theme";

function ButtonDelete({ onClick, sx, type }) {
  return (
    <Box sx={{ ...sx }}>
      <Button
        type={type}
        startIcon={<Delete />}
        variant="outlined"
        onClick={onClick}
        color="danger"
      >
        <Typography
          variant="sectionTitleSmall"
          sx={{ color: "inherit", fontSize: 16 }}
        >
          Delete
        </Typography>
      </Button>
    </Box>
  );
}

export default ButtonDelete;
