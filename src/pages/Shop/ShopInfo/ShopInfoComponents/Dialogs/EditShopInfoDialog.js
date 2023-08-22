import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

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
        <DialogTitle sx={{ position: "sticky" }}>
          Edit Shop Information
        </DialogTitle>
        <DialogContent>
          <DialogContentText height={500}>
            You can set my maximum width and whether to adapt or not. You can
            set my maximum width and whether to adapt or not. You can set my
            maximum width and whether to adapt or not. You can set my maximum
            width and whether to adapt or not. You can set my maximum width and
            whether to adapt or not. You can set my maximum width and whether to
            adapt or not. You can set my maximum width and whether to adapt or
            not. You can set my maximum width and whether to adapt or not. You
            can set my maximum width and whether to adapt or not. You can set my
            maximum width and whether to adapt or not. You can set my maximum
            width and whether to adapt or not. You can set my maximum width and
            whether to adapt or not. You can set my maximum width and whether to
            adapt or not. You can set my maximum width and whether to adapt or
            not. You can set my maximum width and whether to adapt or not. You
            can set my maximum width and whether to adapt or not. You can set my
            maximum width and whether to adapt or not. You can set my maximum
            width and whether to adapt or not. You can set my maximum width and
            whether to adapt or not. You can set my maximum width and whether to
            adapt or not. You can set my maximum width and whether to adapt or
            not. You can set my maximum width and whether to adapt or not. You
            can set my maximum width and whether to adapt or not. You can set my
            maximum width and whether to adapt or not. You can set my maximum
            width and whether to adapt or not. You can set my maximum width and
            whether to adapt or not. You can set my maximum width and whether to
            adapt or not. You can set my maximum width and whether to adapt or
            not. You can set my maximum width and whether to adapt or not. You
            can set my maximum width and whether to adapt or not. You can set my
            maximum width and whether to adapt or not. You can set my maximum
            width and whether to adapt or not. You can set my maximum width and
            whether to adapt or not. You can set my maximum width and whether to
            adapt or not. You can set my maximum width and whether to adapt or
            not. You can set my maximum width and whether to adapt or not. You
            can set my maximum width and whether to adapt or not. You can set my
            maximum width and whether to adapt or not. You can set my maximum
            width and whether to adapt or not. You can set my maximum width and
            whether to adapt or not. You can set my maximum width and whether to
            adapt or not. You can set my maximum width and whether to adapt or
            not. You can set my maximum width and whether to adapt or not. You
            can set my maximum width and whether to adapt or not. You can set my
            maximum width and whether to adapt or not. You can set my maximum
            width and whether to adapt or not. You can set my maximum width and
            whether to adapt or not. You can set my maximum width and whether to
            adapt or not. You can set my maximum width and whether to adapt or
            not. You can set my maximum width and whether to adapt or not. You
            can set my maximum width and whether to adapt or not. You can set my
            maximum width and whether to adapt or not. You can set my maximum
            width and whether to adapt or not. You can set my maximum width and
            whether to adapt or not. You can set my maximum width and whether to
            adapt or not. You can set my maximum width and whether to adapt or
            not. You can set my maximum width and whether to adapt or not. You
            can set my maximum width and whether to adapt or not. You can set my
            maximum width and whether to adapt or not. You can set my maximum
            width and whether to adapt or not. You can set my maximum width and
            whether to adapt or not. You can set my maximum width and whether to
            adapt or not. You can set my maximum width and whether to adapt or
            not. You can set my maximum width and whether to adapt or not. You
            can set my maximum width and whether to adapt or not. You can set my
            maximum width and whether to adapt or not. You can set my maximum
            width and whether to adapt or not. You can set my maximum width and
            whether to adapt or not. You can set my maximum width and whether to
            adapt or not. You can set my maximum width and whether to adapt or
            not. You can set my maximum width and whether to adapt or not. You
            can set my maximum width and whether to adapt or not. You can set my
            maximum width and whether to adapt or not. You can set my maximum
            width and whether to adapt or not. You can set my maximum width and
            whether to adapt or not. You can set my maximum width and whether to
            adapt or not. You can set my maximum width and whether to adapt or
            not. You can set my maximum width and whether to adapt or not. You
            can set my maximum width and whether to adapt or not. You can set my
            maximum width and whether to adapt or not. You can set my maximum
            width and whether to adapt or not. You can set my maximum width and
            whether to adapt or not. You can set my maximum width and whether to
            adapt or not. You can set my maximum width and whether to adapt or
            not.
          </DialogContentText>
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
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditShopInfoDialog;
