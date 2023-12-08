import React from "react";
import { Stack, Box, Typography, Alert } from "@mui/material";
import ButtonAdd from "../../../../components/Buttons/ButtonAdd";
import DataGridProducts from "./DataGridProducts";
import theme from "../../../../Theme";
import AddProductDialog from "./AddProductDialog/AddProductDialog";

function MyProducts({ handleSave, open, setOpen }) {
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          width: "750px",
          "@media (max-width: 1516px)": {
            justifyContent: "center",
            width: "100%",
          },
        }}
      >
        <Stack spacing={2} direction={"column"}>
          {/*Section Name */}
          <Box direction={"row"} sx={{ ...theme.components.box.sectionName }}>
            <Typography variant="sectionTitle">My Products</Typography>
            <ButtonAdd label={"New Product"} onClickAction={handleOpen} />
            {/*TODO: Add onClick for Button */}
          </Box>

          <Alert severity="warning">
            All Products With <b>N/A Status</b> (Products Without{" "}
            <b>Variation</b>) Will not be Visible for Customers
          </Alert>

          <Box sx={{ alignSelf: "center", width: "100%" }}>
            <DataGridProducts />
          </Box>
        </Stack>
      </Box>
      {/*Add Product Dialog Box */},
      <AddProductDialog
        open={open}
        handleClose={handleClose}
        handleSave={handleSave}
      />
    </div>
  );
}

export default MyProducts;
