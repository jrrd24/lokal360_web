import React, { useState } from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import { Box } from "@mui/material";
import theme from "../../../Theme";
import MyVouchers from "./VouchersShopComponents/MyVouchers";
import CustomAlert from "../../../components/CustomAlert";
import useAlert from "../../../hooks/useAlert";
import { useRequestProcessor } from "../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { LoadingCircle } from "../../../components/Loading/Loading";
import useAuth from "../../../hooks/useAuth";
import EmployeeUnauthorized from "../../../components/Loading/EmployeeUnauthorized";

function VouchersShopContent() {
  // Handle Open Dialog Box
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  // Handle Open Alert

  const {
    open: openAlert,
    severity,
    alertMsg,
    showAlert,
    hideAlert,
  } = useAlert();

  const handleSave = (severity, alertMsg) => {
    showAlert(severity, alertMsg);
  };

  const handlePromoError = (severity, alertMsg) => {
    showAlert(severity, alertMsg);
  };

  //DELETE API CALL
  const { useCustomMutate } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const { mutate, onError, onMutate } = useCustomMutate(
    "deleteVoucher",
    async ({ id }) => {
      await axiosPrivate.delete(`/api/voucher/delete/?voucherID=${id}`);
    },
    ["getShopVoucher", "getVoucherProducts"]
  );

  const handleDelete = ({ id, name }) => {
    console.log("Deleted: ", id);
    showAlert(
      "error",
      <>
        ...Deleting <b>{name}</b>
      </>
    );

    mutate({ id });

    if (onError) {
      handleSave("error", "Shop Category Delete Failed");
    }
    if (onMutate) {
      <LoadingCircle />;
    }
  };
  return (
    <div>
      <Box sx={{ ...theme.components.box.pageContainer }}>
        <PageInfoComponent
          PageName={"Vouchers"}
          Subtitle={"View and Manage your Vouchers"}
          isPartner={true}
        />
        {/*Main Content*/}
        {auth?.employeePriviledges?.accessVouchers ||
        auth?.roles?.includes("shop owner") ? (
          <Box sx={{ ...theme.components.box.mainContent }}>
            {/*(Left Side)*/}
            <Box sx={{ ...classes.leftContainer }}>
              {/*My Vouchers*/}
              <Box sx={{ ...classes.content }}>
                <MyVouchers
                  handleSave={handleSave}
                  handleDelete={handleDelete}
                  handlePromoError={handlePromoError}
                  open={open}
                  setOpen={setOpen}
                  openEdit={openEdit}
                  setOpenEdit={setOpenEdit}
                />
              </Box>
            </Box>
          </Box>
        ) : (
          <EmployeeUnauthorized />
        )}
      </Box>

      {/*Display Alert */}
      <CustomAlert
        open={openAlert}
        setOpen={hideAlert}
        severity={severity}
        alertMsg={alertMsg}
      />
    </div>
  );
}

const classes = {
  leftContainer: {
    ...theme.components.box.contentColumn,
    "@media (max-width: 1516px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  content: {
    ...theme.components.box.sectionContainer,
    minWidth: "600px",
    "@media (max-width: 912px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },
};
export default VouchersShopContent;
