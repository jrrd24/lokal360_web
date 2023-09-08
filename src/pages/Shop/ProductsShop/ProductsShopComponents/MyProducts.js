import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import ButtonAdd from "../../../../components/Buttons/ButtonAdd";
import DataGridProducts from "./DataGridProducts";
import theme from "../../../../Theme";
import AddProductDialog from "./AddProductDialog/AddProductDialog";
import { useMediaQuery } from "@mui/material";

function MyProducts() {
  const isSmScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  // Handle Open Dialog Box (AddProduct)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    handleClose();
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
            <ButtonAdd label={"New Products"} onClickAction={handleOpen} />
            {/*TODO: Add onClick for Button */}
          </Box>

          <Box sx={{ alignSelf: "center" }}>
            <DataGridProducts />
          </Box>
        </Stack>
      </Box>

      {/*Add Product Dialog Box */}
      <AddProductDialog
        open={open}
        handleClose={handleClose}
        isSmScreen={isSmScreen}
        handleSave={handleSave}
      />
    </div>
  );
}

export default MyProducts;
