import React, { useState } from "react";
import { Box } from "@mui/material";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import theme from "../../../Theme";
import MyPromos from "./PromosShopComponents/MyPromos";
import CustomAlert from "../../../components/CustomAlert";

function PromosShopContent() {
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
        <Box sx={{ ...theme.components.box.mainContent }}>
          {/*(Left Side)*/}
          <Box sx={{ ...classes.leftContainer }}>
            {/*My Promos*/}
            <Box sx={{ ...classes.customerContainer }}>
              <MyPromos
                handleSave={handleSave}
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
