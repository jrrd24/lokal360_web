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

function NewPromoDialog({ open, handleClose, isSmScreen, handleSave }) {
  //for react hook form
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
    trigger,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Form data
    // handleSave();
    reset();
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
        sx={{
          backgroundColor: "#ECECEC80",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle
            minHeight={70}
            sx={{
              position: "sticky",
              borderBottom: `1px solid ${theme.palette.text.forty}`,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Dialog Title*/}
              <Typography variant="sectionTitle">Create New Promo</Typography>

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
          <DialogContent
            sx={{
              height: "75vh",
              backgroundColor: `${theme.palette.background.paper}`,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/*Main*/}
            <Stack spacing={2} sx={{ width: "600px" }}>
              PLACE CONTENT HERE
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
              <ButtonSave type="submit" isDirty={isDirty} />
            </DialogActions>
          </Box>
        </form>
      </Dialog>
    </div>
  );
}

export default NewPromoDialog;
