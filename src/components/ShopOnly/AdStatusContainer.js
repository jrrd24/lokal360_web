import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import styles from "../../css/Styles.module.css";
import NumberFormat from "../../utils/NumberFormat";

function AdStatusContainer({ color, count, status }) {
  const bgColor = color + "1A";
  return (
    <Box
      className={`${styles.grow}`}
      sx={{
        height: 100,
        minWidth: 200,
        backgroundColor: bgColor,
        borderRadius: 5,
      }}
    >
      <Box p={2}>
        <Stack spacing={0.5} sx={{ alignItems: "center" }}>
          <Typography variant="sectionTitle" sx={{ color: color }}>
            <NumberFormat value={count} isShortened={true} />
          </Typography>
          <Typography variant="subtitle" sx={{ lineHeight: "1.2", width: 150 }}>
            {status}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default AdStatusContainer;
