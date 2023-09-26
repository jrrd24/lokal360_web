import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import ButtonDelete from "../../../../../components/Buttons/ButtonDelete";
import DeleteDialog from "../../../../../components/DialogBox/DeleteDialog";
import ButtonUpdateOrder from "../../../../../components/Buttons/ButtonUpdateOrder";

function Header({ orderID, handleDelete, status, handleUpdateOrderStatus }) {
  //handle delete dialog box
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteData, setDeleteData] = useState({
    id: null,
    name: null,
  });
  const handleOpenDelete = ({ id, name }) => {
    setOpenDelete(true);
    setDeleteData({ id, name });
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  const handleCancel = () => {
    setOpenDelete(false);
  };

  // Define an array of order statuses in the desired order
  const orderStatuses = [
    "Pending Approval",
    "Preparing",
    "Ready For Pick-Up",
    "On Delivery",
    "Complete",
    "Cancelled",
    "For Refund",
  ];

  const orderStatusActions = [
    "Approve",
    "Prepared",
    "Picked-Up",
    "Delivered",
    "",
    "",
    "Chat Customer",
  ];

  // Find the index of the current status in the array
  const currentStatusIndex = orderStatuses.findIndex((item) => item === status);

  const nextStatus =
    currentStatusIndex < orderStatuses.length - 1
      ? orderStatuses[currentStatusIndex + 1]
      : status; // If it's the last status, keep the same status

  return (
    <div>
      {/*Display Page */}
      <Box sx={{ ...classes.main }}>
        {/*Shop Info and Button */}
        <Stack spacing={2} sx={{ ...classes.infoAndButtonContainer }}>
          {/*Button */}
          <Box sx={{ ...classes.buttonContainer }}>
            <ButtonDelete
              onClick={() =>
                handleOpenDelete({
                  id: orderID,
                  name: `Order# ${orderID}`,
                })
              }
            />
            <ButtonUpdateOrder
              currentStatus={orderStatusActions[currentStatusIndex]}
              hide={orderStatusActions[currentStatusIndex] === ""}
              onClick={() =>
                handleUpdateOrderStatus({
                  orderID: orderID,
                  status: nextStatus,
                })
              }
            />
            {/*TODO: ADD ORDER BUTTON HERE*/}
          </Box>

          {/*Shop Info */}
          <Stack spacing={2} sx={{ ...classes.infoContainer }}>
            {/*Shop Name*/}
            <Typography variant="sectionTitle">
              {orderID ? `Order# ${orderID}` : "N/A"}
            </Typography>
          </Stack>
        </Stack>
      </Box>

      {/*Delete Dialog */}
      <DeleteDialog
        openDelete={openDelete}
        handleCloseDelete={handleCloseDelete}
        handleCancel={handleCancel}
        handleDelete={handleDelete}
        data={deleteData}
      />
    </div>
  );
}

const classes = {
  main: {
    display: "flex",
    flexDirection: "row",
    gap: "32px",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 900px)": {
      p: 3,
      gap: "8px",
    },
  },

  infoContainer: {
    width: "100%",
    textAlign: "left",
  },

  infoAndButtonContainer: {
    width: "100%",
  },

  buttonContainer: {
    width: "100%",
    textAlign: "right",
    display: "flex",
    gap: 2,
    justifyContent: "right",
  },
};

export default Header;
