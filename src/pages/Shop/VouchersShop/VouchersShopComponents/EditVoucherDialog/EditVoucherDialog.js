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
import DEditVoucherDetails from "./DEditVoucherDetails";
import ButtonDelete from "../../../../../components/Buttons/ButtonDelete";
import DeleteDialog from "../../../../../components/DialogBox/DeleteDialog";
import useAuth from "../../../../../hooks/useAuth";
import { useRequestProcessor } from "../../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";
import { LoadingCircle } from "../../../../../components/Loading/Loading";

function EditVoucherDialog({
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
  const voucherID = data.voucherID;

  //for react hook form
  const {
    control,
    handleSubmit,
    formState: { isDirty },
    reset,
  } = useForm();

  //API CALL GET ALL VOUCHER PRODUCTS
  const { data: voucherProducts } = useCustomQuery(
    "getVoucherProducts",
    () =>
      axiosPrivate
        .get(
          `/api/voucher/get_all_products/?voucherID=${data.voucherID}&shopID=${auth.shopID}`
        )
        .then((res) => res.data),
    { enabled: open }
  );

  //API CALL UPDATE VOUCHER
  const { mutate } = useCustomMutate(
    "updateVoucher",
    async (data) => {
      await axiosPrivate.patch(
        `/api/voucher/update/?voucherID=${voucherID}`,
        data
      );
    },
    ["getShopVoucher", "getVoucherProducts"],
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

    const inVoucher = [];
    const noVoucher = [];

    for (const [productID, isVoucherProduct] of Object.entries(
      data.inVoucher
    )) {
      if (isVoucherProduct) {
        inVoucher.push(Number(productID));
      } else {
        noVoucher.push(Number(productID));
      }
    }

    for (const [productID, isVoucherProduct] of Object.entries(
      data.notInVoucher
    )) {
      if (isVoucherProduct) {
        inVoucher.push(Number(productID));
      } else {
        noVoucher.push(Number(productID));
      }
    }

    const requestData = {
      voucherProducts: inVoucher,
      notVoucherProducts: noVoucher,
    };
    console.log(data); // Form data
    console.log("REQ DATA", requestData);

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
                <Typography variant="sectionTitle">Edit Voucher</Typography>
                <Typography variant="sectionSubTitle">
                  Voucher ID: <b>{data.voucherID}</b> &nbsp; Type:{" "}
                  <b>{data.promo_type}</b>
                </Typography>
              </Stack>

              {/*  Buttons */}
              <DialogActions sx={{ gap: "16px" }}>
                <ButtonDelete
                  type="button"
                  onClick={() =>
                    handleOpenDelete({
                      id: data.voucherID,
                      name: `Voucher ID: ${data.voucherID}, Type: ${data.promo_type}`,
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
                {data && voucherProducts && (
                  <DEditVoucherDetails
                    control={control}
                    data={data}
                    productData={voucherProducts}
                  />
                )}
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
                    id: data.voucherID,
                    name: `Voucher ID: ${data.voucherID}, Type: ${data.promo_type}`,
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

export default EditVoucherDialog;
