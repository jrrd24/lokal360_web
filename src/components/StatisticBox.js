import React, { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import styles from "../css/Styles.module.css";
import { useDateContext } from "../contexts/DateContext";

function StatisticBox({ name, amt, prevAmt, isMoney }) {
  const [versus, setVersus] = useState("--");
  const [compareStatus, setCompareStatus] = useState("none");
  const { selectedRange } = useDateContext();
  const [percentage, setPercentage] = useState(
    (((amt - prevAmt) / prevAmt) * 100).toFixed(2)
  );

  // Recalculate the percentage whenever amt and prevAmt change
  useEffect(() => {
    const newPercentage = (((amt - prevAmt) / prevAmt) * 100).toFixed(2);
    setPercentage(newPercentage);
  }, [amt, prevAmt]);

  // For Money Format
  const formattedTotal = amt.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // For Number Format
  const formattedNum = amt.toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });

  //Set Versus
  useEffect(() => {
    if (selectedRange === 1) {
      setVersus("Yesterday");
    } else if (selectedRange === 2) {
      setVersus("Last Week");
    } else if (selectedRange === 3) {
      setVersus("Last Month");
    } else if (selectedRange === 4) {
      setVersus("Last Year");
    } else {
      setVersus("--");
      setPercentage(0);
    }
  }, [selectedRange]);

  //Set Versus
  useEffect(() => {
    if (selectedRange === 5) {
      setPercentage(0);
    } else {
      setPercentage((((amt - prevAmt) / prevAmt) * 100).toFixed(2));
    }
  }, [selectedRange]);

  //Set Compare Status
  useEffect(() => {
    if (amt > prevAmt) {
      setCompareStatus("increase");
    } else if (amt < prevAmt) {
      setCompareStatus("decrease");
    } else {
      setCompareStatus("none");
    }
  });

  return (
    <Box
      className={`${styles.sectionContainer}`}
      sx={{ width: 250, minHeight: 110, px: 2, py: 1, textAlign: "left" }}
    >
      <Stack spacing={1}>
        <Stack spacing={-0.5}>
          <Typography
            variant="body1"
            sx={{
              color: "#44444499",
              fontWeight: 700,
              fontSize: 20,
            }}
          >
            {name}
          </Typography>

          <Typography
            variant="sectionHeader"
            sx={{
              fontWeight: 700,
              fontSize: 24,
            }}
          >
            {isMoney ? "₱" : ""} {isMoney ? formattedTotal : formattedNum}
          </Typography>
        </Stack>

        <Stack
          direction={"row"}
          sx={{
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "#44444499", width: "100%", fontSize: 16 }}
          >
            vs {versus}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color:
                compareStatus === "increase" && percentage !== 0
                  ? "#7A9163"
                  : compareStatus === "decrease" && percentage !== 0
                  ? "#AB3130"
                  : "#444",
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            {percentage}%
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default StatisticBox;
