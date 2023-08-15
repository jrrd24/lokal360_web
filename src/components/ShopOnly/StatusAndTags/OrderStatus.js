import React, { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";

function OrderStatus({ status, component: Icon }) {
  const [color, setColor] = useState("");
  const bgColor = color + "1A";
  useEffect(() => {
    if (status === "Pending Approval") {
      setColor("#F35B04");
    } else if (status === "Preparing") {
      setColor("#F18701");
    } else if (status === "Ready For Pick-Up") {
      setColor("#F7B801");
    } else if (status === "On Delivery") {
      setColor("#7678ED");
    } else if (status === "Complete") {
      setColor("#7A9163");
    } else if (status === "Cancelled") {
      setColor("#AB3130");
    } else if (status === "For Refund") {
      setColor("#231F20");
    } else {
      setColor("text");
    }
  }, [status]);

  return (
    <Stack
      direction={"row"}
      spacing={1}
      sx={{
        minHeight: 30,
        width: 180,
        backgroundColor: bgColor,
        margin: 1,
        marginColor: "#fff",
        borderRadius: 1,
        alignItems: "center",
        p: 0.5,
      }}
    >
      {/*Display Icon */}
      {Icon && (
        <Box sx={{ width: 30, justifyContent: "center" }}>
          {/**Has two size and color since not all icons from mui.
           * Some icons are from react icons */}
          <Icon size="25" color={color} sx={{ fontSize: 25, color: color }} />
        </Box>
      )}

      {/*Display Status */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
        }}
      >
        <Typography variant="status" color={color} sx={{ textAlign: "left" }}>
          {status}
        </Typography>
      </Box>
    </Stack>
  );
}

export default OrderStatus;
