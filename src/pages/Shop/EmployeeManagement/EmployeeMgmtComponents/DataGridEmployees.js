import React, { useState } from "react";
import CustomDataGrid from "../../../../components/CustomDataGrid";
import { IconButton, Box, Typography, Avatar } from "@mui/material";
import { Cancel, CheckCircle, Edit } from "@mui/icons-material";
import theme from "../../../../Theme";
// import dummy data
import employeeData from "../../../../data/employeeData";
import EditEmployeeDialog from "./EditEmployeeDialog/EditEmployeeDialog";

function DataGridEmployees({ openEdit, setOpenEdit, handleSave }) {
  //Set Active Edit
  const [editingEmployee, setEditingEmployee] = useState({
    shopEmployeeID: null,
    userID: null,
    shopID: null,
    job_title: null,
    profile_pic: null,
    is_active: null,
    name: null,
  });

  //Initialize category Info field
  employeeData.forEach((row) => {
    row.categoryInfo = [
      row.shopEmployeeID,
      row.userID,
      row.shopID,
      row.job_title,
      row.profile_pic,
      row.is_active,
      row.name,
    ];
  });

  const handleOpen = ({
    shopEmployeeID,
    userID,
    shopID,
    job_title,
    profile_pic,
    is_active,
    name,
  }) => {
    setOpenEdit(true);
    setEditingEmployee({
      shopEmployeeID,
      userID,
      shopID,
      job_title,
      profile_pic,
      is_active,
      name,
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
      field: "name",
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
      field: "categoryInfo",
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
          profile_pic,
          is_active,
          name,
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
                  profile_pic,
                  is_active,
                  name,
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
        data={editingEmployee}
      />
    </div>
  );
}

export default DataGridEmployees;
