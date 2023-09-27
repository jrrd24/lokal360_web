import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import NumberFormat from "../../../../utils/NumberFormat";
import theme from "../../../../Theme";
import styles from "../../../../css/Styles.module.css";
import EditShopInfoDialog from "./Dialogs/EditShopInfoDialog";
import ButtonEdit from "../../../../components/Buttons/ButtonEdit";
import CustomAlert from "../../../../components/CustomAlert";

function DisplayShopInfo({
  shopName,
  totalSales,
  noOfProducts,
  noOfFollowers,
  logo,
  shopData,
  shopID,
}) {
  // Handle Open Dialog Box
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Handle Alert Click
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
      {/*Display Page */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/*Shop Logo */}
        <Box
          className={`${styles.grow}`}
          sx={{
            width: "20%",
            "@media (max-width: 912px)": {
              width: "100%",
            },
          }}
        >
          <img
            src={logo || require("../../../../assets/lokal360_logo_filled.png")}
            alt="Shop logo"
            style={{
              backgroundColor: "#FFF",
              borderRadius: 10,
              height: 150,
              width: 150,
            }}
          />
        </Box>

        {/*Shop Info and Button */}
        <Stack
          spacing={2}
          sx={{
            width: "70%",
            "@media (max-width: 912px)": {
              width: "100%",
            },
          }}
        >
          {/*Button */}
          <Box
            sx={{
              width: "100%",
              textAlign: "right",
              "@media (max-width: 912px)": {
                textAlign: "center",
              },
            }}
          >
            {/*Button is disabled if shopID is not found */}
            <ButtonEdit handleOpen={handleOpen} disabled={!shopID} />
          </Box>

          {/*Shop Info */}
          <Stack
            spacing={2}
            sx={{
              width: "80%",
              textAlign: "left",
              alignSelf: "center",
              "@media (max-width: 912px)": {
                textAlign: "center",
              },
            }}
          >
            {/*Shop Name*/}
            <Typography variant="sectionTitle">{shopName || "N/A"}</Typography>

            {/*Total Sales/ Products/ Followers*/}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "32px",
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "space-between",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              {/*Total Sales*/}
              <Stack>
                <Typography variant="sectionTitleSmallCenter" color={"primary"}>
                  <NumberFormat value={totalSales || 0} isPeso={true} />
                  &nbsp;
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={`${theme.palette.text.primary}`}
                  component={"span"}
                >
                  Total Sales
                </Typography>
              </Stack>

              {/*Products*/}
              <Stack>
                <Typography variant="sectionTitleSmallCenter" color={"primary"}>
                  <NumberFormat value={noOfProducts || 0} isShortened={true} />
                  &nbsp;
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={`${theme.palette.text.primary}`}
                  component={"span"}
                >
                  Products
                </Typography>
              </Stack>

              {/*Followers*/}
              <Stack>
                <Typography variant="sectionTitleSmallCenter" color={"primary"}>
                  <NumberFormat value={noOfFollowers || 0} isShortened={true} />
                  &nbsp;
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={`${theme.palette.text.primary}`}
                  component={"span"}
                >
                  Followers
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Box>

      {/*Display Edit shop Dialog box */}
      <EditShopInfoDialog
        open={open}
        handleClose={handleClose}
        handleSave={handleSave}
        shopData={shopData}
      />

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

export default DisplayShopInfo;
