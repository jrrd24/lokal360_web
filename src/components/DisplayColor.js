import React, { useState, useEffect } from "react";
import { SliderPicker } from "react-color";
import theme from "../Theme";
import { Box, Typography, TextField } from "@mui/material";

function DisplayColor({ color }) {
  const defaultColor = `${theme.palette.primary.main}`;
  const [background, setBackground] = useState(color || defaultColor);

  useEffect(() => {
    setBackground(color || defaultColor);
  }, [color, defaultColor]);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: background,
          width: "100%",
          height: "100px",
          marginBottom: "10px",
          borderRadius: 3,
        }}
      >
        <Typography
          variant="sectionTitleSmall"
          color={theme.palette.text.contrastText}
        >
          {background}
        </Typography>
      </Box>

      <TextField
        label="Hex Color"
        value={background}
        disabled={true}
        sx={{ my: "16px", width: "100%" }}
      />
    </Box>
  );
}

export default DisplayColor;
