import { Stack, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ButtonEditImage from "../../../../../../components/Buttons/ButtonEditImage";
import styles from "../../../../../../css/Styles.module.css";
import { UploadImage } from "../../../../../../components/DialogBox/UploadImageDialog";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function DProductImage({ thumbnail, control, register, setValue }) {
  const [editThumbnail, setEditThumbnail] = useState(false);

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
                showEditImage={setEditThumbnail}
                editImage={editThumbnail}
              />
            </Box>
          </Box>

          <Box>
            <Zoom>
              <img
                className={`${styles.grow}`}
                name={"productThumbnail"}
                src={
                  thumbnail ||
                  require("../../../../../../assets/product_placeholder_big.jpg")
                }
                alt="Product Thumbnail"
                loading="eager"
                style={{ height: 150, width: 150, ...classes.image }}
              />
            </Zoom>
          </Box>

          <UploadImage
            name={"productThumbnail"}
            alt={"Thumbnail"}
            control={control}
            register={register}
            setValue={setValue}
            sx={{ display: editThumbnail ? "block" : "none" }}
          />
        </Stack>
      </Stack>
    </div>
  );
}

const classes = {
  image: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    border: "solid",
    borderColor: `#44444433`,
    borderWidth: 2,
    objectFit: "cover",
  },
};
export default DProductImage;
