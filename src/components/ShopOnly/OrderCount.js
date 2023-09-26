import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import styles from "../../css/Styles.module.css";
import NumberFormat from "../../utils/NumberFormat";
import theme from "../../Theme";

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
              <NumberFormat value={count} isShortened={true} />
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

function OrderStatusContainer({ component: Icon, color, isSelected, status }) {
  const mainColor = isSelected ? color : theme.palette.text.primary;
  const bgColor = isSelected ? mainColor + "1A" : mainColor + "08";
  const textColor = isSelected ? mainColor + "CC" : mainColor + "66";
  return (
    <Box
      className={`${styles.grow}`}
      sx={{
        height: 120,
        minWidth: 120,
        backgroundColor: bgColor,
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {Icon && (
        <Box p={2}>
          <Stack spacing={1} sx={{ display: "flex", alignItems: "center" }}>
            {/**Has two size and color since not all icons from mui.
             * Some icons are from react icons */}
            <Icon
              size="40"
              color={textColor}
              sx={{ fontSize: 40, color: textColor }}
            />
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

export { OrderCount, OrderStatusContainer };
