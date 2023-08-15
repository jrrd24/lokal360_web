import * as React from "react";
import { Box, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import theme from "../../../../Theme";
import { ArrowCircleRight, Delete } from "@mui/icons-material";
import shopCategoryData from "../../../../data/shopCategoryData";

// Define data grid columns
const columns = [
  {
    field: "shopCategoryID",
    headerName: "ID",
    hideable: false,
    type: "number",
    width: 60,
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "number_of_products",
    headerName: "Number of Products",
    type: "number",
    width: 160,
  },
  {
    headerName: "Action",
    width: 175,
    align: "center",
    headerAlign: "center",
    sortable: false,
    filterable: false,
    hideable: false,
    renderCell: (params) => {
      let statusComponent;
      statusComponent = (
        <Box>
          <IconButton>
            <Delete sx={{ color: `${theme.palette.danger.main}` }} />
          </IconButton>
          <IconButton>
            <ArrowCircleRight sx={{ color: `${theme.palette.primary.main}` }} />
          </IconButton>
        </Box>
      );
      return statusComponent;
    },
  },
];

export default function DataGridCategories() {
  return (
    <DataGrid
      //sx line is needed for overflow (bug in mui data grid v6)
      sx={{ display: "grid", gridTemplateRows: "auto 1f auto" }}
      rows={shopCategoryData}
      columns={columns}
      getRowId={(row) => row.shopCategoryID}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      disableRowSelectionOnClick
      pageSizeOptions={[5, 10, 15]}
    />
  );
}
