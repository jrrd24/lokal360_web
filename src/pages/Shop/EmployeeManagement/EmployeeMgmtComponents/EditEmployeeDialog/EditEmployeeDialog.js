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
import DEditEmployeeDetails from "./DEditEmployeeDetails";
import ButtonDelete from "../../../../../components/Buttons/ButtonDelete";
import DeleteDialog from "../../../../../components/DialogBox/DeleteDialog";
import { useRequestProcessor } from "../../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";
import { LoadingCircle } from "../../../../../components/Loading/Loading";

function EditEmployeeDialog({
  open,
  handleClose,
  handleSave,
  handleDelete,
  data,
}) {
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { useCustomMutate } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const shopEmployeeID = data.shopEmployeeID;
  //for react hook form
  const {
    control,
    handleSubmit,
    formState: { isDirty },
    reset,
    setValue,
  } = useForm();

  //API CALL UPDATE SHOP EMPLOYEE
  const { mutate } = useCustomMutate(
    "updateShopEmployee",
    async (data) => {
      await axiosPrivate.patch(
        `/api/employee/update/?shopEmployeeID=${shopEmployeeID}`,
        data
      );
    },
    ["getShopEmployees"],
    {
      onError: (error) => {
        if (error.response) {
          handleSave("error", error.response.data.error);
        }
      },
      onMutate: () => {
        <LoadingCircle />;
      },
      onSuccess: () => {
        handleClose();
        handleSave("success", "Employee Updated Successfully");
        reset();
      },
    }
  );

  const onSubmit = (data) => {
    const requestData = {
      jobTitle: data.jobTitle,
      access_analytics: data.employeePriviledges.Analytics,
      access_customers: data.employeePriviledges.Customers,
      access_lokal_ads: data.employeePriviledges["Lokal Ads"],
      access_orders: data.employeePriviledges.Orders,
      access_products: data.employeePriviledges.Products,
      access_promos: data.employeePriviledges.Promos,
      access_shop_information: data.employeePriviledges["Shop Information"],
      access_vouchers: data.employeePriviledges.Vouchers,
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
                <Typography variant="sectionTitle">Edit Employee</Typography>
                <Typography variant="sectionSubTitle">
                  <b>{data.username}</b>
                </Typography>
              </Stack>

              {/*  Buttons */}
              <DialogActions sx={{ gap: "16px" }}>
                <ButtonDelete
                  type="button"
                  onClick={() =>
                    handleOpenDelete({
                      id: data.shopEmployeeID,
                      name: data.username,
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
                {data && (
                  <DEditEmployeeDetails
                    control={control}
                    setValue={setValue}
                    data={data}
                  />
                )}
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
                    id: data.shopEmployeeID,
                    name: data.username,
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

export default EditEmployeeDialog;
