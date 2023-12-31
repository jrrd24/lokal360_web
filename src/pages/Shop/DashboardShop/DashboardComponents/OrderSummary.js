import React from "react";
import { Box, Stack, Typography, Badge } from "@mui/material";
import { styled } from "@mui/system";
import VerifiedIcon from "@mui/icons-material/Verified";
import { BsBoxSeam } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import MopedIcon from "@mui/icons-material/Moped";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CancelIcon from "@mui/icons-material/Cancel";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import Styles from "../../../../css/Styles.module.css";
import CustomLink from "../../../../components/CustomLink";
import DisplayDateSelection from "../../../../components/DisplayDateSelection";
import theme from "../../../../Theme";
import { OrderCount } from "../../../../components/ShopOnly/OrderCount";
import { useRequestProcessor } from "../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import useAuth from "../../../../hooks/useAuth";
import { LoadingCircle } from "../../../../components/Loading/Loading";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    fontSize: "14px",
    height: "20px",
    textAlign: "center",
  },
}));
function OrderSummary({ hideShowAll }) {
  //API CALL GET ORDER STATUS COUNT
  const { useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const { data, isLoading } = useCustomQuery(
    "getOrderStatusCount",
    () =>
      axiosPrivate
        .get(`/api/buy_product/get_status/?shopID=${auth.shopID}`)
        .then((res) => res.data),
    { enabled: true }
  );

  if (isLoading) {
    return <LoadingCircle />;
  }

  return (
    <Stack spacing={3} sx={{ width: "100%" }}>
      {/*Section Header */}
      <Box sx={{ ...classes.sectionHeader }}>
        {/*Section Name and Active Orders */}
        <Stack spacing={0} sx={{ ...classes.sectionName }}>
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
            <StyledBadge
              badgeContent={data.preparing + data.pickUp + data.onDelivery}
              color="primary"
              max={99}
              showZero
            />
          </Stack>
        </Stack>

        {/*See All */}
        <Box
          className={`${Styles.grow}`}
          sx={{ ...classes.seeAll, display: hideShowAll ? "none" : "block" }}
        >
          <CustomLink to="/shop/orders">{"See All"}</CustomLink>
        </Box>

        {/*Date time */}
        <Box sx={{ ...classes.dateTime }}>
          <DisplayDateSelection />
        </Box>
      </Box>

      {/*Main */}
      <Box sx={{ ...classes.mainContainer }}>
        <OrderCount
          component={VerifiedIcon}
          color={`${theme.palette.status.pending}`}
          count={data.pendingApproval}
          status="Pending Approval"
        />
        <OrderCount
          component={BsBoxSeam}
          color={`${theme.palette.status.preparing}`}
          count={data.preparing}
          status="Preparing"
        />
        <OrderCount
          component={BiShoppingBag}
          color={`${theme.palette.status.pickUp}`}
          count={data.pickUp}
          status="Ready For Pick-Up"
        />
        <OrderCount
          component={MopedIcon}
          color={`${theme.palette.status.delivery}`}
          count={data.onDelivery}
          status="On Delivery"
        />

        <OrderCount
          component={HourglassEmptyIcon}
          color={`${theme.palette.status.complete}`}
          count={data.complete}
          status="Complete"
        />

        <OrderCount
          component={CancelIcon}
          color={`${theme.palette.status.cancel}`}
          count={data.cancelled}
          status="Cancelled"
        />

        <OrderCount
          component={HiOutlineReceiptRefund}
          color={`${theme.palette.status.refund}`}
          count={data.refund}
          status="For Refund"
        />
      </Box>
    </Stack>
  );
}

const classes = {
  sectionHeader: {
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "100%",
  },

  sectionName: {
    order: 1,
    "@media (max-width: 600px)": {
      order: 1,
    },
  },

  seeAll: {
    justifyContent: "center",
    order: 3,
    "@media (max-width: 760px)": {
      order: 2,
    },
  },

  dateTime: {
    order: 2,
    display: "flex",
    flexDirection: "row",
    gap: "8px",
    flexWrap: "wrap",
    "@media (max-width: 760px)": {
      order: 3,
    },
  },

  mainContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    flexWrap: "wrap",
    "@media (max-width: 600px)": {
      alignItems: "center",
      justifyContent: "center",
    },
  },
};
export default OrderSummary;
