import React from "react";
import {
  Typography,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Divider,
} from "@mui/material";
import ButtonSave from "../../../../../../components/Buttons/ButtonSave";
import ButtonCloseDialog from "../../../../../../components/Buttons/ButtonCloseDialog";
import theme from "../../../../../../Theme";
import { useForm } from "react-hook-form";
import { useMediaQuery } from "@mui/material";
import DProductInfo from "./DProductInfo";
import DProductImage from "./DProductImage";
import { useRequestProcessor } from "../../../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../../../hooks/useAxiosPrivate";
import useAuth from "../../../../../../hooks/useAuth";
import { LoadingCircle } from "../../../../../../components/Loading/Loading";
import { BASE_URL } from "../../../../../../api/Api";

function EditProductInfoDialog({ open, handleClose, handleSave, productData }) {
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const {
    productID,
    ProductImages: Images,
    product_name,
    categoryID,
    description,
    shopCategoryID,
    is_raw_mat,
  } = productData || {};

  const product_thumbnail =
    Images.length > 0 ? `${BASE_URL}/${Images[0].prod_image}` : null;

  // For React Hook Form
  const {
    control,
    handleSubmit,
    formState: { isDirty },
    reset,
    register,
    setValue,
  } = useForm();

  // custom hook calls for mutate
  const { useCustomMutate } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  // mutate data (query key, query function, invalidate query key)
  const { mutate } = useCustomMutate(
    "updateProductInfo",
    async (data) => {
      console.log("data", data);
      const response = await axiosPrivate.patch(
        `/api/product/update/?productID=${productID}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    },
    [
      "getProductData",
      "getFeaturedProducts",
      "getTopProducts",
      "getShopCategory",
    ],
    {
      onError: (error) => {
        handleSave("error", "Error Updating Product. Please Try Again Later");
      },
      onMutate: () => {
        <LoadingCircle />;
      },
      onSuccess: () => {
        handleClose();
        handleSave("success", "Product Updated Successfully", product_name);
        reset();
      },
    }
  );

  const onSubmit = (data) => {
    console.log("PROD DATA", data); // Form data

    const requestData = {
      category: data.category,
      productDescription: data.productDescription,
      productName: data.productName,
      shopCategory: data.shopCategory === "" ? null : data.shopCategory,
      shopID: auth.shopID,
      isRawMaterial: data.isRawMaterial,
    };
    if (data.productThumbnail instanceof File) {
      requestData.productThumbnail = data.productThumbnail;
    }

    console.log("REQ DATA", requestData);

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
              <Typography variant="sectionTitle">
                Edit Product Information
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
              {/*Basic Product Info */}
              <Box sx={{ py: 5 }}>
                <DProductInfo
                  control={control}
                  name={product_name}
                  category={categoryID}
                  selectedShopCategory={shopCategoryID}
                  description={description}
                  isRawMat={is_raw_mat}
                />
              </Box>

              <Divider />

              {/*Product Thumbnail */}
              <Box sx={{ py: 5 }}>
                <DProductImage
                  control={control}
                  register={register}
                  setValue={setValue}
                  thumbnail={product_thumbnail}
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

export default EditProductInfoDialog;
