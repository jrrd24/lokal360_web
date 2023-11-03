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
import DVoucherDetails from "./DVoucherDetails";
import { useRequestProcessor } from "../../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";
import useAuth from "../../../../../hooks/useAuth";
import { LoadingCircle } from "../../../../../components/Loading/Loading";
import moment from "moment/moment";

function NewVoucherDialog({ open, handleClose, handleSave, handlePromoError }) {
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { useCustomMutate, useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { isDirty },
    reset,
    watch,
  } = useForm();

  //API CALL GET ALL VOUCHER PRODUCTS
  const { data: voucherProducts } = useCustomQuery(
    "getVoucherProducts",
    () =>
      axiosPrivate
        .get(
          `/api/voucher/get_all_products/?voucherID=null&shopID=${auth.shopID}`
        )
        .then((res) => res.data),
    { enabled: open }
  );

  //API CALL GET ALL VOUCHER PROMOS
  const { data: voucherPromos } = useCustomQuery(
    "getVoucherPromos",
    () =>
      axiosPrivate
        .get(
          `/api/voucher/get_all_promos/?voucherID=null&shopID=${auth.shopID}`
        )
        .then((res) => res.data),
    { enabled: open }
  );

  //API CALL CREATE NEW VOUCHER
  const { mutate } = useCustomMutate(
    "newVoucher",
    async (data) => {
      const response = await axiosPrivate.post(
        `/api/voucher/create/?shopID=${auth.shopID}`,
        data
      );
      return response.data;
    },
    ["getShopVoucher", "getVoucherProducts", "getProduct"],
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

    let inVoucher = [];
    for (const [productID, isVoucherProduct] of Object.entries(
      data.noVoucher
    )) {
      if (isVoucherProduct) {
        inVoucher.push(Number(productID));
      }
    }

    //FORMAT DATE
    const startDate = new Date(
      data.startDate.$y,
      data.startDate.$M,
      data.startDate.$D
    );
    const endDate = new Date(data.endDate.$y, data.endDate.$M, data.endDate.$D);

    const formattedStartDate = moment(startDate).format("YYYY-MM-DD");
    const formattedEndDate = moment(endDate).format("YYYY-MM-DD");

    const requestData = {
      endDate: formattedEndDate,
      startDate: formattedStartDate,
      promoID: data.voucherPromo,
      voucherProducts: inVoucher,
    };

    console.log(data); // Form data
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
          <DialogTitle sx={{ ...theme.components.dialog.dialogTitle }}>
            <Box sx={{ ...theme.components.dialog.dialogTitleContent }}>
              {/* Dialog Title*/}
              <Typography variant="sectionTitle">Create New Voucher</Typography>

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
                {voucherProducts && voucherPromos && (
                  <DVoucherDetails
                    control={control}
                    watch={watch}
                    productData={voucherProducts.allProducts}
                    promoData={voucherPromos.allPromos}
                    handlePromoError={handlePromoError}
                  />
                )}
                {!voucherProducts && !voucherPromos && <LoadingCircle />}
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

export default NewVoucherDialog;
