import React from "react";
import {
  Dialog,
  Box,
  Typography,
  DialogActions,
  DialogTitle,
  DialogContent,
  Stack,
  Zoom,
} from "@mui/material";
import theme from "../../../../../Theme";
import ButtonSave from "../../../../../components/Buttons/ButtonSave";
import ButtonCloseDialog from "../../../../../components/Buttons/ButtonCloseDialog";
import { useForm } from "react-hook-form";
import { useMediaQuery } from "@mui/material";
import DCategoryDetails from "./DCategoryDetails";
import { useRequestProcessor } from "../../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";
import useAuth from "../../../../../hooks/useAuth";
import { LoadingCircle } from "../../../../../components/Loading/Loading";

function NewCategoryDialog({ open, handleClose, handleSave }) {
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { useCustomMutate, useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  //for react hook form
  const {
    control,
    handleSubmit,
    formState: { isDirty },
    reset,
  } = useForm();

  // for uploading data

  // API CALL GET ALL SHOP CATEGORY PRODUCTS
  const { data: shopCategoryProducts } = useCustomQuery(
    "getShopCategoryProducts",
    () =>
      axiosPrivate
        .get(`/api/shop_category/shop_category_products/?shopCategoryID=null`)
        .then((res) => res.data),
    { enabled: true }
  );

  const { mutate } = useCustomMutate(
    "newShopCategory",
    async (data) => {
      const response = await axiosPrivate.post(
        `/api/shop_category/create/?shopID=${auth.shopID}`,
        data
      );
      return response.data;
    },
    ["getShopCategory", "getShopCategoryProducts"],
    {
      onError: (error) => {
        if (error.response && error.response.status === 409) {
          handleSave("error", error.response.data.error);
        } else {
          handleSave("error", "Error Creating New Shop Category");
        }
      },
      onMutate: () => {
        <LoadingCircle />;
      },
      onSuccess: () => {
        handleSave("success", "New Shop Category Created Successfully");
        handleClose();
        reset();
      },
    }
  );

  const onSubmit = (data, event) => {
    event.preventDefault();

    const inShopCategory = [];
    for (const [productID, isShopCategoryProduct] of Object.entries(
      data.noShopCategory
    )) {
      if (isShopCategoryProduct) {
        inShopCategory.push(Number(productID));
      }
    }

    const requestData = {
      shopCategoryName: data.shopCategoryName,
      shopCategoryProducts: inShopCategory,
    };

    // call mutate
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
        TransitionComponent={Zoom}
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
                Create New Shop Category
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
              {/*Category Details*/}{" "}
              <Box sx={{ py: 5 }}>
                <DCategoryDetails
                  control={control}
                  productData={shopCategoryProducts}
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

export default NewCategoryDialog;
