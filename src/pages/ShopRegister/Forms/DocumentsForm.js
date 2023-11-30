import React from "react";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import { UploadImage } from "../../../components/DialogBox/UploadImageDialog";

function DocumentsForm({ control, register, setValue }) {
  const isMaxWidth = useMediaQuery("(max-width:900px)");
  return (
    <Stack spacing={3}>
      <Stack spacing={0}>
        <Typography variant="sectionTitleSmall">
          DTI Certificate of Business Name Registration
        </Typography>
        <UploadImage
          name={"DTI_COBNR"}
          alt={"DTI Certificate of Business Name Registration"}
          control={control}
          register={register}
          setValue={setValue}
          buttonSizeSmall={isMaxWidth}
          small
        />
      </Stack>

      <Stack spacing={0} sx={{ textAlign: "left" }}>
        <Typography variant="sectionTitleSmall">Other DTI Form</Typography>
        <Typography variant="subtitle1">
          Form 9, 13, or 39 whichever is applicable
        </Typography>
        <UploadImage
          name={"DTI_Other"}
          alt={"Other DTI Form"}
          control={control}
          register={register}
          setValue={setValue}
          buttonSizeSmall={isMaxWidth}
          small
        />
      </Stack>

      <Stack spacing={0}>
        <Typography variant="sectionTitleSmall">
          BIR Certificate of Registration
        </Typography>
        <UploadImage
          name={"BIR_COR"}
          alt={"BIR Certificate of Registration"}
          control={control}
          register={register}
          setValue={setValue}
          buttonSizeSmall={isMaxWidth}
          small
        />
      </Stack>

      <Stack spacing={0}>
        <Typography variant="sectionTitleSmall">
          Valid Government Issued ID (Front)
        </Typography>
        <UploadImage
          name={"gov_id_front"}
          alt={"Valid Government Issued ID"}
          control={control}
          register={register}
          setValue={setValue}
          buttonSizeSmall={isMaxWidth}
          small
        />
      </Stack>

      <Stack spacing={0}>
        <Typography variant="sectionTitleSmall">
          Valid Government Issued ID (Back)
        </Typography>
        <UploadImage
          name={"gov_id_back"}
          alt={"Valid Government Issued ID"}
          control={control}
          register={register}
          setValue={setValue}
          buttonSizeSmall={isMaxWidth}
          small
        />
      </Stack>

      <Stack spacing={0}>
        <Typography variant="sectionTitleSmall">
          Products List/ Store Menu
        </Typography>
        <UploadImage
          name={"products_list"}
          alt={"Products List"}
          control={control}
          register={register}
          setValue={setValue}
          buttonSizeSmall={isMaxWidth}
          small
        />
      </Stack>
    </Stack>
  );
}

export default DocumentsForm;
