import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import BasicShopInfo from "./ShopInfoComponents/BasicShopInfo";
import DisplayShopInfo from "./ShopInfoComponents/DisplayShopInfo";
import ShopAddress from "./ShopInfoComponents/ShopAddress";
import ContactInfo from "./ShopInfoComponents/ContactInfo";
import OperatingHours from "./ShopInfoComponents/OperatingHours";
import LogoAndHeader from "./ShopInfoComponents/LogoAndHeader";
import SelectColor from "./ShopInfoComponents/SelectColor";
import theme from "../../../Theme";
//import dummy data
import shopData from "../../../data/shopData";
import { useRequestProcessor } from "../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useAuth from "../../../hooks/useAuth";

function ShopInfoContent() {
  const { useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const { data, isLoading, isError } = useCustomQuery(
    "getShopInfo",
    () =>
      axiosPrivate
        .get(`/api/shopInfo?userID=${auth.userID}`)
        .then((res) => res.data),
    { enabled: true }
  );

  if (isLoading) {
    <div>loading</div>;
  }

  if (isError) {
    return <p>Error: {isError.message}</p>;
  }

  if (!data || data.length === 0) {
    return <p>No shop data available.</p>;
  }

  //destructure shopData
  const {
    shopID,
    shopOwnerID,
    shop_name,
    type,
    description,
    categoryID,
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
    custom_low_stock_lvl,
    sells_raw_mats,
    total_sales,
    no_of_products,
    no_of_followers,
    is_360_partner,
    createdAt,
    modifiedAt,
  } = data[0];

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
      <Box sx={{ ...theme.components.box.mainContent }}>
        {/*Main Content*/}
        <Box sx={{ ...classes.main }}>
          {/*Display Shop Info*/}
          <Box sx={{ ...classes.displayInfo }}>
            <DisplayShopInfo
              shopName={shop_name}
              totalSales={total_sales}
              noOfProducts={no_of_products}
              noOfFollowers={no_of_followers}
              logo={logo_img_link}
              shopData={data[0]}
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
              addressLine1={address_line_1}
              addressLine2={address_line_2}
              barangay={address_barangay}
              municipality={address_municipality}
              region={address_region}
              postalCode={address_postal_code}
              province={address_province}
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
            <LogoAndHeader logo={logo_img_link} header={header_img_link} />
          </Box>

          {/*Color*/}
          <Box sx={{ ...classes.content }}>
            <SelectColor color={custom_color_hex} />
          </Box>
        </Box>
      </Box>
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
