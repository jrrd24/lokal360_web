import React, { useState } from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import { Box } from "@mui/material";
import theme from "../../../Theme";
import AdsStatus from "./LokalAdsComponents/AdsStatus";
import MyLokalAds from "./LokalAdsComponents/MyLokalAds";
import CustomAlert from "../../../components/CustomAlert";

function LokalAdsShopContent() {
  // Handle Open Dialog Box
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  // Handle Open Alert
  const [openAlert, setOpenAlert] = useState(false);
  const [severity, setSeverity] = useState("error");
  const [alertMsg, setAlertMsg] = useState("");

  const handleSave = (severity, alertMsg) => {
    setOpen(false);
    setSeverity("success");
    setAlertMsg("Shop Information Successfully Updated!");
    setOpenAlert(true);
  };

  const handleDelete = ({ id, name }) => {
    console.log("Deleted: ", id);
    setSeverity("error");
    setAlertMsg(name + " is deleted");
    setOpenAlert(true);
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
      </Box>

      {/*Display Alert */}
      <CustomAlert
        open={openAlert}
        setOpen={setOpenAlert}
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
