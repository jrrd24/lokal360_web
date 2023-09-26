import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { OrderStatusContainer } from "../../../../../components/ShopOnly/OrderCount";
import VerifiedIcon from "@mui/icons-material/Verified";
import { BsBoxSeam } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import MopedIcon from "@mui/icons-material/Moped";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import CancelIcon from "@mui/icons-material/Cancel";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import theme from "../../../../../Theme";

function OrderStatus({ status }) {
  return (
    <div>
      <Stack spacing={3} width={"100%"}>
        {/*Section Name */}
        <Stack
          direction={"row"}
          sx={{ alignItems: "baseline", justifyContent: "space-between" }}
        >
          <Typography variant="sectionTitleSmall">Order Status</Typography>
        </Stack>

        <Box sx={{ ...classes.mainContainer }}>
          <OrderStatusContainer
            component={VerifiedIcon}
            color={`${theme.palette.status.pending}`}
            count={1}
            status="Pending Approval"
            isSelected={status === "Pending Approval"}
          />
          <OrderStatusContainer
            component={BsBoxSeam}
            color={`${theme.palette.status.preparing}`}
            count={3}
            status="Preparing"
            isSelected={status === "Preparing"}
          />
          <OrderStatusContainer
            component={BiShoppingBag}
            color={`${theme.palette.status.pickUp}`}
            count={1}
            status="Ready For Pick-Up"
            isSelected={status === "Ready For Pick-Up"}
          />
          <OrderStatusContainer
            component={MopedIcon}
            color={`${theme.palette.status.delivery}`}
            count={3}
            status="On Delivery"
            isSelected={status === "On Delivery"}
          />

          <OrderStatusContainer
            component={HourglassEmptyIcon}
            color={`${theme.palette.status.complete}`}
            count={1523}
            status="Complete"
            isSelected={status === "Complete"}
          />

          <OrderStatusContainer
            component={CancelIcon}
            color={`${theme.palette.status.cancel}`}
            count={3}
            status="Cancelled"
            isSelected={status === "Cancelled"}
          />

          <OrderStatusContainer
            component={HiOutlineReceiptRefund}
            color={`${theme.palette.status.refund}`}
            count={0}
            status="For Refund"
            isSelected={status === "For Refund"}
          />
        </Box>
      </Stack>
    </div>
  );
}

const classes = {
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

export default OrderStatus;
