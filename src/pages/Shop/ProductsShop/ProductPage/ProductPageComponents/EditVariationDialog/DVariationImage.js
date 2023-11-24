import { Stack, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ButtonEditImage from "../../../../../../components/Buttons/ButtonEditImage";
import styles from "../../../../../../css/Styles.module.css";
import { UploadImage } from "../../../../../../components/DialogBox/UploadImageDialog";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function DVariationImage({ thumbnail, control, register, setValue }) {
  const [editThumbnail, setEditThumbnail] = useState(false);
  return (
    <Stack spacing={3}>
      {/*Section Name */}
      <Stack
        direction={"row"}
        sx={{ alignItems: "baseline", justifyContent: "space-between" }}
      >
        <Typography variant="sectionTitleSmall">Variation Thumbnail</Typography>
      </Stack>

      {/*Shop Logo */}
      <Stack spacing={1}>
        <Box sx={{ display: "flex", justifyContent: "right" }}>
          <Box className={`${styles.grow}`}>
            <ButtonEditImage
              showEditImage={setEditThumbnail}
              editImage={editThumbnail}
            />
          </Box>
        </Box>

        <Box>
          <Zoom>
            <img
              className={`${styles.grow}`}
              name={"variationImage"}
              src={
                thumbnail ||
                require("../../../../../../assets/product_placeholder_big.jpg")
              }
              alt="Variation"
              loading="eager"
              style={{
                backgroundColor: "#FFF",
                borderRadius: 10,
                height: 100,
                width: 100,
                border: "solid",
                borderColor: `#44444433`,
                borderWidth: 2,
                objectFit: "cover",
              }}
            />
          </Zoom>
        </Box>

        <UploadImage
          name={"variationThumbnail"}
          alt={"Thumbnail"}
          control={control}
          register={register}
          setValue={setValue}
          sx={{ display: editThumbnail ? "block" : "none" }}
        />
      </Stack>
    </Stack>
  );
}

export default DVariationImage;
