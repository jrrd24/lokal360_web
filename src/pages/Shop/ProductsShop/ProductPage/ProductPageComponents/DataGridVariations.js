import React from "react";
import { Avatar, IconButton } from "@mui/material";
import CustomDataGrid from "../../../../../components/CustomDataGrid";
import { ProductInventoryStatus } from "../../../../../components/ShopOnly/StatusAndTags/ProductInventoryStatus";
import { Edit } from "@mui/icons-material";
import theme from "../../../../../Theme";

function DataGridVariations({ data }) {
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

        statusComponent = (
          <IconButton>
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
    </div>
  );
}

export default DataGridVariations;
