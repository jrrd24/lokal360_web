import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import styles from "../../css/Styles.module.css";

function OrderCount({ component: Icon, color, count, status }) {
  const bgColor = color + "1A";
  return (
    <Box
      className={`${styles.grow}`}
      sx={{
        height: 165,
        minWidth: 140,
        backgroundColor: bgColor,
        borderRadius: 2,
      }}
    >
      {Icon && (
        <Box p={2}>
          <Stack spacing={1} sx={{ alignItems: "center" }}>
            {/**Has two size and color since not all icons from mui.
             * Some icons are from react icons */}
            <Icon size="40" color={color} sx={{ fontSize: 40, color: color }} />
            <Typography variant="sectionTitle" sx={{ color: color }}>
              {count}
            </Typography>
            <Typography
              variant="subtitle"
              sx={{ lineHeight: "1.2", width: 95 }}
            >
              {status}
            </Typography>
          </Stack>
        </Box>
      )}
    </Box>
  );
}

export default OrderCount;
