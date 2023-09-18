import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import theme from "../../../../Theme";
import { Delete, Edit } from "@mui/icons-material";
import shopCategoryData from "../../../../data/shopCategoryData";
import CustomDataGrid from "../../../../components/CustomDataGrid";
import EditCategoryDialog from "./EditCategoryDialog/EditCategoryDialog";
import DeleteDialog from "../../../../components/DialogBox/DeleteDialog";

// Define data grid columns

export default function DataGridCategories({
  openEdit,
  setOpenEdit,
  handleSave,
  handleDelete,
}) {
  //Set Active Edit
  const [editingCategory, setEditingCategory] = useState({
    shopCategoryID: null,
    name: null,
    amt_sold: null,
    number_of_products: null,
  });
  //Initialize category Info field
  shopCategoryData.forEach((row) => {
    row.categoryInfo = [
      row.shopCategoryID,
      row.name,
      row.amt_sold,
      row.number_of_products,
    ];
  });

  const handleOpen = (shopCategoryID, name, amt_sold, number_of_products) => {
    setOpenEdit(true);
    setEditingCategory({ shopCategoryID, name, amt_sold, number_of_products });
  };
  const handleClose = () => {
    setOpenEdit(false);
  };

  //handle delete dialog box
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteData, setDeleteData] = useState({ id: null, name: null });
  const handleOpenDelete = ({ id, name }) => {
    setOpenDelete(true);
    setDeleteData({ id, name });
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

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
      field: "categoryInfo",
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
        const { shopCategoryID, name, amt_sold, number_of_products } =
          params.row;
        statusComponent = (
          <Box>
            <IconButton
              onClick={() => handleOpenDelete({ id: shopCategoryID, name })}
            >
              <Delete sx={{ color: `${theme.palette.danger.delete}` }} />
            </IconButton>

            <IconButton
              onClick={() =>
                handleOpen(shopCategoryID, name, amt_sold, number_of_products)
              }
            >
              <Edit sx={{ color: `${theme.palette.primary.main}` }} />
            </IconButton>
          </Box>
        );
        return statusComponent;
      },
    },
  ];

  return (
    <div>
      <CustomDataGrid
        data={shopCategoryData}
        columns={columns}
        rowID={"shopCategoryID"}
      />

      <EditCategoryDialog
        open={openEdit}
        handleClose={handleClose}
        handleSave={handleSave}
        data={editingCategory}
      />

      {/*Delete Dialog */}
      <DeleteDialog
        openDelete={openDelete}
        handleCloseDelete={handleCloseDelete}
        handleDelete={handleDelete}
        data={deleteData}
      />
    </div>
  );
}
