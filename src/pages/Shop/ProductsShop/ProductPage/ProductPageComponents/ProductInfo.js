import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import NumberFormat from "../../../../../utils/NumberFormat";
import theme from "../../../../../Theme";
import styles from "../../../../../css/Styles.module.css";
import ButtonEdit from "../../../../../components/Buttons/ButtonEdit";
import CustomAlert from "../../../../../components/CustomAlert";

function ProductInfo({
  productID,
  productImage,
  name,
  totalSales,
  amountSold,
  noOfVariations,
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
      <Box sx={{ ...classes.main }}>
        {/*Shop Logo */}
        <Box className={`${styles.grow}`} sx={{ ...classes.logo }}>
          <img
            src={
              productImage || require("../../../../../assets/lokal360_Logo.png")
            }
            alt="Product"
            style={{ ...classes.image }}
          />
        </Box>

        {/*Shop Info and Button */}
        <Stack spacing={2} sx={{ ...classes.infoAndButtonContainer }}>
          {/*Button */}
          <Box sx={{ ...classes.buttonContainer }}>
            {/*Button is disabled if shopID is not found */}
            <ButtonEdit handleOpen={handleOpen} disabled={!productID} />
          </Box>

          {/*Shop Info */}
          <Stack spacing={2} sx={{ ...classes.infoContainer }}>
            {/*Shop Name*/}
            <Typography variant="sectionTitle">{name || "N/A"}</Typography>

            {/*Sales/ AmountSold/ Variations*/}
            <Box sx={{ ...classes.bottomInfoContainer }}>
              {/*Total Sales*/}
              <Stack>
                <Typography variant="sectionTitleSmallCenter" color="primary">
                  <NumberFormat value={totalSales || 0} isPeso={true} />
                  &nbsp;
                </Typography>
                <Typography variant="subtitle1" color="text" component={"span"}>
                  Total Sales
                </Typography>
              </Stack>

              {/*Amount Sold*/}
              <Stack>
                <Typography variant="sectionTitleSmallCenter" color="primary">
                  <NumberFormat value={amountSold || 0} isShortened={true} />
                  &nbsp;
                </Typography>
                <Typography variant="subtitle1" color="text" component={"span"}>
                  Amount Sold
                </Typography>
              </Stack>

              {/*Vairations*/}
              <Stack>
                <Typography variant="sectionTitleSmallCenter" color="primary">
                  <NumberFormat
                    value={noOfVariations || 0}
                    isShortened={true}
                  />
                  &nbsp;
                </Typography>
                <Typography variant="subtitle1" color="text" component={"span"}>
                  Variations
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Box>

      {/*Display Edit shop Dialog box */}
      {/* <EditShopInfoDialog
        open={open}
        handleClose={handleClose}
        handleSave={handleSave}
        shopData={shopData}
      /> */}

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
  main: {
    display: "flex",
    flexDirection: "row",
    gap: "32px",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 912px)": {
      p: 3,
      gap: "8px",
    },
  },

  logo: {
    width: "20%",
    "@media (max-width: 912px)": {
      width: "100%",
    },
  },

  image: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    height: 150,
    width: 150,
  },

  infoContainer: {
    width: "100%",
    textAlign: "left",
    "@media (max-width: 912px)": {
      textAlign: "center",
    },
  },

  infoAndButtonContainer: {
    width: "70%",
    "@media (max-width: 912px)": {
      width: "100%",
    },
  },

  buttonContainer: {
    width: "100%",
    textAlign: "right",
    "@media (max-width: 912px)": {
      textAlign: "center",
    },
  },

  bottomInfoContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "32px",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between",
    textAlign: "center",
    alignItems: "center",
    "@media (max-width: 600px)": {
      justifyContent: "center",
    },
  },
};
export default ProductInfo;
