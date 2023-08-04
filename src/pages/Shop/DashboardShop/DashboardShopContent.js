import React from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import {
  Box,
  Avatar,
  Divider,
  Stack,
  Typography,
  Badge,
  Select,
  Link,
} from "@mui/material";
import styles from "../../../css/Styles.module.css";
import maleAvatar from "../../../assets/avatars/128_1.png";
import lokal360_Logo from "../../../assets/lokal360_Logo.png";
import { styled } from "@mui/system";
import OrderCount from "../../../components/OrderCount";
import MenuItem from "@mui/material/MenuItem";
import VerifiedIcon from "@mui/icons-material/Verified";
import { BsBoxSeam } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import MopedIcon from "@mui/icons-material/Moped";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CancelIcon from "@mui/icons-material/Cancel";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import {
  GetDate,
  GetMonthFirstDay,
  GetMonthLastDay,
  GetWeekFirstDay,
  GetWeekLastDay,
  GetYearFirstDay,
  GetYearLastDay,
} from "../../../components/Utils/GetDate";
import CustomerContainer from "../../../components/CustomerContainer";
import Styles from "../../../css/Styles.module.css";
import userData from "./DummyCustomerData";
import { DateRange } from "@mui/icons-material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    fontSize: "14px",
    height: "20px",
    textAlign: "center",
  },
}));

function DashboardShopContent() {
  const [orderSelect, setOrderSelect] = React.useState("1");
  const [orderRange, setOrderRange] = React.useState(<GetDate />);
  const [orderRangeEnd, setOrderRangeEnd] = React.useState("");

  const handleChange = (event) => {
    setOrderSelect(event.target.value);
    if (event.target.value === 1) {
      setOrderRange(<GetDate />);
      setOrderRangeEnd("");
    } else if (event.target.value === 2) {
      setOrderRange(<GetWeekFirstDay />);
      setOrderRangeEnd(<GetWeekLastDay />);
    } else if (event.target.value === 3) {
      setOrderRange(<GetMonthFirstDay />);
      setOrderRangeEnd(<GetMonthLastDay />);
    } else if (event.target.value === 4) {
      setOrderRange(<GetYearFirstDay />);
      setOrderRangeEnd(<GetYearLastDay />);
    } else {
      setOrderRange("");
      setOrderRangeEnd("");
    }
  };

  return (
    <Box sx={{ backgroundColor: "transparent" }}>
      <PageInfoComponent
        PageName={"Shop Dashboard"}
        Subtitle={"Welcome, {Shop Owner Name}"}
      />

      {/*Content */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "32px",
          flexWrap: "wrap",
          P: 5,
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {/*First Row*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "32px",
            flexWrap: "wrap",
            "@media (max-width: 600px)": {
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          {/*User and Shop Info */}
          <Box
            className={`${styles.sectionContainer}`}
            sx={{
              minWidth: "250px",
              order: 1,
              "@media (max-width: 1516px)": {
                order: 2,
                alignItems: "center",
                justifyContent: "center",
                minWidth: "48%",
              },
              "@media (max-width: 1137px)": {
                minWidth: "100%",
              },
            }}
          >
            <Stack
              spacing={2}
              sx={{
                alignItems: "center",
                justifyItems: "center",
                textAlign: "center",
              }}
            >
              {/*Shop Logo */}
              <Avatar
                className={`${styles.avatar}`}
                sx={{ height: 75, width: 75 }}
                src={lokal360_Logo}
              />

              {/*Shop Name*/}
              <Typography variant="sectionTitle">Bamboo Land</Typography>

              {/*Shop Info*/}
              <Stack spacing={5} direction={"row"}>
                {/*Products Count */}
                <Stack spacing={0}>
                  <Typography variant="sectionTitleSmall" color={"primary"}>
                    999
                  </Typography>
                  <Typography variant="subtitle1">Products</Typography>
                </Stack>

                {/*Followers Count */}
                <Stack spacing={0}>
                  <Typography variant="sectionTitleSmall" color={"primary"}>
                    999
                  </Typography>
                  <Typography variant="subtitle1">Followers</Typography>
                </Stack>
              </Stack>

              {/*Divider */}
              <Box sx={{ width: "100%" }}>
                <Divider />
              </Box>

              {/*User Avatar */}
              <Avatar
                className={`${styles.avatar}`}
                sx={{ height: 75, width: 75 }}
                src={maleAvatar}
              />

              {/*User Info */}
              <Stack spacing={0}>
                {/*User Name */}
                <Typography variant="sectionTitleSmall">Pochi Ta</Typography>
                {/*User Job Tile */}
                <Typography variant="subtitle2">Store Owner</Typography>
              </Stack>
            </Stack>
          </Box>

          {/*Order Summary */}
          <Box
            className={`${styles.sectionContainer}`}
            sx={{
              maxWidth: "750px",
              order: 1,
              "@media (max-width: 1516px)": {
                order: 1,
                alignItems: "center",
                justifyContent: "center",
                minWidth: "100%",
              },
            }}
          >
            <Stack spacing={3}>
              {/*Section Header */}
              <Stack
                spacing={2}
                direction={"row"}
                sx={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                {/*Section Name and Active Orders */}
                <Stack spacing={0} sx={{ padding: 1 }}>
                  <Typography variant="sectionTitle">
                    Orders Overview
                  </Typography>
                  <Stack
                    spacing={3}
                    direction={"row"}
                    sx={{ alignItems: "center", justifyItems: "center" }}
                  >
                    <Typography variant="subtitle" component={"span"}>
                      Active Orders
                    </Typography>

                    {/*Active Orders Count */}
                    <StyledBadge
                      badgeContent={11}
                      color="primary"
                      max={99}
                      showZero
                    />
                  </Stack>
                </Stack>

                <Box
                  className={`${Styles.grow}`}
                  sx={{ justifyContent: "center" }}
                >
                  <Link href="#" variant="seeAll" underline="none">
                    {"See All"}
                  </Link>
                </Box>

                {/*Date time */}
                <Stack direction={"row"} spacing={2}>
                  {/*Combo Box */}
                  <Select
                    labelId="select-order-time"
                    id="select-order-time"
                    value={orderSelect}
                    onChange={handleChange}
                    sx={{
                      width: "130px",
                    }}
                  >
                    <MenuItem value={1}>Today</MenuItem>
                    <MenuItem value={2}>This Week</MenuItem>
                    <MenuItem value={3}>This Month</MenuItem>
                    <MenuItem value={4}>This Year</MenuItem>
                    <MenuItem value={5}>All Time</MenuItem>
                  </Select>

                  {/*Display Date */}
                  <Stack
                    spacing={1}
                    direction={"row"}
                    sx={{
                      minWidth: 140,
                      backgroundColor: "#F2F2F2",
                      p: 1,
                      alignItems: "center",
                      justifyItems: "center",
                      border: "1px solid #444",
                      borderRadius: 2,
                    }}
                  >
                    <Box>
                      <DateRange />
                    </Box>
                    <Box>
                      <Typography variant="h7">
                        {orderRange} {orderRangeEnd === "" ? "" : "to"}{" "}
                      </Typography>
                      <Typography variant="h7">{orderRangeEnd} </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </Stack>

              {/*Main */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "16px",
                  flexWrap: "wrap",
                  "@media (max-width: 600px)": {
                    alignItems: "center",
                    justifyContent: "center",
                  },
                }}
              >
                <OrderCount
                  component={VerifiedIcon}
                  color="#F35B04"
                  count="1"
                  status="Pending Approval"
                />
                <OrderCount
                  component={BsBoxSeam}
                  color="#F18701"
                  count="3"
                  status="Preparing"
                />
                <OrderCount
                  component={BiShoppingBag}
                  color="#F7B801"
                  count="1"
                  status="Ready For Pick-Up"
                />
                <OrderCount
                  component={MopedIcon}
                  color="#7678ED"
                  count="3"
                  status="On Delivery"
                />

                <OrderCount
                  component={HourglassEmptyIcon}
                  color="#7A9163"
                  count="3"
                  status="Complete"
                />

                <OrderCount
                  component={CancelIcon}
                  color="#AB3130"
                  count="0"
                  status="Cancelled"
                />

                <OrderCount
                  component={HiOutlineReceiptRefund}
                  color="#231F20"
                  count="0"
                  status="For Refund"
                />
              </Box>
            </Stack>
          </Box>

          {/*Valuable Customers */}
          <Box
            className={`${styles.sectionContainer}`}
            sx={{
              maxWidth: "340px",
              order: 3,
              "@media (max-width: 1516px)": {
                order: 3,
                alignItems: "center",
                justifyContent: "center",
                minWidth: "48.5%",
              },
              "@media (max-width: 1137px)": {
                minWidth: "100%",
              },
            }}
          >
            {/*Section Header */}
            <Stack
              spacing={1}
              direction={"column"}
              sx={{
                "@media (max-width: 1516px)": {
                  alignItems: "center",
                  justifyContent: "center",
                },
              }}
            >
              {/*Section NaME */}
              <Stack
                spacing={3}
                direction={"row"}
                sx={{ alignItems: "baseline", justifyItems: "baseline" }}
              >
                <Typography variant="sectionTitle">
                  Valuable Customers
                </Typography>
                <Box className={`${Styles.grow}`}>
                  <Link href="#" variant="seeAll" underline="none">
                    {"See All"}
                  </Link>
                </Box>
              </Stack>

              {userData.length > 0 ? (
                userData.map((userData) => (
                  <CustomerContainer
                    key={userData.id}
                    img={userData.img}
                    name={userData.name}
                    orders={userData.orders}
                    total={userData.total}
                  />
                ))
              ) : (
                <Typography>No Record Found</Typography>
              )}
            </Stack>
          </Box>
        </Box>

        {/*Second Row*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "32px",
            flexWrap: "wrap",
            "@media (max-width: 600px)": {
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          {/*Fill in for User and Shop Info */}
          <Box
            sx={{
              minWidth: "250px",
              order: 1,

              "@media (max-width: 1516px)": {
                display: "none",
              },
              "@media (max-width: 600px)": {
                order: 2,
                minWidth: "360px",
                display: "none",
              },
            }}
          />

          {/*Active Lokal Ads*/}
          <Box
            className={`${styles.sectionContainer}`}
            sx={{
              width: "360px",
              order: 1,
              "@media (max-width: 600px)": {
                order: 1,
                minWidth: "360px",
              },
            }}
          >
            {/*Section Header */}
            <Stack
              spacing={1}
              direction={"column"}
              sx={{
                "@media (max-width: 1516px)": {
                  alignItems: "center",
                  justifyContent: "center",
                },
              }}
            >
              {/*Section Name */}
              <Stack
                spacing={9}
                direction={"row"}
                sx={{ alignItems: "baseline", justifyItems: "baseline" }}
              >
                <Typography variant="sectionTitle">Active Lokal Ads</Typography>
                <Box className={`${Styles.grow}`}>
                  <Link href="#" variant="seeAll" underline="none">
                    {"See All"}
                  </Link>
                </Box>
              </Stack>

              {/*TODO: Add lokal ads here */}
            </Stack>
          </Box>

          {/*Active Vouchers*/}
          <Box
            className={`${styles.sectionContainer}`}
            sx={{
              width: "355px",
              order: 1,
              "@media (max-width: 600px)": {
                order: 1,
                minWidth: "360px",
              },
            }}
          >
            {/*Section Header */}
            <Stack
              spacing={1}
              direction={"column"}
              sx={{
                "@media (max-width: 1516px)": {
                  alignItems: "center",
                  justifyContent: "center",
                },
              }}
            >
              {/*Section Name */}
              <Stack
                spacing={9}
                direction={"row"}
                sx={{ alignItems: "baseline", justifyItems: "baseline" }}
              >
                <Typography variant="sectionTitle">Active Vouchers</Typography>
                <Box className={`${Styles.grow}`}>
                  <Link href="#" variant="seeAll" underline="none">
                    {"See All"}
                  </Link>
                </Box>
              </Stack>

              {/*TODO: Add vouchers here */}
            </Stack>
          </Box>

          {/*Product Status */}
          <Box
            className={`${styles.sectionContainer}`}
            sx={{
              maxWidth: "340px",
              order: 3,
              "@media (max-width: 600px)": {
                order: 3,
                minWidth: "360px",
              },
            }}
          >
            {/*Section Header */}
            <Stack spacing={1} direction={"column"}>
              {/*Section NaME */}
              <Stack
                spacing={9}
                direction={"row"}
                sx={{ alignItems: "baseline", justifyItems: "baseline" }}
              >
                <Typography variant="sectionTitle">Product Status</Typography>
                <Box className={`${Styles.grow}`}>
                  <Link href="#" variant="seeAll" underline="none">
                    {"See All"}
                  </Link>
                </Box>
              </Stack>
              {/*TODO: Add Product Status */}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardShopContent;
