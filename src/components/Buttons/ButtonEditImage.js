import React from "react";
import { Button, useMediaQuery } from "@mui/material";
import UploadImageDialog from "../DialogBox/UploadImageDialog";

function ButtonEditImage({ name, label }) {
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  // Handle Open Dialog Box
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} sx={{ height: 18 }}>
        {"Edit"}
      </Button>

      {/*Dialog Box */}
      <UploadImageDialog
        open={open}
        handleClose={handleClose}
        handleSaveImg={null}
        name={name}
        label={label}
        isSmScreen={isSmScreen}
      />
    </div>
  );
}

export default ButtonEditImage;
