import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import theme from "../../../Theme";

export function ProductInventoryStatus({ status }) {
  const [colorType, setColorType] = useState("");

  useEffect(() => {
    if (status === "In Stock") {
      setColorType("success");
    } else if (status === "Low Stock") {
      setColorType("warning");
    } else if (status === "Out Of Stock") {
      setColorType("danger");
    } else {
      setColorType("text");
    }
  }, [status]);

  const color = colorType ? theme.palette[colorType].main : "inherit";
  return (
    <Box
      sx={{
        minWidth: 120,
        border: "solid",
        borderWidth: 1,
        p: 0.5,
        borderColor: color,
        backgroundColor: `${theme.palette.background.paper}`,
      }}
    >
      <Typography variant="status" color={color}>
        {status}
      </Typography>
    </Box>
  );
}
