import { Button, CircularProgress, Typography } from "@mui/material";
import React from "react";
import { Download } from "@mui/icons-material";

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
      sx={{ ...classes.typographyContainer }}
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

const classes = {
  typographyContainer: {
    alignSelf: "left",
    "@media (max-width: 600px)": {
      alignSelf: "center",
    },
    width: 180,
  },
};

export default ButtonDownloadChart;
