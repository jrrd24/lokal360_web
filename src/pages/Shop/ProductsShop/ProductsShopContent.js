import React, { useState, lazy, Suspense } from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import { Box } from "@mui/material";
import theme from "../../../Theme";
import CustomAlert from "../../../components/CustomAlert";
import { LoadingCircle } from "../../../components/Loading/Loading";
import { LoadingProduct } from "../../../components/Loading/LoadingProducts.js";

// Lazy-Loaded Components
const FeaturedProducts = lazy(() =>
  import("./ProductsShopComponents/FeaturedProducts")
);
const MyProducts = lazy(() => import("./ProductsShopComponents/MyProducts"));
const TopProducts = lazy(() =>
  import("../AnalyticsShop/AnalyticsComponents/TopProducts")
);
const ProductStatus = lazy(() =>
  import("../DashboardShop/DashboardComponents/ProductStatus")
);

function ProductsShopContent() {
  // Handle Open Dialog Box
  const [open, setOpen] = React.useState(false);
  // Handle Open Alert
  const [openAlert, setOpenAlert] = useState(false);
  const [severity, setSeverity] = useState("error");
  const [alertMsg, setAlertMsg] = useState("");

  const handleSave = (severity, alertMsg) => {
    setOpen(false);
    setSeverity("success");
    setAlertMsg("Successfully Created New Product");
    setOpenAlert(true);
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
              <Suspense fallback={<LoadingProduct />}>
                <FeaturedProducts />
              </Suspense>
            </Box>

            {/*My Products*/}

            <Box sx={{ ...classes.myProductsContainer }}>
              <Suspense fallback={<LoadingProduct />}>
                <MyProducts
                  handleSave={handleSave}
                  open={open}
                  setOpen={setOpen}
                />
              </Suspense>
            </Box>
          </Box>

          {/*Product Info (Right Side)*/}
          <Box sx={{ ...classes.rightContainer }}>
            {/*Products Sold Per Category */}
            <Suspense fallback={<LoadingCircle />}>
              <Box sx={{ ...classes.categoryContainer }}>
                <ProductStatus hideShowAll={true} />
              </Box>

              {/*Top Products */}
              <Box sx={{ ...classes.topProductsContainer }}>
                <TopProducts hideShowAll={true} />
              </Box>
            </Suspense>
          </Box>
        </Box>
      </Box>

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
