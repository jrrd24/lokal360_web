import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import DateSelection from "../../../../components/DateSelection";
import styles from "../../../../css/Styles.module.css";
import { GetDate } from "../../../../components/Utils/GetDate";

function StatisticsBoxes() {
  const [Range, setRange] = useState(<GetDate />);
  const [RangeEnd, setRangeEnd] = useState("");
  const handleRangeChange = (range) => {
    setRange(range);
  };
  const handleRangeEndChange = (rangeEnd) => {
    setRangeEnd(rangeEnd);
  };
  return (
    <Box
      sx={{
        maxWidth: "1120px",
        display: "flex",
        flexDirection: "row",
        gap: "32px",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        "@media (max-width: 1516px)": {
          alignItems: "center",
          justifyContent: "center",
          minWidth: "100%",
        },
      }}
    >
      <Stack
        spacing={1}
        direction={"row"}
        sx={{
          "@media (max-width: 1189px)": {
            display: "flex",
            flexDirection: "row",
            gap: "32px",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          },
          "@media (max-width: 913px)": {
            gap: "0px",
            minWidth: "100%",
          },
        }}
      >
        {/*Statistics Box Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            flexWrap: "wrap",
            order: 1,
            alignItems: "center",

            "@media (max-width: 1189px)": {
              order: 2,
              alignItems: "center",
              justifyContent: "center",
            },
            "@media (max-width: 913px)": {
              px: 1,
              height: "150px",
              overflow: "auto",
              flexDirection: "column",
              width: "100%",
            },
          }}
        >
          <Box
            className={`${styles.sectionContainer}`}
            sx={{ width: 250, minHeight: 110, p: 1 }}
          >
            HI IM BOX
          </Box>

          <Box
            className={`${styles.sectionContainer}`}
            sx={{ width: 250, minHeight: 110, p: 1 }}
          >
            HI IM BOX 2
          </Box>

          <Box
            className={`${styles.sectionContainer}`}
            sx={{ width: 250, minHeight: 110, p: 1 }}
          >
            HI IM BOX 3
          </Box>

          <Box
            className={`${styles.sectionContainer}`}
            sx={{ width: 250, minHeight: 110, p: 1 }}
          >
            HI IM BOX 4
          </Box>

          <Box
            className={`${styles.sectionContainer}`}
            sx={{ width: 250, minHeight: 110, p: 1 }}
          >
            HI IM BOX 5
          </Box>

          <Box
            className={`${styles.sectionContainer}`}
            sx={{ width: 250, minHeight: 110, p: 1 }}
          >
            HI IM BOX 6
          </Box>
        </Box>
        {/*Date SelectContainer */}
        <Box
          sx={{
            order: 2,
            "@media (max-width: 1189px)": {
              order: 1,
            },
          }}
        >
          <DateSelection
            onRangeChange={handleRangeChange}
            onRangeEndChange={handleRangeEndChange}
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default StatisticsBoxes;
