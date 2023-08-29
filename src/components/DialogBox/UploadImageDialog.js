import React, { useState } from "react";
import {
  Typography,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Stack,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useForm } from "react-hook-form";
import ButtonCloseDialog from "../Buttons/ButtonCloseDialog";
import theme from "../../Theme";
import { Image } from "@mui/icons-material";

function UploadImageDialog({
  open,
  handleClose,
  handleSaveImg,
  name,
  label,
  isSmScreen,
}) {
  const [uploadError, setUploadError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  // For React Hook Form
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
    trigger,
    reset,
    register,
  } = useForm();

  const bgColor = `${theme.palette.background.paper}`;
  const textColor = `${theme.palette.primary.main}`;

  // Handle image change
  const handleImageChange = (e) => {
    setUploadError(false);
    setSelectedImage(null);
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size <= 2 * 1024 * 1024) {
      // 2MB in bytes
      setSelectedImage(URL.createObjectURL(selectedFile));
    } else {
      setUploadError(true);
    }
  };

  const handleCloseDialog = () => {
    setSelectedImage(null);
    setUploadError(false);
    handleClose();
  };

  return (
    <Dialog
      fullScreen={isSmScreen}
      fullWidth={true}
      maxWidth={"sm"}
      open={open}
      onClose={handleClose}
      hideBackdrop={true}
      sx={{
        backgroundColor: "#ECECEC80",
      }}
    >
      {/* Dialog Title/ Buttons */}
      <DialogTitle
        minHeight={70}
        sx={{
          position: "sticky",
          borderBottom: `1px solid ${theme.palette.text.forty}`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Dialog Title*/}
          <Typography variant="sectionTitle">
            {label || "Upload Image"}
          </Typography>

          {/*  Close Button */}
          <DialogActions sx={{ gap: "16px" }}>
            <ButtonCloseDialog handleClose={handleCloseDialog} />
          </DialogActions>
        </Box>
      </DialogTitle>
      <DialogContent
        sx={{
          height: "60vh",
          backgroundColor: `${theme.palette.background.paper}`,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ pt: 5, width: "100%" }}>
          <Button
            variant="outlined"
            component="label"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: bgColor,
              width: "100%",
              height: "100px",
              marginBottom: "10px",
              cursor: "pointer",
              color: textColor,
              border: "solid",
              borderStyle: "dashed",
              borderWidth: 2,
              borderColor: textColor,
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: textColor,
                color: bgColor,
              },
            }}
          >
            <input
              type="file"
              hidden
              accept="image/*"
              {...register("image")}
              onChange={handleImageChange}
            />
            <Image />
            <Typography
              variant="sectionTitleSmall"
              color="inherit" // Change text color for invalid hex
            >
              Upload Image
            </Typography>
          </Button>

          {/*Display error message */}
          <Typography>
            {uploadError ? (
              <Alert severity="warning">
                <AlertTitle>Upload Warning:</AlertTitle>
                No Image Uploaded or <strong>2mb Maximum File Size </strong>is
                Exceeded
              </Alert>
            ) : (
              ""
            )}
          </Typography>

          {/*Display Uploaded Image */}
          <Stack
            spacing={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pt: 3,
            }}
          >
            <Typography
              variant="sectionTitleSmall"
              color="inherit"
              sx={{
                display: "flex",
                alignItems: "start",
              }}
            >
              {uploadError || selectedImage === null ? "" : "    Image Preview"}
            </Typography>

            {selectedImage && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  maxHeight: 300,
                  maxWidth: "100%",
                }}
              >
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{ maxHeight: 250, width: "100%" }}
                />
              </Box>
            )}
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default UploadImageDialog;
