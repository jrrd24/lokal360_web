import React, { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import theme from "../../../Theme";

function OrderStatus({ status, component: Icon }) {
  const [color, setColor] = useState("");
  const bgColor = color + "1A";
  useEffect(() => {
    if (status === "Pending Approval") {
      setColor(`${theme.palette.status.pending}`);
    } else if (status === "Preparing") {
      setColor(`${theme.palette.status.preparing}`);
    } else if (status === "Ready For Pick-Up") {
      setColor(`${theme.palette.status.pickUp}`);
    } else if (status === "On Delivery") {
      setColor(`${theme.palette.status.delivery}`);
    } else if (status === "Complete") {
      setColor(`${theme.palette.status.complete}`);
    } else if (status === "Cancelled") {
      setColor(`${theme.palette.status.cancel}`);
    } else if (status === "For Refund") {
      setColor(`${theme.palette.status.refund}`);
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
        display: "flex",
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
