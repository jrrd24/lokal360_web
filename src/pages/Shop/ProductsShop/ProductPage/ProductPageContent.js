import React, { useState, useEffect, lazy, Suspense } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import PropTypes from "prop-types";
import theme from "../../../../Theme";
import PageInfoComponent from "../../../../components/PageInfoAndTime/PageInfoComponent";
import productData from "../../../../data/productData";
import { LoadingCircle } from "../../../../components/Loading/Loading";
// Lazy-loaded components
const ProductInfo = lazy(() => import("./ProductPageComponents/ProductInfo"));
const Variations = lazy(() => import("./ProductPageComponents/Variations"));
const Promos = lazy(() => import("./ProductPageComponents/Promos"));
const Vouchers = lazy(() => import("./ProductPageComponents/Vouchers"));
const Details = lazy(() => import("./ProductPageComponents/Details"));
const ProductImages = lazy(() =>
  import("./ProductPageComponents/ProductImages")
);

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ProductPageContent({ selectedProductID }) {
  // Use state to store the selectedProduct
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Use useEffect to fetch selectedProduct based on selectedProductId
  useEffect(() => {
    const foundProduct = productData.find(
      (product) => product.productID === selectedProductID
    );

    foundProduct ? setSelectedProduct(foundProduct) : setSelectedProduct(null);
  }, [selectedProductID]);

  const {
    productID,
    product_image,
    name,
    total_sold,
    status,
    number_of_variations,
    promo_type,
    is_featured,
    category,
    description,
    voucherID,
    shopCategoryID,
    shopCategory,
    promoID,
    price,
    orig_price,
    rating,
    variations,
  } = selectedProduct || {};

  //for tabs
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ ...theme.components.box.pageContainer }}>
      <PageInfoComponent
        PageName={"Product Information"}
        Subtitle={`View and Manage Product Information`}
      />
      {/*Page Content */}
      <Box sx={{ ...theme.components.box.mainContent }}>
        {/*Main Content*/}
        <Box sx={{ ...classes.main }}>
          {/*Display Product Info*/}
          <Box sx={{ ...classes.displayInfo }}>
            <Suspense fallback={<LoadingCircle />}>
              <ProductInfo
                productID={productID}
                productImage={product_image}
                name={name}
                totalSales={total_sold * price}
                amountSold={total_sold}
                noOfVariations={number_of_variations}
              />
            </Suspense>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="inherit"
              variant="fullWidth"
              sx={{ ...classes.tabs }}
            >
              <Tab label="Details" {...a11yProps(0)} />
              <Tab label="Comments" {...a11yProps(1)} />
              <Tab label="Analytics" {...a11yProps(2)} />
            </Tabs>
          </Box>

          {/*Details */}
          <CustomTabPanel value={value} index={0}>
            <Box sx={{ ...classes.main }}>
              {/*Product Variations*/}
              <Box sx={{ ...classes.content }}>
                <Suspense fallback={<LoadingCircle />}>
                  <Variations variations={variations} />
                </Suspense>
              </Box>

              {/*Appllied Promos*/}
              <Box sx={{ ...classes.content }}>
                <Suspense fallback={<LoadingCircle />}>
                  <Promos promoID={promoID} />
                </Suspense>
              </Box>

              {/*Vouchers*/}
              <Box sx={{ ...classes.content }}>
                <Suspense fallback={<LoadingCircle />}>
                  <Vouchers productID={productID} />
                </Suspense>
              </Box>

              {/*Product Details*/}
              <Box sx={{ ...classes.content }}>
                <Suspense fallback={<LoadingCircle />}>
                  <Details
                    name={name}
                    category={category}
                    shopCategory={shopCategory}
                    description={description}
                    rating={rating}
                  />
                </Suspense>
              </Box>

              {/*Product Images*/}
              <Box sx={{ ...classes.content }}>
                <Suspense fallback={<LoadingCircle />}>
                  <ProductImages />
                </Suspense>
              </Box>
            </Box>
          </CustomTabPanel>

          {/*Comments*/}
          <CustomTabPanel value={value} index={1}>
            All Comments
          </CustomTabPanel>

          {/*Analytics*/}
          <CustomTabPanel value={value} index={2}>
            Product Analytics
          </CustomTabPanel>
        </Box>
      </Box>
    </Box>
  );
}

const classes = {
  main: {
    ...theme.components.box.contentColumn,
    width: "600px",
    "@media (max-width: 900px)": {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
  },
  displayInfo: {
    "@media (max-width: 900px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  content: {
    minWidth: "600px",
    ...theme.components.box.sectionContainer,
    "@media (max-width: 900px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  tabs: {
    height: 50,
    width: "100%",
    backgroundColor: `${theme.palette.background.paper}`,
    borderRadius: 5,
    mt: 2,
  },
};

export default ProductPageContent;
