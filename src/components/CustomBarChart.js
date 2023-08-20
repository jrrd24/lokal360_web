import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Stack } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import TruncateString from "../utils/TruncateString";
import NumberFormat from "../utils/NumberFormat";
import Styles from "../css/Styles.module.css";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 30,
  borderRadius: 5,
  backgroundColor: "#FAFAFA",

  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
  },
}));

const getColorForIndex = (index) => {
  if (index === 0) return "#F35B04";
  if (index === 1) return "#F18701";
  if (index === 2) return "#F7B801";
  return "#7678ED";
};

const CustomBarChart = ({ data }) => {
  // Sort the data in descending order based on the 'amt_sold' property
  const sortedData = data.slice().sort((a, b) => b.amt_sold - a.amt_sold);
  const sumAmtSold = sortedData.reduce(
    (sum, orderedData) => sum + orderedData.amt_sold,
    0
  );

  return (
    <Box sx={{ width: "100%", textAlign: "left" }}>
      {sortedData.map((orderedData, index) => {
        const percentage = ((orderedData.amt_sold / sumAmtSold) * 100).toFixed(
          2
        );

        return (
          <Box
            key={orderedData.name}
            className={`${Styles.changeBG}`}
            sx={{ p: 2, width: "100%" }}
          >
            <Stack
              spacing={0}
              direction={"column"}
              alignItems="flex-start"
              sx={{ pb: 0.5 }}
            >
              <Typography variant="sectionTitleSmall">
                <TruncateString str={orderedData.name} n={30} />
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#44444499", textAlign: "start" }}
              >
                Total Sales:{" "}
                <Typography component={"span"} sx={{ fontWeight: 700 }}>
                  <NumberFormat value={orderedData.amt_sold} /> &nbsp; | &nbsp;
                  {percentage}%
                </Typography>
              </Typography>
            </Stack>
            <BorderLinearProgress
              key={orderedData.name}
              variant="determinate"
              value={parseFloat(percentage)} // Parse the percentage to a float
              sx={{
                [`& .${linearProgressClasses.bar}`]: {
                  backgroundColor: getColorForIndex(index),
                },
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default CustomBarChart;
