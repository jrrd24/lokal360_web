import { Stack, Box, Typography } from "@mui/material";
import React from "react";
import ButtonEditImage from "../../../../../../components/Buttons/ButtonEditImage";
import styles from "../../../../../../css/Styles.module.css";

function DProductImage({ thumbnail }) {
  return (
    <div>
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
                name={"productThumbnail"}
                label={"Update Product Thumbnail"}
              />
            </Box>
          </Box>

          <Box>
            <img
              className={`${styles.grow}`}
              name={"productThumbnail"}
              src={
                thumbnail ||
                require("../../../../../../assets/lokal360_Logo.png")
              }
              alt="Product Thumbnail"
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
    </div>
  );
}

export default DProductImage;
