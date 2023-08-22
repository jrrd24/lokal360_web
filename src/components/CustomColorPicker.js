import React, { useState } from "react";
import { SliderPicker } from "react-color";
import theme from "../Theme";
import { Box, Typography } from "@mui/material";

function CustomColorPicker({ displayOnly }) {
  const [background, setBackground] = useState(theme.palette.primary.main);

  const handleChangeComplete = (color) => {
    setBackground(color.hex);
  };

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
      {displayOnly ? (
        ""
      ) : (
        <SliderPicker
          color={background}
          onChangeComplete={handleChangeComplete}
        />
      )}
    </Box>
  );
}

export default CustomColorPicker;
