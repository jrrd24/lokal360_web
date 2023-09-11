import React, { useState } from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import { Box } from "@mui/material";
import theme from "../../../Theme";
import MyVouchers from "./VouchersShopComponents/MyVouchers";
import CustomAlert from "../../../components/CustomAlert";

function VouchersShopContent() {
  // Handle Open Dialog Box
  const [open, setOpen] = React.useState(false);
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
          PageName={"Vouchers"}
          Subtitle={"View and Manage your Vouchers"}
          isPartner={true}
        />
        {/*Main Content*/}
        <Box sx={{ ...theme.components.box.mainContent }}>
          {/*(Left Side)*/}
          <Box
            sx={{
              ...theme.components.box.contentColumn,
              "@media (max-width: 1516px)": {
                alignItems: "center",
                justifyContent: "center",
                minWidth: "100%",
              },
            }}
          >
            {/*My Customers*/}
            <Box
              sx={{
                ...theme.components.box.sectionContainer,
                minWidth: "600px",
                order: 1,
                "@media (max-width: 912px)": {
                  order: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "100%",
                },
              }}
            >
              <MyVouchers
                handleSave={handleSave}
                open={open}
                setOpen={setOpen}
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

export default VouchersShopContent;
