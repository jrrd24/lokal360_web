import { Button, Typography, Modal, Box, Divider } from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 400,
  minWidth: 350,
  bgcolor: "#FFF",
  border: "2px solid #6E5FDE",
  boxShadow: 0,
  borderRadius: 5,
  p: 4,
};

function PartnerTag() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/*360 Partner Tag */}
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          backgroundColor: "#ffffff",
          height: 35,
          color: "#6E5FDE",
          borderColor: "#6E5FDE",
          border: 1,
          borderRadius: 5,
          px: 2,
          userSelect: "none",
          "&:hover": {
            color: "#FFFFFF",
          },
        }}
      >
        <Typography variant="caption" sx={{ fontWeight: "500", fontSize: 14 }}>
          <Typography
            variant="h4"
            component={"span"}
            sx={{ fontWeight: "bold", fontSize: 24, pr: 0.5 }}
          >
            360
          </Typography>
          Partner
        </Typography>
      </Button>

      {/*360 Partner Description (Modal) */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} textAlign={"center"} alignContent={"center"}>
          <img
            src={require("../assets/lokal360_Logo.png")}
            alt="logo"
            style={{ width: 100, height: 92 }}
          />

          <Divider sx={{ borderColor: "#FFF" }} />

          <Typography
            id="modal-modal-title"
            variant="caption"
            sx={{ fontWeight: "500", fontSize: 20, color: "#6E5FDE", mt: 2 }}
          >
            <Typography
              variant="h4"
              component={"span"}
              sx={{ fontWeight: "bold", fontSize: 30, pr: 0.5 }}
            >
              360
            </Typography>
            Partner
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This is a 360 partner feature, Only shops partner shops can access
            this feature.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default PartnerTag;
