import * as React from "react";
import { Box, IconButton } from "@mui/material";
import theme from "../../../../Theme";
import { Delete, Edit } from "@mui/icons-material";
import shopCategoryData from "../../../../data/shopCategoryData";
import CustomDataGrid from "../../../../components/CustomDataGrid";

// Define data grid columns
const columns = [
  {
    field: "shopCategoryID",
    headerName: "ID",
    hideable: false,
    width: 80,
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
    field: "",
    headerName: "Action",
    width: 155,
    align: "center",
    headerAlign: "center",
    sortable: false,
    filterable: false,
    hideable: false,
    disableExport: true,
    renderCell: (params) => {
      let statusComponent;
      statusComponent = (
        <Box>
          <IconButton>
            <Delete sx={{ color: `${theme.palette.danger.delete}` }} />
          </IconButton>

          <IconButton>
            <Edit sx={{ color: `${theme.palette.primary.main}` }} />
          </IconButton>
        </Box>
      );
      return statusComponent;
    },
  },
];

export default function DataGridCategories() {
  return (
    <CustomDataGrid
      data={shopCategoryData}
      columns={columns}
      rowID={"shopCategoryID"}
    />
  );
}
