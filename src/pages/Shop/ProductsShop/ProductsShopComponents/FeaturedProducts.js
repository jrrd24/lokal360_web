import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ButtonAdd from "../../../../components/Buttons/ButtonAdd";
import theme from "../../../../Theme";
import FeaturedProductsDialog from "./FeaturedProductsDialog/FeaturedProductsDialog";
import ProductPreview from "../../../../components/ShopOnly/ProductPreview";
import MapData from "../../../../utils/MapData";
import CustomAlert from "../../../../components/CustomAlert";
import useAuth from "../../../../hooks/useAuth";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import { useRequestProcessor } from "../../../../hooks/useRequestProcessor";
import { LoadingCircle } from "../../../../components/Loading/Loading";
import useAlert from "../../../../hooks/useAlert";

function FeaturedProducts() {
  // Handle Open Dialog Box (AddProduct)
  const [open, setOpen] = useState(false);

  // Handle Alert Click
  const {
    open: openAlert,
    severity,
    alertMsg,
    showAlert,
    hideAlert,
  } = useAlert();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = (severity, alertMsg) => {
    showAlert(severity, alertMsg);
  };

  // API CALL GET ALL FEATURED PROD
  const { useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const { data: productData, isLoading } = useCustomQuery(
    "getFeaturedProducts",
    () =>
      axiosPrivate
        .get(`/api/product/get_all_featured/?shopID=${auth.shopID}`)
        .then((res) => res.data),
    { enabled: true }
  );

  if (isLoading) {
    <LoadingCircle />;
  }

  if (productData === null) {
    <LoadingCircle />;
  }

  return (
    <div style={{ width: "100%" }}>
      <Stack spacing={2} direction={"column"}>
        {/*Section Name */}
        <Box direction={"row"} sx={{ ...theme.components.box.sectionName }}>
          <Typography variant="sectionTitle">Featured Products</Typography>
          <ButtonAdd label={"Add / Edit Featured"} onClickAction={handleOpen} />
        </Box>

        <MapData
          inputData={productData?.allFeatured}
          component={ProductPreview}
          idName={"productID"}
          horizontal
          height={350}
          sortByField={"total_sold"}
        />
      </Stack>

      <FeaturedProductsDialog
        open={open}
        handleClose={handleClose}
        handleSave={handleSave}
        productData={productData}
      />

      {/*Display Alert */}
      <CustomAlert
        open={openAlert}
        setOpen={hideAlert}
        severity={severity}
        alertMsg={alertMsg}
      />
    </div>
  );
}

export default FeaturedProducts;
