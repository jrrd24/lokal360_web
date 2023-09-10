import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import theme from "../../../../Theme";
import DataGridPromos from "./DataGridPromos";
import ButtonAdd from "../../../../components/Buttons/ButtonAdd";
import NewPromoDialog from "./NewPromoDialog/NewPromoDialog";

function MyPromos() {
  // Handle Open Dialog Box (AddProduct)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ ...classes.sectionName }}>
        <Stack spacing={2} direction={"column"}>
          <Box sx={{ ...theme.components.box.sectionName }}>
            <Typography variant="sectionTitle">My Promos</Typography>
            <ButtonAdd label={"New Promo"} onClickAction={handleOpen} />
          </Box>

          <DataGridPromos />
        </Stack>
      </Box>

      {/*New Promo Dialog Box */}
      <NewPromoDialog open={open} handleClose={handleClose} />
    </div>
  );
}

const classes = {
  sectionName: {
    maxWidth: "750px",
    "@media (max-width: 1516px)": {
      justifyContent: "center",
      maxWidth: "100%",
    },
  },
};
export default MyPromos;
