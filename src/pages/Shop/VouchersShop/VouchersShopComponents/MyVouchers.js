import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import DataGridVouchers from "./DataGridVouchers";
import theme from "../../../../Theme";
import ButtonAdd from "../../../../components/Buttons/ButtonAdd";
import NewVoucherDialog from "./NewVoucherDialog/NewVoucherDialog";

function MyVouchers({ handleSave, open, setOpen }) {
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box
        sx={{
          maxWidth: "750px",
          "@media (max-width: 1516px)": {
            justifyContent: "center",
            maxWidth: "100%",
          },
        }}
      >
        <Stack spacing={2} direction={"column"}>
          {/*Section Name */}
          <Box
            direction={"row"}
            sx={{
              ...theme.components.box.sectionName,
              "@media (max-width: 415px)": {
                gap: "6px",
              },
            }}
          >
            <Typography variant="sectionTitle">My Vouchers</Typography>
            <ButtonAdd label={"New Voucher"} onClickAction={handleOpen} />
          </Box>
          <DataGridVouchers />
        </Stack>
      </Box>

      {/*New Promo Dialog Box */}
      <NewVoucherDialog open={open} handleClose={handleClose} handleSave={handleSave} />
    </div>
  );
}

export default MyVouchers;
