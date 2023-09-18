import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import theme from "../../../Theme";

function AdsStatus({ status }) {
  const [color, setColor] = useState("");
  const bgColor = color + "1A";
  useEffect(() => {
    if (status === "Active") {
      setColor(`${theme.palette.status.delivery}`);
    } else if (status === "Pending Approval") {
      setColor(`${theme.palette.status.pending}`);
    } else if (status === "Approved") {
      setColor(`${theme.palette.status.complete}`);
    } else if (status === "Rejected") {
      setColor(`${theme.palette.status.cancel}`);
    } else if (status === "Expired") {
      setColor(`${theme.palette.status.refund}`);
    } else {
      setColor("text");
    }
  }, [status]);
  return (
    <Box
      sx={{
        minHeight: 30,
        width: 160,
        p: 1,
        m: 1,
        borderRadius: 3,
        backgroundColor: bgColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="status" color={color}>
        {status}
      </Typography>
    </Box>
  );
}

export default AdsStatus;
