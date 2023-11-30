import React from "react";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { UploadImage } from "../../../components/DialogBox/UploadImageDialog";

function DocumentsForm({
  control,
  register,
  setValue,
  getValues,
  onSubmit,
  handleBack,
  handleNext,
  activeStep,
  showAlert,
}) {
  const isMaxWidth = useMediaQuery("(max-width:900px)");

  const handleSubmit = () => {
    const formData = {
      DTI_COBNR: getValues("DTI_COBNR"),
      DTI_Other: getValues("DTI_Other"),
      BIR_COR: getValues("BIR_COR"),
      gov_id_front: getValues("gov_id_front"),
      gov_id_back: getValues("gov_id_back"),
      products_list: getValues("products_list"),
    };

    // Check if any of the form values is a FileList with length 0
    const hasEmptyFiles = Object.values(formData).some(
      (value) => value instanceof FileList && value.length === 0
    );

    // Proceed to the next step only if there are no empty FileLists
    if (!hasEmptyFiles) {
      handleNext();
      onSubmit(formData);
    } else {
      showAlert("error", "All Fields Are Required");
    }
  };

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

      {/**Buttons */}
      <Box
        sx={{
          display: "flex",
          alignSelf: "flex-end",
          gap: 2,
          "@media (max-width: 600px)": { alignSelf: "center" },
        }}
      >
        <Button
          variant="outlined"
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          <Typography
            variant="sectionTitleSmall"
            sx={{ color: "inherit", fontSize: 16 }}
          >
            Back
          </Typography>
        </Button>

        <Button variant="contained" onClick={handleSubmit}>
          <Typography
            variant="sectionTitleSmall"
            sx={{ color: "inherit", fontSize: 16 }}
          >
            Next
          </Typography>
        </Button>
      </Box>
    </Stack>
  );
}

export default DocumentsForm;
