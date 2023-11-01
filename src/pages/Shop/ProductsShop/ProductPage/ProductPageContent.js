import React, { useState, useEffect } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import PropTypes from "prop-types";
import theme from "../../../../Theme";
import PageInfoComponent from "../../../../components/PageInfoAndTime/PageInfoComponent";
import { LoadingCircle } from "../../../../components/Loading/Loading";
import CustomAlert from "../../../../components/CustomAlert";
import { useNavigate } from "react-router-dom";
import ReviewContainer from "../../../../components/ShopOnly/ReviewContainer";
import MapData from "../../../../utils/MapData";
import reviewData from "../../../../data/reviewData";
import { useRequestProcessor } from "../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import ProductInfo from "./ProductPageComponents/ProductInfo";
import Variations from "./ProductPageComponents/Variations";
import Promos from "./ProductPageComponents/Promos";
import Vouchers from "./ProductPageComponents/Vouchers";
import Details from "./ProductPageComponents/Details";
import ProductImages from "./ProductPageComponents/ProductImages";
import { BASE_URL } from "../../../../api/Api";
import useAlert from "../../../../hooks/useAlert";
import Error404 from "../../../../components/Loading/Error404";

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

function ProductPageContent({ selectedProductID, setProductName }) {
  const [open, setOpen] = useState(false);
  const [openNewVar, setOpenNewVar] = useState(false);
  const [openEditVar, setOpenEditVar] = useState(false);
  // CUSTOM HOOK CALLS
  const { useCustomQuery, useCustomMutate } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();

  // Handle Alert Click
  const {
    open: openAlert,
    severity,
    alertMsg,
    showAlert,
    hideAlert,
  } = useAlert();

  const handleSaveUpdateProduct = (severity, alertMsg, productName) => {
    showAlert(
      severity,
      severity === "success" ? (
        <>
          Successfully Updated Product: <b>{productName}</b>
        </>
      ) : (
        alertMsg
      )
    );
  };

  const handleSaveNewVariation = (severity, alertMsg) => {
    showAlert(severity, alertMsg);
  };

  const handleSaveEditVariation = (severity, alertMsg, variationName) => {
    showAlert(
      severity,
      severity === "success" ? (
        <>
          Successfully Updated Variation: <b>{variationName}</b>
        </>
      ) : (
        alertMsg
      )
    );
  };

  // DELETE VARIATION API CALL
  const {
    mutate: varMutate,
    onError: varOnError,
    onMutate: varOnMutate,
  } = useCustomMutate(
    "deleteVariation",
    async ({ id }) => {
      await axiosPrivate.delete(
        `/api/product/variation/delete/?prodVariationID=${id}`
      );
    },
    ["getProductData"]
  );
  // DELETE VARIATION
  const handleDelete = ({ id, name }) => {
    console.log("Deleted: ", id);
    showAlert(
      "error",
      <>
        ...Deleting <b>{name}</b>
      </>
    );

    varMutate({ id });
    if (varOnError) {
      showAlert("error", "Variation Delete Failed");
    }
    if (varOnMutate) {
      <LoadingCircle />;
    }
    setOpenEditVar(false);
  };

  const navigate = useNavigate();

  // DELETE PRODUCT API CALL
  const { mutate, onError, onMutate } = useCustomMutate(
    "deleteProduct",
    async ({ id }) => {
      await axiosPrivate.delete(`/api/product/delete/?productID=${id}`);
    },
    ["getProductData"]
  );

  const handleDeleteProduct = ({ id, name }) => {
    console.log("Deleted:", id);
    showAlert(
      "error",
      <>
        ...Deleting <b>{name}</b>
      </>
    );

    mutate({ id });
    if (onError) {
      showAlert("error", "Product Delete Failed");
    }
    if (onMutate) {
      <LoadingCircle />;
    }

    setTimeout(() => {
      navigate("/shop/products");
    }, 2000);
  };

  //for tabs
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // query shop info
  const { data, isLoading, isError } = useCustomQuery(
    "getProductData",
    () =>
      axiosPrivate
        .get(`/api/product/product_info/?productID=${selectedProductID}`)
        .then((res) => res.data),
    { enabled: true }
  );

  useEffect(() => {
    if (data && data.product_name) {
      setProductName(data.product_name);
    }
  }, [data, setProductName]);

  if (isLoading) {
    return <LoadingCircle />;
  }
  if (isError) {
    return <Error404 />;
  }
  if (!data || data.length === 0) {
    setProductName("Product");
    return <LoadingCircle />;
  }

  const {
    productID,
    product_name,
    total_sold,
    number_of_variations,
    description,
    promoID,
    price,
    rating,
    variations,
    Category: { category_name: productCategory },
    ShopCategory,
    ProductImages: Images,
    Promo: promoData,
    ProductVariations,
    VoucherAppliedProducts,
  } = data || {};

  console.log();

  const product_thumbnail =
    Images.length > 0 ? `${BASE_URL}/${Images[0].prod_image}` : null;
  const shopCategory = ShopCategory ? ShopCategory.shop_category_name : 0;

  return (
    <div>
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
              <ProductInfo
                productID={productID}
                productImage={product_thumbnail}
                name={product_name}
                totalSales={total_sold * price}
                amountSold={total_sold}
                noOfVariations={number_of_variations}
                productData={data}
                open={open}
                setOpen={setOpen}
                handleSave={handleSaveUpdateProduct}
                handleDelete={handleDeleteProduct}
              />

              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="inherit"
                variant="fullWidth"
                sx={{ ...classes.tabs }}
              >
                <Tab
                  label={
                    <Typography
                      variant="sectionTitleSmall"
                      sx={{ ...classes.tab }}
                    >
                      Details
                    </Typography>
                  }
                  {...a11yProps(0)}
                />
                <Tab
                  label={
                    <Typography
                      variant="sectionTitleSmall"
                      sx={{ ...classes.tab }}
                    >
                      Comments
                    </Typography>
                  }
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>

            {/*Details */}
            <CustomTabPanel value={value} index={0}>
              <Box sx={{ ...classes.main }}>
                {/*Product Variations*/}
                <Box sx={{ ...classes.content }}>
                  <Variations
                    variations={variations}
                    openNewVar={openNewVar}
                    setOpenNewVar={setOpenNewVar}
                    openEditVar={openEditVar}
                    setOpenEditVar={setOpenEditVar}
                    handleSaveNew={handleSaveNewVariation}
                    handleSaveEdit={handleSaveEditVariation}
                    handleDelete={handleDelete}
                    productID={productID}
                    name={product_name}
                    data={ProductVariations}
                  />
                </Box>

                {/*Appllied Promos*/}
                <Box sx={{ ...classes.content }}>
                  <Promos promoID={promoID} promoData={promoData} />
                </Box>

                {/*Vouchers*/}
                <Box sx={{ ...classes.content }}>
                  <Vouchers productID={productID} />
                </Box>

                {/*Product Details*/}
                <Box sx={{ ...classes.content }}>
                  <Details
                    name={product_name}
                    category={productCategory}
                    shopCategory={shopCategory}
                    description={description}
                    rating={rating}
                  />
                </Box>

                {/*Product Images*/}
                <Box sx={{ ...classes.content }}>
                  <ProductImages thumbnail={product_thumbnail} />
                </Box>
              </Box>
            </CustomTabPanel>

            {/*Comments*/}
            <CustomTabPanel value={value} index={1}>
              <MapData
                inputData={reviewData}
                component={ReviewContainer}
                idName={"reviewID"}
                condition={(review) => review.productID === productID}
                nullMessage={"No Comments Found"}
                nullImg
              />
            </CustomTabPanel>
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
  main: {
    ...theme.components.box.contentColumn,
    width: "600px",
    "@media (max-width: 900px)": {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
  },

  loader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },

  displayInfo: {
    "@media (max-width: 900px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  tab: {
    color: "inherit",
    fontSize: 18,
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
