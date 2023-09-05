import React, { useState } from "react";
import { Avatar, IconButton, Typography, Box } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import userData from "../../../../data/userData";
import CustomerStatus from "../../../../components/ShopOnly/StatusAndTags/CustomerStatus";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled, alpha } from "@mui/material/styles";
import { ChatBubble, ReportProblem } from "@mui/icons-material";
import CustomDataGrid from "../../../../components/CustomDataGrid";

// Styling for the custom menu
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function DataGridCustomers() {
  // State and event handlers for the menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Define data grid columns
  const columns = [
    {
      field: "shopperID",
      headerName: "ID",
      hideable: false,
      width: 80,
    },
    {
      field: "img",
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
      width: 160,
    },
    {
      field: "orders",
      headerName: "No. of Purchases",
      type: "number",
      width: 120,
    },
    {
      field: "total",
      headerName: "Total Spent",
      type: "number",
      width: 120,
      renderCell: (params) => {
        const totalSpent = params.value;
        const formattedPrice = totalSpent.toFixed(2);
        let statusComponent;
        statusComponent = <Typography>₱ {formattedPrice}</Typography>;
        return statusComponent;
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        const status = params.value;
        let statusComponent;
        if (
          status === "Follower" ||
          status === "Reported" ||
          status === "Banned"
        ) {
          statusComponent = <CustomerStatus status={status} />;
        } else {
          statusComponent = <CustomerStatus status={"N/A"} />;
        }

        return statusComponent;
      },
    },
    {
      field: "",
      headerName: "Action",
      width: 60,
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
            <IconButton
              aria-label="Customer See More"
              id="see-more-button"
              aria-controls={open ? "customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="contained"
              onClick={handleClick}
            >
              <MoreVert />
            </IconButton>
            {/*Pop Up Menu */}
            <StyledMenu
              id="customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                <ChatBubble />
                Chat
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <ReportProblem />
                Report
              </MenuItem>
            </StyledMenu>
          </Box>
        );
        return statusComponent;
      },
    },
  ];

  return (
    <CustomDataGrid data={userData} columns={columns} rowID={"shopperID"} />
  );
}

export default DataGridCustomers;
