import React from "react";
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
import ButtonSave from "../../../../../components/Buttons/ButtonSave";
import ButtonCloseDialog from "../../../../../components/Buttons/ButtonCloseDialog";
import theme from "../../../../../Theme";
import { useForm } from "react-hook-form";
import BasicShopInfoD from "./BasicShopInfoD";
import ShopAddressD from "./ShopAddressD";
import ContactInfoD from "./ContactInfoD";
import OperatingHoursD from "./OperatingHoursD";

function EditShopInfoDialog({ open, handleClose, isSmScreen, handleSave }) {
  // For React Hook Form
  const {
    control,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Form data
    handleSave();
  };

  return (
    <div>
      <Dialog
        fullScreen={isSmScreen}
        fullWidth={true}
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
        sx={{
          backgroundColor: "#6E5FDE66",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Dialog Title/ Buttons */}
          <DialogTitle height={80} sx={{ position: "sticky" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Dialog Title*/}
              <Typography variant="sectionTitle">
                Edit Shop Information
              </Typography>

              {/*  Buttons */}
              <DialogActions sx={{ gap: "16px" }}>
                <ButtonSave
                  type="submit"
                  sx={{ display: { xs: "none", sm: "none", md: "block" } }}
                />
                <ButtonCloseDialog handleClose={handleClose} />
              </DialogActions>
            </Box>
          </DialogTitle>

          {/* Dialog Content */}
          <DialogContent
            sx={{
              height: 500,
              "@media (max-width: 600px)": {
                height: "100%",
              },
              backgroundColor: `${theme.palette.background.default}`,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/*Main*/}
            <Stack spacing={2} sx={{ width: "600px" }}>
              {/*Basic Shop Info */}
              <Box sx={{ py: 5 }}>
                <BasicShopInfoD control={control} />
              </Box>

              <Divider />

              {/*Shop Address */}
              <Box sx={{ py: 5 }}>
                <ShopAddressD />
              </Box>

              <Divider />

              {/*Contact Information */}
              <Box sx={{ py: 5 }}>
                <ContactInfoD control={control} trigger={trigger} />
              </Box>

              <Divider />

              {/*Operating Hours */}
              <Box sx={{ py: 5 }}>
                <OperatingHoursD control={control} />
              </Box>
            </Stack>
          </DialogContent>

          {/* Show Save Button at Bottom for small screens */}
          <Box
            sx={{
              position: "sticky",
              bottom: 0,
              backgroundColor: `${theme.palette.background.paper}`,
              zIndex: 1,
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
              },
            }}
          >
            <DialogActions
              sx={{
                py: 2,
                display: "flex",
              }}
            >
              <ButtonSave type="submit" handleOpen={null} />
            </DialogActions>
          </Box>
        </form>
      </Dialog>
    </div>
  );
}

export default EditShopInfoDialog;
