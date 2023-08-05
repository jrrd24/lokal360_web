import { Button, Typography, Modal, Box, Divider } from "@mui/material";
import React from "react";
import theme from "../../Theme";

const style = {
  modalStyle: { backgroundColor: "#6E5FDE66", userSelect: "none" },

  contentStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 400,
    minWidth: 350,
    bgcolor: "background.paper",
    border: `2px solid ${theme.palette.primary.main}`,
    boxShadow: 0,
    borderRadius: 5,
    p: 4,
  },
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
          backgroundColor: `${theme.palette.background.paper}`,
          height: 35,
          color: `${theme.palette.primary.main}`,
          borderColor: `${theme.palette.primary.main}`,
          border: 1,
          borderRadius: 5,
          px: 2,
          userSelect: "none",
          "&:hover": {
            color: `${theme.palette.text.contrastText}`,
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
        sx={style.modalStyle}
      >
        <Box
          sx={style.contentStyle}
          textAlign={"center"}
          alignContent={"center"}
        >
          <img
            src={require("../../assets/lokal360_Logo.png")}
            alt="logo"
            style={{ width: 100, height: 92 }}
          />

          <Divider sx={{ borderColor: "#FFF" }} />

          <Typography
            id="modal-modal-title"
            variant="caption"
            color="primary"
            sx={{ fontWeight: "500", fontSize: 20, mt: 2 }}
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
            This is a 360 partner feature, Only partner shops can access this
            feature.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default PartnerTag;
