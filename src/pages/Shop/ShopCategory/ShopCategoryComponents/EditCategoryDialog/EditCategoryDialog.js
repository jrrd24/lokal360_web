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
import DEditCategoryDetails from "./DEditCategoryDetails";
import { useRequestProcessor } from "../../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";
import { LoadingCircle } from "../../../../../components/Loading/Loading";
import useAuth from "../../../../../hooks/useAuth";

function EditCategoryDialog({ open, handleClose, handleSave, data }) {
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { auth } = useAuth();
  const { useCustomMutate, useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const shopCategoryID = data.shopCategoryID;

  //for react hook form
  const {
    control,
    handleSubmit,
    formState: { isDirty },
    reset,
    register,
    setValue,
  } = useForm();

  // API CALL GET ALL SHOP CATEGORY PRODUCTS
  const { data: shopCategoryProducts, isLoading } = useCustomQuery(
    "getShopCategoryProducts",
    () =>
      axiosPrivate
        .get(
          `/api/shop_category/shop_category_products/?shopCategoryID=${shopCategoryID}`
        )
        .then((res) => res.data),
    {
      enabled: shopCategoryID !== null,
      queryKey: ["getShopCategoryProducts", shopCategoryID],
    }
  );

  // API CALL UPDATE SHOP CATEGORY
  const { mutate } = useCustomMutate(
    "updateShopCategory",
    async (data) => {
      await axiosPrivate.patch(
        `/api/shop_category/update/?shopCategoryID=${data.shopCategoryID}`,
        data
      );
    },
    ["getShopCategory", "getShopCategoryProducts"],
    {
      onError: (error) => {
        if (error.response && error.response.status === 409) {
          handleSave("error", error.response.data.error);
        } else {
          handleSave(
            "error",
            "Error Updating Shop Category. Please Try Again Later"
          );
        }
      },
      onMutate: () => {
        <LoadingCircle />;
      },
      onSuccess: () => {
        handleSave("success", "Shop Data Updated Successfully");
        handleClose();
        reset();
      },
    }
  );

  const onSubmit = (data, event) => {
    event.preventDefault();

    const inShopCategory = [];
    const noShopCategory = [];

    for (const [productID, isShopCategoryProduct] of Object.entries(
      data.inShopCategory
    )) {
      if (isShopCategoryProduct) {
        inShopCategory.push(Number(productID));
      } else {
        noShopCategory.push(Number(productID));
      }
    }

    for (const [productID, isShopCategoryProduct] of Object.entries(
      data.noShopCategory
    )) {
      if (isShopCategoryProduct) {
        inShopCategory.push(Number(productID));
      } else {
        noShopCategory.push(Number(productID));
      }
    }

    const requestData = {
      shopCategoryID: data.shopCategoryID,
      shopCategoryName: data.shopCategoryName,
      shopCategoryProducts: inShopCategory,
      noShopCategoryProducts: noShopCategory,
      shopID: auth.shopID,
    };

    console.log("REQ DATA", requestData);
    mutate(requestData);
  };

  if (isLoading) {
    return <LoadingCircle />;
  }

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
              <Stack spacing={0}>
                <Typography variant="sectionTitle">
                  Edit Shop Category
                </Typography>
                <Typography variant="sectionSubTitle">
                  <b>{data.shop_category_name}</b>
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
              {/*Category Details*/}{" "}
              <Box sx={{ py: 5 }}>
                {shopCategoryProducts && (
                  <DEditCategoryDetails
                    control={control}
                    register={register}
                    setValue={setValue}
                    data={data}
                    productData={shopCategoryProducts}
                  />
                )}
                {!shopCategoryProducts && <LoadingCircle />}
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

export default EditCategoryDialog;
