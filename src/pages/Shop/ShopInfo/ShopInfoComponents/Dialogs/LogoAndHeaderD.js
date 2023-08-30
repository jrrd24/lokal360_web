import React from "react";
import { Stack, Typography, Box, Button } from "@mui/material";
import styles from "../../../../../css/Styles.module.css";
import UploadImageDialog from "../../../../../components/DialogBox/UploadImageDialog";
import ButtonEditImage from "../../../../../components/Buttons/ButtonEditImage";

function LogoAndHeaderD({ control, logo, header }) {
  return (
    <div>
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
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="sectionSubtitle">Logo</Typography>

            <Box className={`${styles.grow}`}>
              <ButtonEditImage name={"logo"} label={"Update Shop Logo"} />
            </Box>
          </Box>

          <Box>
            <img
              className={`${styles.grow}`}
              name={"ShopLogo"}
              src={logo}
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="sectionSubtitle">Header</Typography>

            <Box className={`${styles.grow}`}>
              <ButtonEditImage name={"header"} label={"Update Shop Header"} />
            </Box>
          </Box>
          <Box>
            <img
              className={`${styles.grow}`}
              name={"ShopHeader"}
              src={header}
              alt="Shop Header"
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
    </div>
  );
}

export default LogoAndHeaderD;
