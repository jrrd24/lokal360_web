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

function ShopInfoContent() {
  const [currentShopData, setCurrentShopData] = useState(shopData[0]);

  useEffect(() => {
    setCurrentShopData(shopData[0]);
  }, [shopData]);

  //destructure shopData
  const {
    shopID,
    shopOwnerID,
    name,
    type,
    description,
    categoryID,
    shipping_deliver_enabled,
    shipping_pickup_enabled,
    address_city,
    address_country,
    address_district,
    address_iso_country_code,
    address_postal_code,
    address_region,
    address_street,
    address_street_no,
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
  } = currentShopData;

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
      <Box
        sx={{
          ...theme.components.box.mainContent,
        }}
      >
        {/*Main Content*/}
        <Box
          sx={{
            ...theme.components.box.contentColumn,
            "@media (max-width: 1516px)": {
              alignItems: "center",
              justifyContent: "center",
              minWidth: "100%",
            },
          }}
        >
          {/*Display Shop Info*/}
          <Box
            sx={{
              minWidth: "600px",
              "@media (max-width: 912px)": {
                alignItems: "center",
                justifyContent: "center",
                minWidth: "100%",
              },
            }}
          >
            <DisplayShopInfo
              shopName={name}
              totalSales={total_sales}
              noOfProducts={no_of_products}
              noOfFollowers={no_of_followers}
              logo={logo_img_link}
              shopData={shopData[0]}
              shopID={shopID}
            />
          </Box>

          {/*Basic Shop Info*/}
          <Box
            sx={{
              minWidth: "600px",
              ...theme.components.box.sectionContainer,
              "@media (max-width: 912px)": {
                alignItems: "center",
                justifyContent: "center",
                minWidth: "100%",
              },
            }}
          >
            <BasicShopInfo
              shopName={name}
              category={categoryID}
              type={type}
              description={description}
              deliver={shipping_deliver_enabled}
              pickup={shipping_pickup_enabled}
            />
          </Box>

          {/*Address Info*/}
          <Box
            sx={{
              minWidth: "600px",
              ...theme.components.box.sectionContainer,
              "@media (max-width: 912px)": {
                alignItems: "center",
                justifyContent: "center",
                minWidth: "100%",
              },
            }}
          >
            <ShopAddress />
          </Box>

          {/*Contact Info*/}
          <Box
            sx={{
              minWidth: "600px",
              ...theme.components.box.sectionContainer,
              "@media (max-width: 912px)": {
                alignItems: "center",
                justifyContent: "center",
                minWidth: "100%",
              },
            }}
          >
            <ContactInfo phoneNum={phone_number} website={website_link} />
          </Box>

          {/*Operating hours*/}
          <Box
            sx={{
              minWidth: "600px",
              ...theme.components.box.sectionContainer,
              "@media (max-width: 912px)": {
                alignItems: "center",
                justifyContent: "center",
                minWidth: "100%",
              },
            }}
          >
            <OperatingHours
              days={days}
              timeOpen={time_open}
              timeClose={time_close}
            />
          </Box>

          {/*Logo and Header*/}
          <Box
            sx={{
              minWidth: "600px",
              ...theme.components.box.sectionContainer,
              "@media (max-width: 912px)": {
                alignItems: "center",
                justifyContent: "center",
                minWidth: "100%",
              },
            }}
          >
            <LogoAndHeader logo={logo_img_link} header={header_img_link} />
          </Box>

          {/*Color*/}
          <Box
            sx={{
              minWidth: "600px",
              ...theme.components.box.sectionContainer,
              "@media (max-width: 912px)": {
                alignItems: "center",
                justifyContent: "center",
                minWidth: "100%",
              },
            }}
          >
            <SelectColor color={custom_color_hex} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ShopInfoContent;
