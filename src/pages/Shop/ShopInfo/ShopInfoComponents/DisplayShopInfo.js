import React from "react";
import { Box, Typography, Stack, CircularProgress } from "@mui/material";
import NumberFormat from "../../../../utils/NumberFormat";
import theme from "../../../../Theme";
import styles from "../../../../css/Styles.module.css";
import EditShopInfoDialog from "./Dialogs/EditShopInfoDialog";
import ButtonEdit from "../../../../components/Buttons/ButtonEdit";
import CustomAlert from "../../../../components/CustomAlert";
import useAlert from "../../../../hooks/useAlert";
import { useRequestProcessor } from "../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import useAuth from "../../../../hooks/useAuth";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

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
  const {
    open: openAlert,
    severity,
    alertMsg,
    showAlert,
    hideAlert,
  } = useAlert();

  const handleSave = (severity, alertMsg) => {
    setOpen(false);
    showAlert(severity, alertMsg);
  };

  return (
    <div>
      {/*Display Page */}
      <Box sx={{ ...classes.main }}>
        {/*Shop Logo */}
        <Box className={`${styles.grow}`} sx={{ ...classes.logoContainer }}>
          <Zoom>
            <img
              src={
                logo || require("../../../../assets/lokal360_logo_filled.png")
              }
              alt="Shop logo"
              style={{ ...classes.logo }}
            />
          </Zoom>
        </Box>

        {/*Shop Info and Button */}
        <Stack spacing={2} sx={{ ...classes.infoAndBtn }}>
          {/*Button */}
          <Box sx={{ ...classes.button }}>
            {/*Button is disabled if shopID is not found */}
            <ButtonEdit handleOpen={handleOpen} disabled={!shopID} />
          </Box>

          {/*Shop Info */}
          <Stack spacing={2} sx={{ ...classes.shopInfo }}>
            {/*Shop Name*/}
            <Typography variant="sectionTitle">{shopName || "N/A"}</Typography>

            {/*Total Sales/ Products/ Followers*/}
            <Box sx={{ ...classes.bottomInfo }}>
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
        setOpen={hideAlert}
        severity={severity}
        alertMsg={alertMsg}
      />
    </div>
  );
}

const classes = {
  main: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    maxWidth: "600px",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logoContainer: {
    width: "20%",
    "@media (max-width: 912px)": {
      width: "100%",
    },
  },

  logo: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    height: 150,
    width: 150,
    objectFit: "cover",
  },

  infoAndBtn: {
    width: "70%",
    "@media (max-width: 912px)": {
      width: "100%",
    },
  },

  button: {
    width: "100%",
    textAlign: "right",
    "@media (max-width: 912px)": {
      textAlign: "center",
    },
  },

  shopInfo: {
    width: "80%",
    textAlign: "left",
    alignSelf: "center",
    "@media (max-width: 912px)": {
      textAlign: "center",
    },
  },

  bottomInfo: {
    display: "flex",
    flexDirection: "row",
    gap: "32px",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between",
    textAlign: "center",
    alignItems: "center",
  },
};
export default DisplayShopInfo;
