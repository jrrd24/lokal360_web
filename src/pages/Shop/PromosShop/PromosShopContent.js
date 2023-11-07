import React, { useState } from "react";
import { Box } from "@mui/material";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import theme from "../../../Theme";
import MyPromos from "./PromosShopComponents/MyPromos";
import CustomAlert from "../../../components/CustomAlert";
import useAlert from "../../../hooks/useAlert";
import { useRequestProcessor } from "../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { LoadingCircle } from "../../../components/Loading/Loading";
import useAuth from "../../../hooks/useAuth";
import EmployeeUnauthorized from "../../../components/Loading/EmployeeUnauthorized";

function PromosShopContent() {
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

  //DELETE API CALL
  const { useCustomMutate } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const { mutate, onError, onMutate } = useCustomMutate(
    "deletePromo",
    async ({ id }) => {
      await axiosPrivate.delete(`/api/promo/delete_promo/?promoID=${id}`);
    },
    ["getShopPromo", "getPromoProducts"]
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
          PageName={"Promos"}
          Subtitle={
            "Promos can be applied directly to a Product or be used in a Voucher"
          }
        />

        {/*Main Content*/}
        {auth?.employeePriviledges?.accessPromos ||
        auth?.roles?.includes("shop owner") ? (
          <Box sx={{ ...theme.components.box.mainContent }}>
            {/*(Left Side)*/}
            <Box sx={{ ...classes.leftContainer }}>
              {/*My Promos*/}
              <Box sx={{ ...classes.customerContainer }}>
                <MyPromos
                  handleSave={handleSave}
                  handleDelete={handleDelete}
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

  customerContainer: {
    ...theme.components.box.sectionContainer,
    minWidth: "600px",
    order: 1,
    "@media (max-width: 912px)": {
      order: 1,
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },
};
export default PromosShopContent;
