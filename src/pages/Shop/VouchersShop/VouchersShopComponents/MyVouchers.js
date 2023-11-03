import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import DataGridVouchers from "./DataGridVouchers";
import theme from "../../../../Theme";
import ButtonAdd from "../../../../components/Buttons/ButtonAdd";
import NewVoucherDialog from "./NewVoucherDialog/NewVoucherDialog";

function MyVouchers({
  handleSave,
  handleDelete,
  handlePromoError,
  open,
  setOpen,
  openEdit,
  setOpenEdit,
}) {
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ ...classes.main }}>
        <Stack spacing={2} direction={"column"}>
          {/*Section Name */}
          <Box direction={"row"} sx={{ ...classes.sectionName }}>
            <Typography variant="sectionTitle">My Vouchers</Typography>
            <ButtonAdd label={"New Voucher"} onClickAction={handleOpen} />
          </Box>
          <DataGridVouchers
            openEdit={openEdit}
            setOpenEdit={setOpenEdit}
            handleSave={handleSave}
            handleDelete={handleDelete}
          />
        </Stack>
      </Box>

      {/*New Promo Dialog Box */}
      <NewVoucherDialog
        open={open}
        handleClose={handleClose}
        handleSave={handleSave}
        handlePromoError={handlePromoError}
      />
    </div>
  );
}

const classes = {
  main: {
    maxWidth: "750px",
    "@media (max-width: 1516px)": {
      justifyContent: "center",
      maxWidth: "100%",
    },
  },

  sectionName: {
    ...theme.components.box.sectionName,
    "@media (max-width: 415px)": {
      gap: "6px",
    },
  },
};

export default MyVouchers;
