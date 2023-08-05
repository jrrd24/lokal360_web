import React, { useState } from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import {
  Box,
  Avatar,
  Divider,
  Stack,
  Typography,
  Badge,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import styles from "../../../css/Styles.module.css";
import maleAvatar from "../../../assets/avatars/128_1.png";
import lokal360_Logo from "../../../assets/lokal360_Logo.png";
import { styled } from "@mui/system";
import OrderCount from "../../../components/ShopOnly/OrderCount";
import VerifiedIcon from "@mui/icons-material/Verified";
import { BsBoxSeam } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import MopedIcon from "@mui/icons-material/Moped";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CancelIcon from "@mui/icons-material/Cancel";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { GetDate } from "../../../components/Utils/GetDate";
import CustomerContainer from "../../../components/ShopOnly/CustomerContainer";
import Styles from "../../../css/Styles.module.css";
import userData from "./DummyCustomerData";
import theme from "../../../Theme";
import DateSelection from "../../../components/DateSelection";
import ProductSalesGraph from "./ProductSalesGraph";
import { Navigate } from "react-router-dom";
import CustomLink from "../../../components/CustomLink";
import TruncateString from "../../../components/Utils/TruncateString";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    fontSize: "14px",
    height: "20px",
    textAlign: "center",
  },
}));

function DashboardShopContent() {
  //For Date Range Query

  const [RangeOrder, setRangeOrder] = useState(<GetDate />);
  const [RangeEndOrder, setRangeEndOrder] = useState("");
  const [RangeGraph, setRangeGraph] = useState(<GetDate />);
  const [RangeEndGraph, setRangeEndGraph] = useState("");

  const handleRangeChange = (range) => {
    setRangeOrder(range);
  };

  const handleRangeChangeGraph = (range) => {
    setRangeGraph(range);
  };

  const handleRangeEndChange = (rangeEnd) => {
    setRangeEndOrder(rangeEnd);
  };

  const handleRangeEndChangeGraph = (rangeEnd) => {
    setRangeEndGraph(rangeEnd);
  };

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        maxWidth: 2250,
        alignItems: "center",
      }}
    >
      <PageInfoComponent
        PageName={"Shop Dashboard"}
        Subtitle={"Good Morning {Shop Owner Name}"}
      />

      {/*Content */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "32px",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {/*User and Shop Info */}
        <Box
          className={`${styles.sectionContainer}`}
          sx={{
            minWidth: "1120px",
            order: 1,
            "@media (max-width: 1516px)": {
              order: 1,
              alignItems: "center",
              justifyContent: "center",
              minWidth: "100%",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "32px",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              paddingX: 5,
            }}
          >
            {/* Shop Info*/}
            <Stack spacing={2} direction={"row"} sx={{ alignItems: "center" }}>
              {/*Shop Logo */}
              <Avatar
                className={`${styles.avatar}`}
                sx={{ height: 75, width: 75 }}
                src={lokal360_Logo}
              />

              <Stack spacing={0} direction={"column"}>
                {/*Shop Name*/}
                <Typography variant="sectionTitle" sx={{ textAlign: "left" }}>
                  <TruncateString str={"Bamboo Land"} n={25} />
                </Typography>

                {/*Shop Info*/}
                <Stack spacing={3} direction={"row"}>
                  {/*Products Count */}

                  <Typography variant="sectionTitleSmall" color={"primary"}>
                    999&nbsp;
                    <Typography
                      variant="subtitle1"
                      color={"#444"}
                      component={"span"}
                    >
                      Products
                    </Typography>
                  </Typography>

                  {/*Followers Count */}
                  <Typography variant="sectionTitleSmall" color={"primary"}>
                    999&nbsp;
                    <Typography
                      variant="subtitle1"
                      color={"#444"}
                      component={"span"}
                    >
                      Followers
                    </Typography>
                  </Typography>
                </Stack>
              </Stack>
            </Stack>

            {/* User Info*/}
            <Box sx={{ alignSelf: "flex-end" }}>
              <Stack
                spacing={2}
                direction={"row"}
                sx={{
                  alignItems: "center",
                  justifyItems: "center",
                  textAlign: "center",
                }}
              >
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
          </Box>
        </Box>

        {/*First Row*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "32px",
            flexWrap: "wrap",
            "@media (max-width: 1516px)": {
              minWidth: "100%",
            },
            "@media (max-width: 600px)": {
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
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
                  <CustomLink to="/shop/orders">{"See All"}</CustomLink>
                </Box>

                {/*Date time */}
                <DateSelection
                  onRangeChange={handleRangeChange}
                  onRangeEndChange={handleRangeEndChange}
                />
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
                  <CustomLink to="/shop/customers">{"See All"}</CustomLink>
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

            "@media (max-width: 1516px)": {
              minWidth: "100%",
            },
            "@media (max-width: 600px)": {
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          {/*Active Lokal Ads*/}
          <Box
            className={`${styles.sectionContainer}`}
            sx={{
              width: "360px",
              order: 1,
              "@media (max-width: 1516px)": {
                order: 1,
                minWidth: "100%",
              },
            }}
          >
            <Stack
              spacing={1}
              direction={"column"}
              sx={{
                "@media (max-width: 1516px)": {
                  justifyContent: "center",
                  maxWidth: "100%",
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
                  <CustomLink to="/shop/lokal_ads">{"See All"}</CustomLink>
                </Box>
              </Stack>

              {/*TODO: Add lokal ads here */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  flexWrap: "wrap",

                  minWidth: "320px",
                  height: "155px",
                  overflow: "auto",
                }}
              >
                <Box
                  sx={{ height: 145, width: 330, backgroundColor: "#ffbb03" }}
                />
                <Box
                  sx={{ height: 145, width: 330, backgroundColor: "#ffd14d" }}
                />
                <Box
                  sx={{ height: 145, width: 330, backgroundColor: "#6ef" }}
                />
              </Box>
            </Stack>
          </Box>

          {/*Active Vouchers*/}
          <Box
            className={`${styles.sectionContainer}`}
            sx={{
              width: "360px",
              order: 1,
              "@media (max-width: 1516px)": {
                order: 1,
                minWidth: "100%",
              },
            }}
          >
            <Stack
              spacing={1}
              direction={"column"}
              sx={{
                "@media (max-width: 1516px)": {
                  justifyContent: "center",
                  maxWidth: "100%",
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
                  <CustomLink to="/shop/vouchers">{"See All"}</CustomLink>
                </Box>
              </Stack>

              {/*TODO: Add vouchers here */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  flexWrap: "wrap",

                  minWidth: "320px",
                  maxWidth: "100%",
                  height: "150px",
                  overflow: "auto",
                }}
              >
                <Box
                  sx={{ height: 145, width: 250, backgroundColor: "#ffbb03" }}
                />
                <Box
                  sx={{ height: 145, width: 250, backgroundColor: "#ffd14d" }}
                />
                <Box
                  sx={{ height: 145, width: 250, backgroundColor: "#6ef" }}
                />
              </Box>
            </Stack>
          </Box>

          {/*Product Status */}
          <Box
            className={`${styles.sectionContainer}`}
            sx={{
              maxWidth: "340px",
              order: 3,

              "@media (max-width: 1516px)": {
                minWidth: "100%",
              },
            }}
          >
            <Stack spacing={1} direction={"column"}>
              {/*Section NaME */}
              <Stack
                spacing={10}
                direction={"row"}
                sx={{ alignItems: "baseline", justifyItems: "baseline" }}
              >
                <Typography variant="sectionTitle">Product Status</Typography>
                <Box className={`${Styles.grow}`}>
                  <CustomLink to="/shop/products">{"See All"}</CustomLink>
                </Box>
              </Stack>

              {/*Status Table Container*/}
              <TableContainer>
                <Table size="small">
                  <TableBody>
                    {/*In Stock */}
                    <TableRow className={`${styles.changeBG}`}>
                      <TableCell>
                        <Typography variant="body1"> In Stock</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="sectionTitleSmall"
                          sx={{ color: "#8CCC00" }}
                        >
                          13
                        </Typography>
                      </TableCell>
                    </TableRow>

                    {/*Low Stock */}
                    <TableRow className={`${styles.changeBG}`}>
                      <TableCell>
                        <Typography variant="body1"> Low Stock</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="sectionTitleSmall"
                          sx={{ color: "#F7B801" }}
                        >
                          10
                        </Typography>
                      </TableCell>
                    </TableRow>

                    {/*Out Of Stock */}
                    <TableRow className={`${styles.changeBG}`}>
                      <TableCell>
                        <Typography variant="body1"> Out of Stock</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="sectionTitleSmall"
                          sx={{ color: "#F35B04" }}
                        >
                          3
                        </Typography>
                      </TableCell>
                    </TableRow>

                    {/*Discontinued */}
                    <TableRow className={`${styles.changeBG}`}>
                      <TableCell>
                        <Typography variant="body1"> Discontinued</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="sectionTitleSmall"
                          sx={{ color: "#444" }}
                        >
                          1
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>
          </Box>
        </Box>

        {/*Third Row*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "32px",
            flexWrap: "wrap",

            "@media (max-width: 1516px)": {
              minWidth: "100%",
            },
            "@media (max-width: 600px)": {
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          {/*Product Sales Graph*/}
          <Box
            className={`${styles.sectionContainer}`}
            sx={{
              minWidth: "1120px",
              order: 1,
              "@media (max-width: 1516px)": {
                order: 1,
                alignItems: "center",
                justifyContent: "center",
                minWidth: "100%",
              },
            }}
          >
            <Stack
              spacing={3}
              direction={"column"}
              sx={{
                "@media (max-width: 1516px)": {
                  justifyContent: "center",
                },
              }}
            >
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
                {/*Section Name */}
                <Stack
                  spacing={9}
                  direction={"row"}
                  sx={{ alignItems: "baseline", justifyItems: "baseline" }}
                >
                  <Typography variant="sectionTitle" sx={{ textAlign: "left" }}>
                    Shop Activity&nbsp;-&nbsp;
                    <Typography
                      variant="inherit"
                      component={"span"}
                      sx={{
                        color: `${theme.palette.text.sixty}`,
                      }}
                    >
                      Product Sales Graph
                    </Typography>
                  </Typography>
                  <Box className={`${Styles.grow}`} sx={{ minWidth: 70 }}>
                    <CustomLink to="/shop/analytics">{"See All"}</CustomLink>
                  </Box>
                </Stack>

                {/*Date time */}
                <DateSelection
                  onRangeChange={handleRangeChangeGraph}
                  onRangeEndChange={handleRangeEndChangeGraph}
                />
              </Stack>
              {/*Section Name */}

              {/*Section Content */}
              <Box
                sx={{
                  maxWidth: "99%",
                  height: "350px",
                }}
              >
                {/*TODO: Add Graph Here */}
                {/*Graph */}
                <ProductSalesGraph />
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardShopContent;
