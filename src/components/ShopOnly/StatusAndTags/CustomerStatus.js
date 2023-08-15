import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import theme from "../../../Theme";

function CustomerStatus({ status }) {
  const [colorType, setColorType] = useState("");

  useEffect(() => {
    if (status === "Follower") {
      setColorType("primary");
    } else if (status === "Reported") {
      setColorType("warning");
    } else if (status === "Banned") {
      setColorType("danger");
    } else {
      setColorType("text");
    }
  }, [status]);

  const color = colorType ? theme.palette[colorType].main : "inherit";
  return (
    <Box
      sx={{
        minWidth: 100,
        p: 0.5,
        backgroundColor: color,
      }}
    >
      <Typography variant="status" color="#fff">
        {status}
      </Typography>
    </Box>
  );
}

export default CustomerStatus;
