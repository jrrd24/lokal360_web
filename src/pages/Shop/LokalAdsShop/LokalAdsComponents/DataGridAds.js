import React from "react";
import { IconButton, Avatar } from "@mui/material";
import theme from "../../../../Theme";
import { Edit } from "@mui/icons-material";
import AdsStatus from "../../../../components/ShopOnly/StatusAndTags/AdsStatus";
import CustomDataGrid from "../../../../components/CustomDataGrid";
//import dummy data
import lokalAdsData from "../../../../data/lokalAdsData";

// Define data grid columns
const columns = [
  {
    field: "lokalAdsID",
    headerName: "ID",
    hideable: false,
    width: 80,
    filterable: true,
  },
  {
    field: "ad_image",
    headerName: "Image",
    width: 120,
    disableExport: true,
    renderCell: (params) => {
      const img = params.value;
      let statusComponent;
      statusComponent = (
        <Avatar
          src={img}
          sx={{
            backgroundColor: "#FFF",
            width: 100,
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
    headerName: "Ad Name",
    width: 160,
    filterable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    filterable: true,
    renderCell: (params) => {
      const status = params.value;
      let statusComponent;
      statusComponent = <AdsStatus status={status} />;

      return statusComponent;
    },
  },
  {
    field: "type",
    headerName: "Type",
    filterable: true,
    width: 140,
  },
  {
    field: "approved_at",
    headerName: "Approved At",
    filterable: false,
    width: 140,
  },
  {
    field: "start_date",
    headerName: "Ad Start Date",
    filterable: false,
    width: 140,
  },
  {
    field: "end_date",
    headerName: "Ad End Date",
    filterable: false,
    width: 140,
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
        <IconButton>
          <Edit sx={{ color: `${theme.palette.primary.main}` }} />
        </IconButton>
      );
      return statusComponent;
    },
  },
];

function DataGridAds() {
  return (
    <CustomDataGrid
      data={lokalAdsData}
      columns={columns}
      rowID={"lokalAdsID"}
      autoHeight
      disableDensity
    />
  );
}

export default DataGridAds;
