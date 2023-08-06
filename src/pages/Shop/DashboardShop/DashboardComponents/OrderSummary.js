import React, { useState } from "react";
import { Box, Stack, Typography, Badge } from "@mui/material";
import { styled } from "@mui/system";
import { GetDate } from "../../../../components/Utils/GetDate";
import OrderCount from "../../../../components/ShopOnly/OrderCount";
import VerifiedIcon from "@mui/icons-material/Verified";
import { BsBoxSeam } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import MopedIcon from "@mui/icons-material/Moped";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CancelIcon from "@mui/icons-material/Cancel";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import Styles from "../../../../css/Styles.module.css";
import DateSelection from "../../../../components/DateSelection";
import CustomLink from "../../../../components/CustomLink";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    fontSize: "14px",
    height: "20px",
    textAlign: "center",
  },
}));
function OrderSummary() {
  const [RangeOrder, setRangeOrder] = useState(<GetDate />);
  const [RangeEndOrder, setRangeEndOrder] = useState("");
  const handleRangeChange = (range) => {
    setRangeOrder(range);
  };
  const handleRangeEndChange = (rangeEnd) => {
    setRangeEndOrder(rangeEnd);
  };
  return (
    <Stack spacing={3}>
      {/*Section Header */}
      <Stack
        spacing={2}
        direction={"row"}
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/*Section Name and Active Orders */}
        <Stack
          spacing={0}
          sx={{
            order: 1,
            "@media (max-width: 600px)": {
              order: 1,
            },
          }}
        >
          <Typography variant="sectionTitle">Orders Overview</Typography>
          <Stack
            spacing={3}
            direction={"row"}
            sx={{ alignItems: "center", justifyItems: "center" }}
          >
            <Typography variant="subtitle" component={"span"}>
              Active Orders
            </Typography>

            {/*Active Orders Count */}
            <StyledBadge badgeContent={11} color="primary" max={99} showZero />
          </Stack>
        </Stack>

        {/*See All */}
        <Box
          className={`${Styles.grow}`}
          sx={{
            justifyContent: "center",

            order: 3,
            "@media (max-width: 760px)": {
              order: 2,
            },
          }}
        >
          <CustomLink to="/shop/orders">{"See All"}</CustomLink>
        </Box>

        {/*Date time */}
        <Box
          sx={{
            order: 2,
            "@media (max-width: 760px)": {
              order: 3,
            },
          }}
        >
          <DateSelection
            onRangeChange={handleRangeChange}
            onRangeEndChange={handleRangeEndChange}
          />
        </Box>
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
  );
}

export default OrderSummary;
