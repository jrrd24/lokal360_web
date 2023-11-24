import React, { useState } from "react";
import { Stack, Typography, Box } from "@mui/material";
import styles from "../../../../../css/Styles.module.css";
import ButtonEditImage from "../../../../../components/Buttons/ButtonEditImage";
import { UploadImage } from "../../../../../components/DialogBox/UploadImageDialog";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function LogoAndHeaderD({ control, logo, header, register, setValue }) {
  const [editLogo, setEditLogo] = useState(false);
  const [editHeader, setEditHeader] = useState(false);
  return (
    <div>
      <Stack spacing={3}>
        {/*Section Name */}
        <Stack direction={"row"} sx={{ ...classes.sectionName }}>
          <Typography variant="sectionTitleSmall">Logo and Header</Typography>
        </Stack>

        {/*Shop Logo */}
        <Stack spacing={1}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="sectionSubtitle">Logo</Typography>
            <ButtonEditImage showEditImage={setEditLogo} editImage={editLogo} />
          </Box>

          <Box>
            <Zoom>
              <img
                className={`${styles.grow}`}
                name={"ShopLogo"}
                src={logo || require("../../../../../assets/lokal360_Logo.png")}
                alt="Shop logo"
                loading="eager"
                style={{ height: 150, width: 150, ...classes.image }}
              />
            </Zoom>
          </Box>

          <UploadImage
            name={"shopLogo"}
            alt={"Shop Logo"}
            control={control}
            register={register}
            setValue={setValue}
            sx={{ display: editLogo ? "block" : "none" }}
          />
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
              <ButtonEditImage
                showEditImage={setEditHeader}
                editImage={editHeader}
              />
            </Box>
          </Box>

          <Box>
            <Zoom>
              <img
                className={`${styles.grow}`}
                name={"ShopHeader"}
                src={header || require("../../../../../assets/placeholder.png")}
                alt="Shop Header"
                style={{ height: 180, width: 320, ...classes.image }}
              />
            </Zoom>
          </Box>

          <UploadImage
            name={"shopHeader"}
            alt={"Shop Header"}
            control={control}
            register={register}
            setValue={setValue}
            sx={{ display: editHeader ? "block" : "none" }}
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
  sectionName: {
    alignItems: "baseline",
    justifyContent: "space-between",
  },
};
export default LogoAndHeaderD;
