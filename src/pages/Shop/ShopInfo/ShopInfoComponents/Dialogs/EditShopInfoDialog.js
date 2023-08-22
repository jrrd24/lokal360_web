import * as React from "react";
import {
  Typography,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import ButtonSave from "../../../../../components/Buttons/ButtonSave";
import ButtonCloseDialog from "../../../../../components/Buttons/ButtonCloseDialog";
import theme from "../../../../../Theme";

function EditShopInfoDialog({ open, handleClose, isSmScreen }) {
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
                handleOpen={null}
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
            backgroundColor: `${theme.palette.background.default}`,
          }}
        >
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}
          ></Box>
        </DialogContent>

        {/* Show Save Button at Bottom for small screens */}
        <Box
          sx={{
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
            <ButtonSave handleOpen={null} />
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}

export default EditShopInfoDialog;
