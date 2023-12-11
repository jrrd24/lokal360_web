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
import DEmployeeInfo from "./DEmployeeInfo";
import { useRequestProcessor } from "../../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";
import useAuth from "../../../../../hooks/useAuth";
import { LoadingCircle } from "../../../../../components/Loading/Loading";

function AddEmployeeDialog({ open, handleClose, handleSave }) {
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  //for react hook form
  const {
    control,
    handleSubmit,
    formState: { isDirty },
    reset,
    setValue,
  } = useForm();

  // API CALL CREATE REGISTER NEW EMPLOYEE
  const { useCustomMutate } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const { mutate } = useCustomMutate(
    "newEmployee",
    async (data) => {
      const response = await axiosPrivate.post(
        `/api/employee/create/?shopID=${auth.shopID}`,
        data
      );
      return response.data;
    },
    ["getShopEmployee"],
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
        handleSave("success", "Employee Successfully Registered");
        reset();
      },
    }
  );

  const onSubmit = (data) => {
    const requestData = {
      employeeEmail: data.employeeEmail,
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
          <DialogTitle sx={{ ...theme.components.dialog.dialogTitle }}>
            <Box sx={{ ...theme.components.dialog.dialogTitleContent }}>
              {/* Dialog Title*/}
              <Typography variant="sectionTitle">Add New Employee</Typography>

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
              {/*Employee Information */}
              <Box sx={{ py: 5 }}>
                <DEmployeeInfo control={control} setValue={setValue} />
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

export default AddEmployeeDialog;
