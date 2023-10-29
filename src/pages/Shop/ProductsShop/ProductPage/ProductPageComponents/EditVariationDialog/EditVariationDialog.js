import React, { useState } from "react";
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
import DeleteDialog from "../../../../../../components/DialogBox/DeleteDialog";
import ButtonDelete from "../../../../../../components/Buttons/ButtonDelete";
import DEditVariationInfo from "./DEditVariationInfo";
import DVariationImage from "./DVariationImage";
import { useRequestProcessor } from "../../../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../../../hooks/useAxiosPrivate";
import { LoadingCircle } from "../../../../../../components/Loading/Loading";

function EditVariationDialog({
  handleSave,
  open,
  handleClose,
  handleDelete,
  data: varData,
}) {
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  console.log("VAR DATA", varData);
  // For React Hook Form
  const {
    control,
    handleSubmit,
    formState: { isDirty },
    reset,
    register,
    setValue,
  } = useForm();

  const { useCustomMutate } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();

  const { mutate } = useCustomMutate(
    "updateVariation",
    async (data) => {
      const response = await axiosPrivate.patch(
        `/api/product/variation/update/?prodVariationID=${varData.prodVariationID}`,
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
        handleSave("error", "Error Updating Product Variation");
      },
      onMutate: () => {
        <LoadingCircle />;
      },
      onSuccess: () => {
        handleClose();
        handleSave("success", "Variation Created Successfully");
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
          {/* Dialog Title/ Buttons */}
          <DialogTitle sx={{ ...theme.components.dialog.dialogTitle }}>
            <Box sx={{ ...theme.components.dialog.dialogTitleContent }}>
              {/* Dialog Title*/}
              <Stack spacing={0}>
                <Typography variant="sectionTitle">Edit Variation</Typography>
                <Typography variant="sectionSubTitle">
                  <b>{varData.var_name}</b>
                </Typography>
              </Stack>

              {/*  Buttons */}
              <DialogActions sx={{ gap: "16px" }}>
                <ButtonDelete
                  type="button"
                  onClick={() =>
                    handleOpenDelete({
                      id: varData.prodVariationID,
                      name: varData.var_name,
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
              {/*Var Info */}
              <Box sx={{ py: 5 }}>
                <DEditVariationInfo
                  control={control}
                  register={register}
                  setValue={setValue}
                  data={varData}
                />
              </Box>

              <Divider />

              <Box sx={{ py: 5 }}>
                <DVariationImage
                  thumbnail={varData.var_image}
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
              <ButtonDelete
                type="button"
                onClick={() =>
                  handleOpenDelete({
                    id: varData.promoID,
                    name: `Promo ID: ${varData.promoID}, Type: ${varData.promo_type}`,
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

export default EditVariationDialog;
