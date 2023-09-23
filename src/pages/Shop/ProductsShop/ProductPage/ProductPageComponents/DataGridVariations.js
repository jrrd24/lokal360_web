import React, { useState } from "react";
import { Avatar, IconButton } from "@mui/material";
import CustomDataGrid from "../../../../../components/CustomDataGrid";
import { ProductInventoryStatus } from "../../../../../components/ShopOnly/StatusAndTags/ProductInventoryStatus";
import { Edit } from "@mui/icons-material";
import theme from "../../../../../Theme";
import EditVariationDialog from "./EditVariationDialog/EditVariationDialog";

function DataGridVariations({ data, open, setOpen, handleSave, handleDelete }) {
  //Set Active Edit
  const [editingVaritaion, setEditingVariation] = useState({
    prodVariationID: null,
    productID: null,
    name: null,
    price: null,
    var_image: null,
    amt_sold: null,
    amt_on_hand: null,
  });

  //Initialize category Info field
  data &&
    data.length > 0 &&
    data.forEach((row) => {
      // Initialize categoryInfo field for each row
      row.categoryInfo = [
        row.prodVariationID,
        row.productID,
        row.name,
        row.price,
        row.var_image,
        row.amt_sold,
        row.amt_on_hand,
      ];
    });

  const handleOpen = ({
    prodVariationID,
    productID,
    name,
    price,
    var_image,
    amt_sold,
    amt_on_hand,
  }) => {
    setOpen(true);
    setEditingVariation({
      prodVariationID,
      productID,
      name,
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
        const img = params.value;
        let statusComponent;
        statusComponent = (
          <Avatar
            src={img || require("../../../../../assets/lokal360_Logo.png")}
            sx={{
              backgroundColor: "#FFF",
              width: 45,
              height: 45,
              border: "solid",
              borderColor: "transparent",
              borderRadius: 2,
            }}
          />
        );

        return statusComponent;
      },
    },

    { field: "name", headerName: "Name", width: 160 },
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
      field: "categoryInfo",
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
          name,
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
                name,
                price,
                var_image,
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
