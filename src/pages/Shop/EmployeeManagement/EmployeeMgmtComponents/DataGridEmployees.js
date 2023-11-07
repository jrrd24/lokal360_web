import React, { useState } from "react";
import CustomDataGrid from "../../../../components/CustomDataGrid";
import { IconButton, Box, Typography, Avatar } from "@mui/material";
import { Cancel, CheckCircle, Edit } from "@mui/icons-material";
import theme from "../../../../Theme";
import EditEmployeeDialog from "./EditEmployeeDialog/EditEmployeeDialog";
import { useRequestProcessor } from "../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import useAuth from "../../../../hooks/useAuth";
import { LoadingCircle } from "../../../../components/Loading/Loading";

function DataGridEmployees({
  openEdit,
  setOpenEdit,
  handleSave,
  handleDelete,
}) {
  //Set Active Edit
  const [editingEmployee, setEditingEmployee] = useState({
    shopEmployeeID: null,
    userID: null,
    shopID: null,
    job_title: null,
    access_analytics: null,
    access_products: null,
    access_customers: null,
    access_orders: null,
    access_shop_information: null,
    access_promos: null,
    access_lokal_ads: null,
    access_vouchers: null,
    email: null,
    profile_pic: null,
    is_active: null,
    username: null,
  });

  //API CALL GET ALL SHOP EMPLOYEE
  const { useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const { data: employeeData, isLoading } = useCustomQuery(
    "getShopEmployees",
    () =>
      axiosPrivate
        .get(`/api/employee/?shopID=${auth.shopID}`)
        .then((res) => res.data),
    { enabled: true }
  );

  if (isLoading) {
    return <LoadingCircle />;
  }

  //Initialize Employee Info field
  employeeData.forEach((row) => {
    row.employeeInfo = [
      row.shopEmployeeID,
      row.userID,
      row.shopID,
      row.job_title,
      row.access_analytics,
      row.access_products,
      row.access_customers,
      row.access_orders,
      row.access_shop_information,
      row.access_promos,
      row.access_lokal_ads,
      row.access_vouchers,
      row.email,
      row.profile_pic,
      row.is_active,
      (row.username =
        row.first_name === null || row.last_name === null
          ? row.username
          : `${row.first_name} ${row.last_name}`),
    ];
  });

  const handleOpen = ({
    shopEmployeeID,
    userID,
    shopID,
    job_title,
    access_analytics,
    access_products,
    access_customers,
    access_orders,
    access_shop_information,
    access_promos,
    access_lokal_ads,
    access_vouchers,
    email,
    profile_pic,
    is_active,
    username,
  }) => {
    setOpenEdit(true);
    setEditingEmployee({
      shopEmployeeID,
      userID,
      shopID,
      job_title,
      access_analytics,
      access_products,
      access_customers,
      access_orders,
      access_shop_information,
      access_promos,
      access_lokal_ads,
      access_vouchers,
      email,
      profile_pic,
      is_active,
      username,
    });
  };
  const handleClose = () => {
    setOpenEdit(false);
  };

  // Define data grid columns
  const columns = [
    {
      field: "profile_pic",
      headerName: "Image",
      width: 80,
      disableExport: true,
      renderCell: (params) => {
        const img = params.value;
        let statusComponent;
        statusComponent = (
          <Avatar
            src={img}
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

    {
      field: "username",
      headerName: "Name",
      width: 200,
    },

    {
      field: "job_title",
      headerName: "Job Title",
      width: 200,
    },

    {
      field: "is_active",
      headerName: "Active",
      width: 110,
      align: "center",
      headerAlign: "center",
      disableExport: true,
      renderCell: (params) => {
        const isActive = params.row.is_active;
        let statusComponent;
        statusComponent = (
          <Typography>
            {isActive ? (
              <CheckCircle sx={{ color: `${theme.palette.success.main}` }} />
            ) : (
              <Cancel sx={{ color: `${theme.palette.danger.main}` }} />
            )}
          </Typography>
        );
        return statusComponent;
      },
    },
    {
      field: "employeeInfo",
      headerName: "Action",
      width: 80,
      align: "center",
      headerAlign: "center",
      sortable: false,
      filterable: false,
      hideable: false,
      disableExport: true,
      renderCell: (params) => {
        let statusComponent;
        const {
          shopEmployeeID,
          userID,
          shopID,
          job_title,
          access_analytics,
          access_products,
          access_customers,
          access_orders,
          access_shop_information,
          access_promos,
          access_lokal_ads,
          access_vouchers,
          email,
          profile_pic,
          is_active,
          username,
        } = params.row;
        statusComponent = (
          <Box>
            <IconButton
              onClick={() =>
                handleOpen({
                  shopEmployeeID,
                  userID,
                  shopID,
                  job_title,
                  access_analytics,
                  access_products,
                  access_customers,
                  access_orders,
                  access_shop_information,
                  access_promos,
                  access_lokal_ads,
                  access_vouchers,
                  email,
                  profile_pic,
                  is_active,
                  username,
                })
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
        data={employeeData}
        columns={columns}
        rowID={"shopEmployeeID"}
      />

      <EditEmployeeDialog
        open={openEdit}
        handleClose={handleClose}
        handleSave={handleSave}
        handleDelete={handleDelete}
        data={editingEmployee}
      />
    </div>
  );
}

export default DataGridEmployees;
