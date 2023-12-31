import React from "react";
import { Box, CircularProgress } from "@mui/material";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import BasicShopInfo from "./ShopInfoComponents/BasicShopInfo";
import DisplayShopInfo from "./ShopInfoComponents/DisplayShopInfo";
import ShopAddress from "./ShopInfoComponents/ShopAddress";
import ContactInfo from "./ShopInfoComponents/ContactInfo";
import OperatingHours from "./ShopInfoComponents/OperatingHours";
import LogoAndHeader from "./ShopInfoComponents/LogoAndHeader";
import SelectColor from "./ShopInfoComponents/SelectColor";
import theme from "../../../Theme";
import { useRequestProcessor } from "../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useAuth from "../../../hooks/useAuth";
import { BASE_URL } from "../../../api/Api";
import EmployeeUnauthorized from "../../../components/Loading/EmployeeUnauthorized";
import useAlert from "../../../hooks/useAlert";
import MapComponent from "./ShopInfoComponents/SetLocationDialog/MapComponent";

function ShopInfoContent() {
  const { useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  // Handle Alert Click
  const {
    open: openAlert,
    severity,
    alertMsg,
    showAlert,
    hideAlert,
  } = useAlert();

  // Handle Open Dialog Box
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (severity, alertMsg) => {
    setOpen(false);
    showAlert(severity, alertMsg);
  };

  const { data, isLoading, isError } = useCustomQuery(
    "getShopInfo",
    () =>
      axiosPrivate
        .get(`/api/shopInfo?shopID=${auth.shopID}`)
        .then((res) => res.data),
    { enabled: true }
  );

  if (isLoading) {
    <Box sx={{ ...classes.loader }}>
      <CircularProgress />
    </Box>;
  }
  if (isError) {
    return <p>Error: {isError.message}</p>;
  }
  if (!data || data.length === 0) {
    return (
      <Box sx={{ ...classes.loader }}>
        <CircularProgress />
      </Box>
    );
  }

  //destructure shopData
  const {
    shopID,
    shop_name,
    type,
    description,
    Category: { category_name },
    shipping_deliver_enabled,
    shipping_pickup_enabled,
    address_municipality,
    address_province,
    address_postal_code,
    address_region,
    address_line_1,
    address_line_2,
    address_barangay,
    latitude,
    longitude,
    phone_number,
    website_link,
    is_open_mon,
    is_open_tues,
    is_open_wed,
    is_open_thurs,
    is_open_fri,
    is_open_sat,
    is_open_sun,
    time_close,
    time_open,
    logo_img_link,
    header_img_link,
    custom_color_hex,
    sells_raw_mats,
  } = data.shopInfo;

  // images
  const logoPath = `${BASE_URL}/${logo_img_link}`;
  const headerPath = `${BASE_URL}/${header_img_link}`;

  //for days open (operating hours)
  const days = [
    { name: "Mon", value: is_open_mon },
    { name: "Tue", value: is_open_tues },
    { name: "Wed", value: is_open_wed },
    { name: "Thu", value: is_open_thurs },
    { name: "Fri", value: is_open_fri },
    { name: "Sat", value: is_open_sat },
    { name: "Sun", value: is_open_sun },
  ];

  return (
    <Box sx={{ ...theme.components.box.pageContainer }}>
      <PageInfoComponent
        PageName={"Shop Information"}
        Subtitle={"View and Manage your Basic Shop Information"}
      />

      {/*Page Content */}
      {auth?.employeePriviledges?.accessShopInformation ||
      auth?.roles?.includes("shop owner") ? (
        <Box sx={{ ...theme.components.box.mainContent }}>
          {/*Main Content*/}
          <Box sx={{ ...classes.main }}>
            {/*Display Shop Info*/}
            <Box sx={{ ...classes.displayInfo }}>
              <DisplayShopInfo
                shopName={shop_name}
                totalSales={data.totalSales}
                noOfProducts={data.productCount}
                noOfFollowers={data.followerCount}
                logo={logoPath}
                shopData={data.shopInfo}
                shopID={shopID}
              />
            </Box>

            {/*Basic Shop Info*/}
            <Box sx={{ ...classes.content }}>
              <BasicShopInfo
                shopName={shop_name}
                category={category_name}
                type={type}
                description={description}
                deliver={shipping_deliver_enabled}
                pickup={shipping_pickup_enabled}
                sellsRawMaterials={sells_raw_mats}
              />
            </Box>

            {/*Address Info*/}
            <Box sx={{ ...classes.content }}>
              <ShopAddress
                open={open}
                handleOpen={handleOpen}
                handleClose={handleClose}
                handleSave={handleSave}
                addressLine1={address_line_1}
                addressLine2={address_line_2}
                barangay={address_barangay}
                municipality={address_municipality}
                region={address_region}
                postalCode={address_postal_code}
                province={address_province}
                latitude={latitude}
                longitude={longitude}
              />
            </Box>

            {/*Contact Info*/}
            <Box sx={{ ...classes.content }}>
              <ContactInfo phoneNum={phone_number} website={website_link} />
            </Box>

            {/*Operating hours*/}
            <Box sx={{ ...classes.content }}>
              <OperatingHours
                days={days}
                timeOpen={time_open}
                timeClose={time_close}
              />
            </Box>

            {/*Logo and Header*/}
            <Box sx={{ ...classes.content }}>
              <LogoAndHeader logo={logoPath} header={headerPath} />
            </Box>

            {/*Color*/}
            <Box sx={{ ...classes.content }}>
              <SelectColor color={custom_color_hex} />
            </Box>
          </Box>
        </Box>
      ) : (
        <EmployeeUnauthorized />
      )}
    </Box>
  );
}

const classes = {
  main: {
    ...theme.components.box.contentColumn,
    alignItems: "center",
    justifyContent: "center",
    minWidth: "100%",
  },

  loader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },

  displayInfo: {
    minWidth: "600px",
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
};
export default ShopInfoContent;
