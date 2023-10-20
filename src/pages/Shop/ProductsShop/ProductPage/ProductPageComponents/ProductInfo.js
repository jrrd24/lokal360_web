import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import NumberFormat from "../../../../../utils/NumberFormat";
import styles from "../../../../../css/Styles.module.css";
import ButtonEdit from "../../../../../components/Buttons/ButtonEdit";
import ButtonDelete from "../../../../../components/Buttons/ButtonDelete";
import DeleteDialog from "../../../../../components/DialogBox/DeleteDialog";
import EditProductInfoDialog from "./EditProductInfoDialog/EditProductInfoDialog";

function ProductInfo({
  productID,
  productImage,
  name,
  totalSales,
  amountSold,
  noOfVariations,
  productData,
  open,
  setOpen,
  handleSave,
  handleDelete,
}) {
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
    handleClose();
  };
  const handleCancel = () => {
    setOpenDelete(false);
  };

  return (
    <div>
      {/*Display Page */}
      <Box sx={{ ...classes.main }}>
        {/*Shop Logo */}
        <Box className={`${styles.grow}`} sx={{ ...classes.logo }}>
          <img
            src={
              productImage ||
              require("../../../../../assets/product_placeholder_big.jpg")
            }
            alt="Product"
            style={{ ...classes.image }}
          />
        </Box>

        {/*Shop Info and Button */}
        <Stack spacing={2} sx={{ ...classes.infoAndButtonContainer }}>
          {/*Button */}
          <Box sx={{ ...classes.buttonContainer }}>
            <ButtonDelete
              onClick={() =>
                handleOpenDelete({
                  id: productID,
                  name: name,
                })
              }
            />
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
      <EditProductInfoDialog
        open={open}
        handleClose={handleClose}
        handleSave={handleSave}
        productData={productData}
      />

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

  logo: {
    width: "20%",
    "@media (max-width: 900px)": {
      width: "100%",
    },
  },

  image: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    height: 150,
    width: 150,
    objectFit: "cover",
    border: "2px solid #44444433",
  },

  infoContainer: {
    width: "100%",
    textAlign: "left",
    "@media (max-width: 900px)": {
      textAlign: "center",
    },
  },

  infoAndButtonContainer: {
    width: "70%",
    "@media (max-width: 900px)": {
      width: "100%",
    },
  },

  buttonContainer: {
    width: "100%",
    textAlign: "right",
    display: "flex",
    gap: 2,
    justifyContent: "right",
    "@media (max-width: 900px)": {
      justifyContent: "center",
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
