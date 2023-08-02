import React, { useState } from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import {
  Box,
  Avatar,
  Divider,
  Stack,
  Typography,
  Badge,
  Autocomplete,
  TextField,
  Select,
} from "@mui/material";
import styles from "../../../css/Styles.module.css";
import DummyText from "./DummyText";
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
  GetWeekFirstDay,
  GetWeekLastDay,
} from "../../../components/Utils/GetDate";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    fontSize: "16px",
    height: "25px",
    textAlign: "center",
  },
}));

function DashboardShopContent() {
  const [orderSelect, setOrderSelect] = React.useState("");
  const [orderRange, setOrderRange] = React.useState("");
  const [orderRangeEnd, setOrderRangeEnd] = React.useState("");

  const handleChange = (event) => {
    setOrderSelect(event.target.value);
    if (event.target.value == 1) {
      setOrderRange(<GetDate />);
      setOrderRangeEnd("");
    } else if (event.target.value == 2) {
      setOrderRange(<GetWeekFirstDay />);
      setOrderRangeEnd(<GetWeekLastDay />);
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
        }}
      >
        {/*User and Shop Info */}
        <Box
          className={`${styles.sectionContainer}`}
          sx={{
            minWidth: "250px",
            order: 1,
            "@media (max-width: 600px)": {
              order: 2,
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

            {/*Divider */}
            <Box sx={{ width: "100%" }}>
              <Divider />
            </Box>

            {/*Notifs/ Chats */}
            <Stack spacing={2} textAlign={"initial"} sx={{ width: "90%" }}>
              {/*Notifs Total */}
              <Stack
                spacing={4}
                direction={"row"}
                sx={{ alignItems: "center" }}
              >
                <Typography variant="sectionTitleSmall" component={"span"}>
                  Notifications
                </Typography>
                <StyledBadge
                  badgeContent={100}
                  color="primary"
                  max={99}
                  showZero
                />
              </Stack>

              {/*Chats Total */}
              <Stack
                spacing={4}
                direction={"row"}
                sx={{ alignItems: "center" }}
              >
                <Typography variant="sectionTitleSmall" component={"span"}>
                  Chats
                </Typography>
                <StyledBadge
                  badgeContent={0}
                  color="primary"
                  max={99}
                  showZero
                />
              </Stack>
            </Stack>
          </Stack>
        </Box>

        {/*Order Summary */}
        <Box
          className={`${styles.sectionContainer}`}
          sx={{
            maxWidth: "800px",
            order: 1,
            "@media (max-width: 600px)": {
              order: 1,
            },
          }}
        >
          <Stack spacing={3}>
            {/*Section Title */}
            <Stack spacing={4} direction={"row"} sx={{ alignItems: "center" }}>
              <Typography variant="sectionTitle" component={"span"}>
                Orders Overview
              </Typography>
              <StyledBadge
                badgeContent={11}
                color="primary"
                max={99}
                showZero
              />
              {/*Combo Box */}
              <Select
                labelId="select-order-time"
                id="select-order-time"
                value={orderSelect}
                onChange={handleChange}
                sx={{ width: "140px" }}
              >
                <MenuItem value={1}>Today</MenuItem>
                <MenuItem value={2}>This Week</MenuItem>
                <MenuItem value={3}>This Month</MenuItem>
                <MenuItem value={4}>This Year</MenuItem>
              </Select>
            </Stack>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "16px",
                flexWrap: "wrap",
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
            maxWidth: "300px",
            order: 3,
            "@media (max-width: 600px)": {
              order: 3,
            },
          }}
        >
          Valuable Customers
          {orderRange} - {orderRangeEnd}
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardShopContent;
