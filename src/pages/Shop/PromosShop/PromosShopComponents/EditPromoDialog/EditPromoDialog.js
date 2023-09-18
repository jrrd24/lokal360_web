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

function EditPromoDialog({
  open,
  handleClose,
  handleSave,
  handleDelete,
  data,
}) {
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  //for react hook form
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
    trigger,
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
                  <b>{data.promo_type}</b>
                </Typography>
              </Stack>

              {/*  Buttons */}
              <DialogActions sx={{ ...theme.components.dialog.dialogActions }}>
                <ButtonDelete
                  type="button"
                  onClick={() =>
                    handleOpenDelete({
                      id: data.promoID,
                      name: `Promo ID: ${data.promoID}, Type: ${data.promo_type}`,
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
                <DEditPromoDetails
                  control={control}
                  register={register}
                  setValue={setValue}
                  data={data}
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

export default EditPromoDialog;
