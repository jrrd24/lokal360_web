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
import { useMediaQuery } from "@mui/material";
import DFeaturedDetails from "./DFeaturedDetails";
import { useRequestProcessor } from "../../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";
import { LoadingCircle } from "../../../../../components/Loading/Loading";

function FeaturedProductsDialog({
  open,
  handleClose,
  handleSave,
  productData,
}) {
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

  // for mutate
  const { useCustomMutate } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();

  const { mutate } = useCustomMutate(
    "updateFeaturedProducts",
    async (data) => {
      await axiosPrivate.patch(`/api/product/update_featured`, data);
    },
    "getFeaturedProducts",
    {
      onError: (error) => {
        handleSave(
          "error",
          "Error Updating Featured Products. Please Try Again Later"
        );
      },
      onMutate: () => {
        <LoadingCircle />;
      },
      onSuccess: () => {
        handleSave("success", "Featured Products Updated Successfully");
        handleClose();
        reset();
      },
    }
  );

  const onSubmit = (data) => {
    // filter data
    const featuredProducts = [];
    const notFeaturedProducts = [];
    for (const [productID, isFeatured] of Object.entries(data.featured)) {
      if (isFeatured) {
        featuredProducts.push(Number(productID));
      } else {
        notFeaturedProducts.push(Number(productID));
      }
    }

    for (const [productID, isFeatured] of Object.entries(data.notFeatured)) {
      if (isFeatured) {
        featuredProducts.push(Number(productID));
      } else {
        notFeaturedProducts.push(Number(productID));
      }
    }

    const requestData = {
      featuredProducts: featuredProducts,
      notFeaturedProducts: notFeaturedProducts,
    };

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
              <Typography variant="sectionTitle">
                Manage Featured Products
              </Typography>

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
              <Box sx={{ py: 5 }}>
                <DFeaturedDetails
                  control={control}
                  register={register}
                  setValue={setValue}
                  featuredProdData={productData?.allFeatured}
                  notFeaturedProdData={productData?.allNotFeatured}
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

export default FeaturedProductsDialog;
