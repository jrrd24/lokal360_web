import React from "react";
import {
  Typography,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import ButtonSave from "../../../../../../components/Buttons/ButtonSave";
import ButtonCloseDialog from "../../../../../../components/Buttons/ButtonCloseDialog";
import theme from "../../../../../../Theme";
import { useForm } from "react-hook-form";
import { useMediaQuery } from "@mui/material";
import DVariationInfo from "./DVariationInfo";
import { useRequestProcessor } from "../../../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../../../hooks/useAxiosPrivate";
import { LoadingCircle } from "../../../../../../components/Loading/Loading";

function NewVariationDialog({
  open,
  handleClose,
  handleSave,
  name,
  productID,
}) {
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  // For React Hook Form
  const {
    control,
    handleSubmit,
    formState: { isDirty },
    reset,
    register,
    setValue,
  } = useForm();

  // API CALL CREATE NEW PRODUCT VARIATION
  const { useCustomMutate } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();

  const { mutate } = useCustomMutate(
    "newVariation",
    async (data) => {
      const response = await axiosPrivate.post(
        `/api/product/variation/create/?productID=${productID}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    },
    ["getProductData"],
    {
      onError: (error) => {
        if (error.response && error.response.status === 409) {
          handleSave("error", error.response.data.error);
        } else {
          handleSave("error", "Error Creating New Product Variation");
        }
      },
      onMutate: () => {
        <LoadingCircle />;
      },
      onSuccess: () => {
        handleClose();
        handleSave("success", "New Variation Created Successfully");
        reset();
      },
    }
  );

  const onSubmit = (data) => {
    console.log(data); // Form data

    const requestData = {
      amountOnHand: data.amountOnHand,
      price: data.price,
      variationName: data.variationName,
    };
    if (data.variationThumbnail instanceof File) {
      requestData.variationThumbnail = data.variationThumbnail;
    }

    mutate(requestData);
  };

  return (
    <div>
      <Dialog
        fullScreen={isSmScreen}
        fullWidth={true}
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
        hideBackdrop={true}
        sx={{ ...theme.components.dialog.dialogBox }}
        PaperProps={{ sx: { ...theme.components.dialog.paperProps } }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Dialog Title/ Buttons */}
          <DialogTitle sx={{ ...theme.components.dialog.dialogTitle }}>
            <Box sx={{ ...theme.components.dialog.dialogTitleContent }}>
              {/* Dialog Title*/}
              <Stack spacing={0}>
                <Typography variant="sectionTitle">New Variation</Typography>
                <Typography variant="sectionSubTitle">
                  For Product: <b>{name}</b>
                </Typography>
              </Stack>

              {/*  Buttons */}
              <DialogActions sx={{ gap: "16px" }}>
                <ButtonSave
                  type="submit"
                  isDirty={isDirty}
                  sx={{ display: { xs: "none", sm: "none", md: "block" } }}
                />
                <ButtonCloseDialog handleClose={handleClose} />
              </DialogActions>
            </Box>
          </DialogTitle>

          {/* Dialog Content */}
          <DialogContent sx={{ ...theme.components.dialog.dialogContent }}>
            {/*Main*/}
            <Stack spacing={2} sx={{ width: "600px" }}>
              {/*Var Info */}
              <Box sx={{ py: 5 }}>
                <DVariationInfo
                  control={control}
                  register={register}
                  setValue={setValue}
                />
              </Box>
            </Stack>
          </DialogContent>

          {/* Show Save Button at Bottom for small screens */}
          <Box sx={{ ...theme.components.dialog.saveButtonSmall }}>
            <DialogActions sx={{ py: 2, display: "flex" }}>
              <ButtonSave type="submit" isDirty={isDirty} />
            </DialogActions>
          </Box>
        </form>
      </Dialog>
    </div>
  );
}

export default NewVariationDialog;
