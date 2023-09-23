import { Stack, Box, Typography } from "@mui/material";
import React from "react";
import ButtonEditImage from "../../../../../../components/Buttons/ButtonEditImage";
import styles from "../../../../../../css/Styles.module.css";

function DVariationImage({ thumbnail }) {
  return (
    <Stack spacing={3}>
      {/*Section Name */}
      <Stack
        direction={"row"}
        sx={{ alignItems: "baseline", justifyContent: "space-between" }}
      >
        <Typography variant="sectionTitleSmall">Product Thumbnail</Typography>
      </Stack>

      {/*Shop Logo */}
      <Stack spacing={1}>
        <Box sx={{ display: "flex", justifyContent: "right" }}>
          <Box className={`${styles.grow}`}>
            <ButtonEditImage
              name={"varImage"}
              label={"Update Variation Image"}
            />
          </Box>
        </Box>

        <Box>
          <img
            className={`${styles.grow}`}
            name={"variationImage"}
            src={
              thumbnail || require("../../../../../../assets/lokal360_Logo.png")
            }
            alt="Variation Image"
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
    </Stack>
  );
}

export default DVariationImage;
