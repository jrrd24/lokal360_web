import React from "react";
import CustomDataGrid from "../../../../components/CustomDataGrid";
import { IconButton, Box, Typography, Avatar } from "@mui/material";
import { Cancel, CheckCircle, Edit } from "@mui/icons-material";
import theme from "../../../../Theme";
// import dummy data
import employeeData from "../../../../data/employeeData";

function DataGridEmployees() {
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
      field: "",
      headerName: "Action",
      width: 80,
      align: "center",
      headerAlign: "center",
      sortable: false,
      filterable: false,
      hideable: false,
      disableExport: true,
      renderCell: () => {
        let statusComponent;
        statusComponent = (
          <Box>
            <IconButton onClick={null}>
              <Edit sx={{ color: `${theme.palette.primary.main}` }} />
            </IconButton>
          </Box>
        );
        return statusComponent;
      },
    },
  ];

  return (
    <CustomDataGrid
      data={employeeData}
      columns={columns}
      rowID={"shopEmployeeID"}
    />
  );
}

export default DataGridEmployees;
