import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ButtonAdd from "../../../../components/Buttons/ButtonAdd";
import theme from "../../../../Theme";
import FeaturedProductsDialog from "./FeaturedProductsDialog/FeaturedProductsDialog";
import ProductPreview from "../../../../components/ShopOnly/ProductPreview";
import MapData from "../../../../utils/MapData";
import productData from "../../../../data/productData";
import CustomAlert from "../../../../components/CustomAlert";

function FeaturedProducts() {
  // Handle Open Dialog Box (AddProduct)
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [severity, setSeverity] = useState("error");
  const [alertMsg, setAlertMsg] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = (severity, alertMsg) => {
    setOpen(false);
    setSeverity("success");
    setAlertMsg(" Successfully Updated Featured Products");
    setOpenAlert(true);
  };

  return (
    <div style={{ width: "100%" }}>
      <Stack spacing={2} direction={"column"}>
        {/*Section Name */}
        <Box direction={"row"} sx={{ ...theme.components.box.sectionName }}>
          <Typography variant="sectionTitle">Featured Products</Typography>
          <ButtonAdd label={"Add / Edit Featured"} onClickAction={handleOpen} />
        </Box>

        <MapData
          inputData={productData}
          component={ProductPreview}
          idName={"productID"}
          horizontal
          height={330}
          condition={(data) => data.is_featured === true}
          sortByField={"total_sold"}
        />
      </Stack>

      <FeaturedProductsDialog
        open={open}
        handleClose={handleClose}
        handleSave={handleSave}
      />

      {/*Display Alert */}
      <CustomAlert
        open={openAlert}
        setOpen={setOpenAlert}
        severity={severity}
        alertMsg={alertMsg}
      />
    </div>
  );
}

export default FeaturedProducts;
