import React, { useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import CustomDataGrid from "../../../../../components/CustomDataGrid";
import { ProductInventoryStatus } from "../../../../../components/ShopOnly/StatusAndTags/ProductInventoryStatus";
import { Edit } from "@mui/icons-material";
import theme from "../../../../../Theme";
import EditVariationDialog from "./EditVariationDialog/EditVariationDialog";
import { BASE_URL } from "../../../../../api/Api";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function DataGridVariations({ data, open, setOpen, handleSave, handleDelete }) {
  //Set Active Edit
  const [editingVaritaion, setEditingVariation] = useState({
    prodVariationID: null,
    productID: null,
    var_name: null,
    price: null,
    var_image: null,
    amt_sold: null,
    amt_on_hand: null,
  });

  //Initialize category Info field
  data &&
    data.length > 0 &&
    data.forEach((row) => {
      // Initialize varInfo field for each row
      row.varInfo = [
        row.prodVariationID,
        row.productID,
        row.var_name,
        row.price,
        row.var_image,
        row.amt_sold,
        row.amt_on_hand,
      ];
    });

  const handleOpen = ({
    prodVariationID,
    productID,
    var_name,
    price,
    var_image,
    amt_sold,
    amt_on_hand,
  }) => {
    setOpen(true);
    setEditingVariation({
      prodVariationID,
      productID,
      var_name,
      price,
      var_image,
      amt_sold,
      amt_on_hand,
    });
  };
  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    { field: "prodVariationID", headerName: "ID", hideable: false, width: 80 },

    {
      field: "var_image",
      headerName: "Image",
      width: 100,
      disableExport: true,
      renderCell: (params) => {
        const img = params.value ? `${BASE_URL}/${params.value}` : null;
        let statusComponent;
        statusComponent = (
          <Zoom>
            <Avatar
              src={
                img ||
                require("../../../../../assets/product_placeholder_big.jpg")
              }
              sx={{
                backgroundColor: "#FFF",
                width: 45,
                height: 45,
                border: "solid",
                borderColor: "transparent",
                borderRadius: 2,
                objectFit: "cover",
              }}
            />
          </Zoom>
        );

        return statusComponent;
      },
    },

    { field: "var_name", headerName: "Name", width: 160 },
    {
      field: "amt_on_hand",
      headerName: "Status",
      width: 150,
      renderCell: (params) => {
        const amt = params.value;
        let status = "";
        let statusComponent;

        if (amt > 10) {
          status = "In Stock";
        } else if (amt <= 10 && amt > 0) {
          status = "Low Stock";
        } else if (amt === 0) {
          status = "Out Of Stock";
        }

        statusComponent = <ProductInventoryStatus status={status} />;

        return statusComponent;
      },
    },

    {
      field: "varInfo",
      headerName: "Action",
      width: 60,
      sortable: false,
      filterable: false,
      hideable: false,
      disableExport: true,
      renderCell: (params) => {
        let statusComponent;
        const {
          prodVariationID,
          productID,
          var_name,
          price,
          var_image,
          amt_sold,
          amt_on_hand,
        } = params.row;

        statusComponent = (
          <IconButton
            onClick={() =>
              handleOpen({
                prodVariationID,
                productID,
                var_name,
                price,
                var_image: var_image ? `${BASE_URL}/${var_image}` : null,
                amt_sold,
                amt_on_hand,
              })
            }
          >
            <Edit sx={{ color: `${theme.palette.primary.main}` }} />
          </IconButton>
        );
        return statusComponent;
      },
    },
  ];

  return (
    <div>
      <CustomDataGrid
        data={data}
        noRowsWarning={"This Product has no Variations"}
        rowsPerPage={5}
        rowID={"prodVariationID"}
        columns={columns}
      />

      <EditVariationDialog
        open={open}
        handleClose={handleClose}
        handleSave={handleSave}
        handleDelete={handleDelete}
        data={editingVaritaion}
      />
    </div>
  );
}

export default DataGridVariations;
