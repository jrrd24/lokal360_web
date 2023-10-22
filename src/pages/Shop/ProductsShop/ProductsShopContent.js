import React, { useState } from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import { Box } from "@mui/material";
import theme from "../../../Theme";
import CustomAlert from "../../../components/CustomAlert";
import { LoadingCircle } from "../../../components/Loading/Loading";
//import page sections
import FeaturedProducts from "./ProductsShopComponents/FeaturedProducts";
import MyProducts from "./ProductsShopComponents/MyProducts";
import TopProducts from "../AnalyticsShop/AnalyticsComponents/TopProducts";
import ProductStatus from "../DashboardShop/DashboardComponents/ProductStatus";
import useAlert from "../../../hooks/useAlert";

function ProductsShopContent() {
  // Handle Open Dialog Box
  const [open, setOpen] = React.useState(false);

  // Handle Alert Click
  const {
    open: openAlert,
    severity,
    alertMsg,
    showAlert,
    hideAlert,
  } = useAlert();

  const handleSave = (severity, alertMsg) => {
    showAlert(severity, alertMsg);
  };

  return (
    <div>
      <Box sx={{ ...theme.components.box.pageContainer }}>
        <PageInfoComponent
          PageName={"Products"}
          Subtitle={"Add and Manage your Products"}
        />

        {/*Main Content*/}
        <Box sx={{ ...theme.components.box.mainContent }}>
          {/*Featured Products/ My Products (Left Side)*/}
          <Box sx={{ ...classes.leftContainer }}>
            {/*Featured Products*/}
            <Box sx={{ ...classes.featuredProductsContainer }}>
              <FeaturedProducts />
            </Box>

            {/*My Products*/}

            <Box sx={{ ...classes.myProductsContainer }}>
              <MyProducts
                handleSave={handleSave}
                open={open}
                setOpen={setOpen}
              />
            </Box>
          </Box>

          {/*Product Info (Right Side)*/}
          <Box sx={{ ...classes.rightContainer }}>
            {/*Products Sold Per Category */}

            <Box sx={{ ...classes.categoryContainer }}>
              <ProductStatus hideShowAll={true} />
            </Box>

            {/*Top Products */}
            <Box sx={{ ...classes.topProductsContainer }}>
              <TopProducts hideShowAll={true} />
            </Box>
          </Box>
        </Box>
      </Box>

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

const classes = {
  leftContainer: {
    ...theme.components.box.contentColumn,
    "@media (max-width: 900px)": {
      alignItems: "baseline",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  rightContainer: {
    ...theme.components.box.contentColumn,
    "@media (max-width: 1300px)": {
      flexDirection: "row",
      alignItems: "baseline",
      justifyContent: "center",
      minWidth: "790px",
    },
    "@media (max-width: 900px)": {
      flexDirection: "row",
      alignItems: "baseline",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  featuredProductsContainer: {
    minWidth: "750px",
    maxWidth: "790px",
    p: 0,
    "@media (max-width: 900px)": {
      p: 2,
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },
  myProductsContainer: {
    ...theme.components.box.sectionContainer,
    minWidth: "750px",
    "@media (max-width: 900px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  topProductsContainer: {
    ...theme.components.box.sectionContainer,
    maxWidth: "340px",
    "@media (max-width: 1300px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  categoryContainer: {
    ...theme.components.box.sectionContainer,
    maxWidth: "340px",
    "@media (max-width: 1300px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },
};
export default ProductsShopContent;
