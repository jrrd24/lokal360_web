import React from "react";
import {
  Dialog,
  Box,
  Typography,
  DialogActions,
  DialogTitle,
  DialogContent,
  Stack,
} from "@mui/material";
import theme from "../../../../../Theme";
import ButtonSave from "../../../../../components/Buttons/ButtonSave";
import ButtonCloseDialog from "../../../../../components/Buttons/ButtonCloseDialog";
import { useForm } from "react-hook-form";
import DProductDetails from "./DProductDetails";
import { useMediaQuery } from "@mui/material";
import { useRequestProcessor } from "../../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";
import useAuth from "../../../../../hooks/useAuth";
import { LoadingCircle } from "../../../../../components/Loading/Loading";

function AddProductDialog({ open, handleClose, handleSave }) {
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  //for react hook form
  const {
    control,
    handleSubmit,
    formState: { isDirty },
    reset,
    register,
    setValue,
  } = useForm();

  // for uploading data
  const { useCustomMutate } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const { mutate } = useCustomMutate(
    "newProduct",
    async (data) => {
      const response = await axiosPrivate.post(
        `/api/product/create/?shopID=${auth.shopID}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    },
    ["getAllProduct", "getFeaturedProducts", "getTopProducts"],
    {
      onError: (error) => {
        handleSave("error", error.response.data.error);
      },
      onMutate: () => {
        <LoadingCircle />;
      },
      onSuccess: () => {
        handleClose();
        handleSave("success", "New Product Created Successfully");
        reset();
      },
    }
  );

  const onSubmit = (data) => {
    console.log(data); // Form data

    const requestData = {
      productCategory: data.productCategory,
      productDescription: data.productDescription,
      productName: data.productName,
      shopCategory: data.shopCategory === "" ? null : data.shopCategory,
      isRawMat: data.isRawMaterial,
    };
    if (data.productThumbnail instanceof File) {
      requestData.productThumbnail = data.productThumbnail;
    }

    console.log("REQUEST DATA", requestData);
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
          <DialogTitle
            minHeight={70}
            sx={{ ...theme.components.dialog.dialogTitle }}
          >
            <Box sx={{ ...theme.components.dialog.dialogTitleContent }}>
              {/* Dialog Title*/}
              <Typography variant="sectionTitle">Add New Product</Typography>

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
              {/*Product Details */}
              <Box sx={{ py: 5 }}>
                <DProductDetails
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

export default AddProductDialog;
