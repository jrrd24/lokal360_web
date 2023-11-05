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
import ButtonCloseDialog from "../../../../../components/Buttons/ButtonCloseDialog";
import { useMediaQuery } from "@mui/material";
import DEditAdsDetails from "./DEditAdsDetails";
import DeleteDialog from "../../../../../components/DialogBox/DeleteDialog";
import ButtonDelete from "../../../../../components/Buttons/ButtonDelete";
import { LoadingCircle } from "../../../../../components/Loading/Loading";

function EditAdvertismentDialog({ open, handleClose, handleDelete, data }) {
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

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
        <DialogTitle
          minHeight={70}
          sx={{ ...theme.components.dialog.dialogTitle }}
        >
          <Box sx={{ ...theme.components.dialog.dialogTitleContent }}>
            {/* Dialog Title*/}
            <Stack spacing={0}>
              <Typography variant="sectionTitle">Lokal Ad Details</Typography>
              <Typography variant="sectionSubTitle">
                <b>{data.ad_name}</b>
              </Typography>
            </Stack>

            {/*  Buttons */}
            <DialogActions sx={{ ...theme.components.dialog.dialogActions }}>
              <ButtonDelete
                type="button"
                onClick={() =>
                  handleOpenDelete({
                    id: data.lokalAdsID,
                    name: data.ad_name,
                  })
                }
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
            {/*Advertisment Details*/}{" "}
            <Box sx={{ py: 5 }}>
              {data && <DEditAdsDetails data={data} />}
              {!data && <LoadingCircle />}
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
                  id: data.lokalAdsID,
                  name: data.ad_name,
                })
              }
            />
          </DialogActions>
        </Box>
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

export default EditAdvertismentDialog;
