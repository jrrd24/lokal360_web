import React, { useState } from "react";
import PageInfoComponent from "../../../components/PageInfoAndTime/PageInfoComponent";
import SoldPerCategory from "../AnalyticsShop/AnalyticsComponents/SoldPerCategory";
import MyShopCategories from "./ShopCategoryComponents/MyShopCategories";
import { Box } from "@mui/material";
import theme from "../../../Theme";
import CustomAlert from "../../../components/CustomAlert";
import useAlert from "../../../hooks/useAlert";
import { useRequestProcessor } from "../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import { LoadingCircle } from "../../../components/Loading/Loading";

function ShopCategoryContent() {
  // Handle Open Dialog Box
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  // Handle Alert Click
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

  // handle mutate
  const { useCustomMutate } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();

  // DELETE API CALL
  const { mutate, onError, onSuccess, onMutate } = useCustomMutate(
    "deleteShopCategory",
    async ({ id }) => {
      await axiosPrivate.delete(
        `/api/shop_category/delete/?shopCategoryID=${id}`
      );
    },
    "getShopCategory"
  );

  const handleDelete = ({ id, name }) => {
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
          PageName={"Shop Categories"}
          Subtitle={"Add and Manage your Custom Shop Categories"}
        />

        {/*Main Content*/}
        <Box sx={{ ...theme.components.box.mainContent }}>
          {/*(Left Side)*/}
          <Box sx={{ ...classes.leftContainer }}>
            {/*My Categories*/}
            <Box sx={{ ...classes.categories }}>
              <MyShopCategories
                handleSave={handleSave}
                handleDelete={handleDelete}
                open={open}
                setOpen={setOpen}
                openEdit={openEdit}
                setOpenEdit={setOpenEdit}
              />
            </Box>
          </Box>

          {/*(Right Side)*/}
          <Box sx={{ ...classes.rightContainer }}>
            {/*Products Sold Per Category */}
            <Box sx={{ ...classes.soldPerCategory }}>
              <SoldPerCategory hideShowAll={true} />
            </Box>
          </Box>
        </Box>
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
    ...theme.components.box.contentRow,
    "@media (max-width: 1516px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  rightContainer: {
    ...theme.components.box.contentRow,
    "@media (max-width: 1516px)": {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  categories: {
    ...theme.components.box.sectionContainer,
    minWidth: "600px",
    "@media (max-width: 912px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
    },
  },

  soldPerCategory: {
    ...theme.components.box.sectionContainer,
    maxWidth: "340px",
    "@media (max-width: 1516px)": {
      alignItems: "center",
      justifyContent: "center",
      minWidth: 807,
    },
    "@media (max-width: 913px)": {
      minWidth: "100%",
    },
  },
};

export default ShopCategoryContent;
