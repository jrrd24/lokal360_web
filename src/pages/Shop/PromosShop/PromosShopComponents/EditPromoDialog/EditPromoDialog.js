import React, { useState } from "react";
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
import DEditPromoDetails from "./DEditPromoDetails";
import ButtonDelete from "../../../../../components/Buttons/ButtonDelete";
import DeleteDialog from "../../../../../components/DialogBox/DeleteDialog";
import useAuth from "../../../../../hooks/useAuth";
import { useRequestProcessor } from "../../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";
import { LoadingCircle } from "../../../../../components/Loading/Loading";

function EditPromoDialog({
  open,
  handleClose,
  handleSave,
  handleDelete,
  data,
}) {
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { auth } = useAuth();
  const { useCustomMutate, useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const promoID = data.promoID;
  //for react hook form
  const {
    control,
    handleSubmit,
    formState: { isDirty },
    reset,
    register,
    setValue,
  } = useForm();

  //API CALL GET ALL PROMO PRODUCTS
  const { data: promoProducts } = useCustomQuery(
    "getPromoProducts",
    () =>
      axiosPrivate
        .get(`/api/promo/get_promo_products/?promoID=${data.promoID}`)
        .then((res) => res.data),
    { enabled: promoID !== null, queryKey: ["getPromoProducts", promoID] }
  );

  //API CALL UPDATE PROMO
  const { mutate } = useCustomMutate(
    "updatePromo",
    async (data) => {
      await axiosPrivate.patch(
        `/api/promo/update_promo/?promoID=${data.promoID}`,
        data
      );
    },
    ["getShopPromo", "getPromoProducts"],
    {
      onError: (error) => {
        handleSave("error", "Error Updating Promo. Please Try Again Later");
      },
      onMutate: () => {
        <LoadingCircle />;
      },
      onSuccess: () => {
        handleSave("success", "Promo Updated Successfully");
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

    const inPromo = [];
    const noPromo = [];

    for (const [productID, isPromoProduct] of Object.entries(data.inPromo)) {
      if (isPromoProduct) {
        inPromo.push(Number(productID));
      } else {
        noPromo.push(Number(productID));
      }
    }

    for (const [productID, isPromoProduct] of Object.entries(data.noPromo)) {
      if (isPromoProduct) {
        inPromo.push(Number(productID));
      } else {
        noPromo.push(Number(productID));
      }
    }

    const requestData = {
      promoID: promoID,
      discountValue: data.discountValue,
      minSpend: data.minSpend,
      promoType: data.promoType,
      promoProducts: inPromo,
      noPromoProducts: noPromo,
      shopID: auth.shopID,
    };

    mutate(requestData);
  };

  //handle delete dialog box
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteData, setDeleteData] = useState({
    id: null,
    name: null,
  });
  const handleOpenDelete = ({ id, name }) => {
    setOpenDelete(true);
    setDeleteData({ id, name });
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
    handleClose();
  };
  const handleCancel = () => {
    setOpenDelete(false);
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
              <Stack spacing={0}>
                <Typography variant="sectionTitle">Edit Promo</Typography>
                <Typography variant="sectionSubTitle">
                  Promo ID: <b>{data.promoID}</b> &nbsp; Type:{" "}
                  <b>{data.promo_type_name}</b>
                </Typography>
              </Stack>

              {/*  Buttons */}
              <DialogActions sx={{ ...theme.components.dialog.dialogActions }}>
                <ButtonDelete
                  type="button"
                  onClick={() =>
                    handleOpenDelete({
                      id: data.promoID,
                      name: `Promo ID: ${data.promoID}, Type: ${data.promo_type_name}`,
                    })
                  }
                  sx={{ display: { xs: "none", sm: "none", md: "block" } }}
                />
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
                {promoProducts && (
                  <DEditPromoDetails
                    control={control}
                    register={register}
                    setValue={setValue}
                    data={data}
                    productData={promoProducts}
                  />
                )}
                {!promoProducts && <LoadingCircle />}
              </Box>
            </Stack>
          </DialogContent>

          {/* Show Save Button at Bottom for small screens */}
          <Box sx={{ ...theme.components.dialog.saveButtonSmall }}>
            <DialogActions sx={{ py: 2, display: "flex" }}>
              <ButtonDelete
                type="button"
                onClick={() =>
                  handleOpenDelete({
                    id: data.promoID,
                    name: `Promo ID: ${data.promoID}, Type: ${data.promo_type_name}`,
                  })
                }
              />
              <ButtonSave type="submit" isDirty={isDirty} />
            </DialogActions>
          </Box>
        </form>
      </Dialog>

      {/*Delete Dialog */}
      <DeleteDialog
        openDelete={openDelete}
        handleCloseDelete={handleCloseDelete}
        handleCancel={handleCancel}
        handleDelete={handleDelete}
        data={deleteData}
      />
    </div>
  );
}

export default EditPromoDialog;
