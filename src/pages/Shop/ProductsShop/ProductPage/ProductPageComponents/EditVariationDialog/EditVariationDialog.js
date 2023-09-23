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

function EditVariationDialog({
  handleSave,
  open,
  handleClose,
  handleDelete,
  data,
}) {
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  // For React Hook Form
  const {
    control,
    handleSubmit,
    formState: { isDirty },
    reset,
    register,
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Form data
    handleSave();
    reset();
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
                  <b>{data.name}</b>
                </Typography>
              </Stack>

              {/*  Buttons */}
              <DialogActions sx={{ gap: "16px" }}>
                <ButtonDelete
                  type="button"
                  onClick={() =>
                    handleOpenDelete({
                      id: data.prodVariationID,
                      name: data.name,
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
                  data={data}
                />
              </Box>

              <Divider />

              <Box sx={{ py: 5 }}>
                <DVariationImage thumbnail={data.var_image} />
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
                    name: `Promo ID: ${data.promoID}, Type: ${data.promo_type}`,
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
