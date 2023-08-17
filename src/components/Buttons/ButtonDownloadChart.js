import { Button, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { Download, Height } from "@mui/icons-material";

function ButtonDownloadChart({ handleOnClick, isLoading }) {
  return (
    <Button
      variant="outlined"
      startIcon={
        isLoading ? (
          <CircularProgress color="inherit" size="1rem" />
        ) : (
          <Download />
        )
      }
      onClick={handleOnClick}
      sx={{
        alignSelf: "left",
        "@media (max-width: 600px)": {
          alignSelf: "center",
        },
        width: 180,
      }}
    >
      <Typography
        variant="sectionTitleSmall"
        sx={{ color: "inherit", fontSize: 16 }}
      >
        {isLoading ? "Downloading..." : " Download Chart"}
      </Typography>
    </Button>
  );
}

export default ButtonDownloadChart;
