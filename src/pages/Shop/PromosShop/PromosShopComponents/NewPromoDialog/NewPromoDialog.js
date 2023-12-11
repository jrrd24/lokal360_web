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
import DPromoDetails from "./DPromoDetails";
import { useRequestProcessor } from "../../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";
import useAuth from "../../../../../hooks/useAuth";
import { LoadingCircle } from "../../../../../components/Loading/Loading";

function NewPromoDialog({ open, handleClose, handleSave }) {
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
    watch,
  } = useForm();

  //API CALL GET ALL PROMO PRODUCTS
  const { data: promoProducts } = useCustomQuery(
    "getPromoProducts",
    () =>
      axiosPrivate
        .get(`/api/promo/get_promo_products/?promoID=null`)
        .then((res) => res.data),
    { enabled: true }
  );

  //API CALL CREATE NEW PROMO
  const { mutate } = useCustomMutate(
    "newPromo",
    async (data) => {
      const response = await axiosPrivate.post(
        `/api/promo/create_promo/?shopID=${auth.shopID}`,
        data
      );
      return response.data;
    },
    ["getShopPromo", "getPromoProducts", "getProduct"],
    {
      onError: (error) => {
        handleSave("error", error.response.data.error);
      },
      onMutate: () => {
        <LoadingCircle />;
      },
      onSuccess: () => {
        handleSave("success", "New Promo Created Successfully");
        handleClose();
        reset();
      },
    }
  );
  const onSubmit = (data, event) => {
    event.preventDefault();
    //Parse number data
    //Parse Discount Value then /100 if percent discount
    if (data.promoType === 2) {
      data.discountValue = Number(data.discountValue) / 100;
    } else {
      data.discountValue = Number(data.discountValue);
    }

    data.minSpend = data.minSpend ? Number(data.minSpend) : 0;

    // FOR PROMO DATA
    const inPromo = [];
    for (const [productID, isPromoProduct] of Object.entries(data.noPromo)) {
      if (isPromoProduct) {
        inPromo.push(Number(productID));
      }
    }

    const requestData = {
      discountValue: data.discountValue,
      minSpend: data.minSpend,
      promoType: data.promoType,
      promoProducts: inPromo,
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
              <Typography variant="sectionTitle">Create New Promo</Typography>

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
              {/*Promo Details*/}
              <Box sx={{ py: 5 }}>
                <DPromoDetails
                  control={control}
                  productData={promoProducts}
                  watch={watch}
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

export default NewPromoDialog;
