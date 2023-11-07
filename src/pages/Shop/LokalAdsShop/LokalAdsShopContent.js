import React, { useState } from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import { Box } from "@mui/material";
import theme from "../../../Theme";
import AdsStatus from "./LokalAdsComponents/AdsStatus";
import MyLokalAds from "./LokalAdsComponents/MyLokalAds";
import CustomAlert from "../../../components/CustomAlert";
import useAlert from "../../../hooks/useAlert";
import { useRequestProcessor } from "../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { LoadingCircle } from "../../../components/Loading/Loading";
import EmployeeUnauthorized from "../../../components/Loading/EmployeeUnauthorized";
import useAuth from "../../../hooks/useAuth";

function LokalAdsShopContent() {
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
    "deleteAd",
    async ({ id }) => {
      await axiosPrivate.delete(`api/ad/delete/?lokalAdsID=${id}`);
    },
    ["getShopAds"]
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
          PageName={"Lokal Ads"}
          Subtitle={"Manage your Sidewide and Shop Page Advertisments"}
          isPartner={true}
        />
        {/*Main Content*/}
        {auth?.employeePriviledges?.accessLokalAds ||
        auth?.roles?.includes("shop owner") ? (
          <Box sx={{ ...theme.components.box.mainContent }}>
            {/*Ads Status / My Lokal Ads*/}
            <Box sx={{ ...classes.leftContainer }}>
              {/*Ads Status*/}
              <Box sx={{ ...classes.contentContainer }}>
                <AdsStatus />
              </Box>

              {/*My Lokal Ads*/}
              <Box sx={{ ...classes.contentContainer }}>
                <MyLokalAds
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
    maxWidth: "1120px",
    "@media (max-width: 1200px)": {
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "100%",
      minWidth: "100%",
    },
  },

  contentContainer: {
    ...theme.components.box.sectionContainer,
    minWidth: "1120px",
    "@media (max-width: 1200px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },
};
export default LokalAdsShopContent;
