import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import theme from "../../../../Theme";
import { Delete, Edit } from "@mui/icons-material";
// import shopCategoryData from "../../../../data/shopCategoryData";
import CustomDataGrid from "../../../../components/CustomDataGrid";
import EditCategoryDialog from "./EditCategoryDialog/EditCategoryDialog";
import DeleteDialog from "../../../../components/DialogBox/DeleteDialog";
import { useRequestProcessor } from "../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import useAuth from "../../../../hooks/useAuth";
import { LoadingCircle } from "../../../../components/Loading/Loading";

export default function DataGridCategories({
  openEdit,
  setOpenEdit,
  handleSave,
  handleDelete,
}) {
  //Set Currently Editing Category
  const [editingCategory, setEditingCategory] = useState({
    shopCategoryID: null,
    shop_category_name: null,
    number_of_products: null,
  });

  //handle delete dialog box
  const [openDelete, setOpenDelete] = useState(false);
  const [deleteData, setDeleteData] = useState({
    id: null,
    shop_category_name: null,
  });
  const handleOpenDelete = ({ id, shop_category_name }) => {
    setOpenDelete(true);
    setDeleteData({ id, name: shop_category_name });
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  // all shop categories (for shop)
  const { useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const { data: shopCategoryData, isLoading } = useCustomQuery(
    "getShopCategory",
    () =>
      axiosPrivate
        .get(`/api/shop_category/?shopID=${auth.shopID}`)
        .then((res) => res.data),
    { enabled: true }
  );

  if (isLoading) {
    return <LoadingCircle />;
  }

  //Initialize category Info field
  shopCategoryData?.forEach((row) => {
    row.categoryInfo = [
      row.shopCategoryID,
      row.shop_category_name,
      row.number_of_products,
    ];
  });

  const handleOpen = (
    shopCategoryID,
    shop_category_name,
    number_of_products
  ) => {
    setOpenEdit(true);
    setEditingCategory({
      shopCategoryID,
      shop_category_name,
      number_of_products,
    });
  };
  const handleClose = () => {
    setOpenEdit(false);
  };

  // Define data grid columns
  const columns = [
    {
      field: "shopCategoryID",
      headerName: "ID",
      hideable: false,
      width: 80,
    },
    {
      field: "shop_category_name",
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
        const {
          shopCategoryID,
          shop_category_name,

          number_of_products,
        } = params.row;
        statusComponent = (
          <Box>
            <IconButton
              onClick={() =>
                handleOpenDelete({
                  id: shopCategoryID,
                  shop_category_name,
                })
              }
            >
              <Delete sx={{ color: `${theme.palette.danger.delete}` }} />
            </IconButton>

            <IconButton
              onClick={() =>
                handleOpen(
                  shopCategoryID,
                  shop_category_name,
                  number_of_products
                )
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
