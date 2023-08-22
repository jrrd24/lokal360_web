import React from "react";
import { Box, FormLabel, Stack, Typography } from "@mui/material";
import styles from "../../../../css/Styles.module.css";

function LogoAndHeader() {
  return (
    <Stack spacing={3}>
      {/*Section Name */}
      <Stack
        direction={"row"}
        sx={{ alignItems: "baseline", justifyContent: "space-between" }}
      >
        <Typography variant="sectionTitleSmall">Logo and Header</Typography>
      </Stack>

      {/*Shop Logo */}
      <Stack spacing={1}>
        <Typography variant="sectionSubtitle">Logo</Typography>
        <Box className={`${styles.grow}`}>
          <img
            src={require("../../../../assets/lokal360_Logo.png")}
            alt="Shop logo"
            loading="eager"
            style={{
              backgroundColor: "#FFF",
              borderRadius: 10,
              height: 100,
              width: 100,
              border: "solid",
              borderColor: `#44444433`,
              borderWidth: 2,
            }}
          />
        </Box>
      </Stack>

      {/*Shop Header */}
      <Stack spacing={1}>
        <Typography variant="sectionSubtitle">Header</Typography>
        <Box className={`${styles.grow}`}>
          <img
            src={require("../../../../assets/placeholder.png")}
            alt="Shop logo"
            style={{
              backgroundColor: "#FFF",
              borderRadius: 10,
              height: 180,
              width: 320,
              border: "solid",
              borderColor: `#44444433`,
              borderWidth: 2,
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
}

export default LogoAndHeader;
