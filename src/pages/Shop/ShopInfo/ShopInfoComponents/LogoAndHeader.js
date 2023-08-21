import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import styles from "../../../../css/Styles.module.css";

function LogoAndHeader() {
  return (
    <Box>
      {/*Section Name */}
      <Stack
        direction={"row"}
        sx={{ alignItems: "baseline", justifyContent: "space-between" }}
      >
        <Typography variant="sectionTitleSmall">Logo and Header</Typography>
      </Stack>

      {/*Shop Logo */}
      <Box className={`${styles.grow}`}>
        <img
          src={require("../../../../assets/lokal360_Logo.png")}
          alt="Shop logo"
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
    </Box>
  );
}

export default LogoAndHeader;
