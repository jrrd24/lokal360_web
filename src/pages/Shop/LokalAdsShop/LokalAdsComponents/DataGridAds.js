import React, { useState } from "react";
import { IconButton, Avatar } from "@mui/material";
import theme from "../../../../Theme";
import { Info } from "@mui/icons-material";
import AdsStatus from "../../../../components/ShopOnly/StatusAndTags/AdsStatus";
import CustomDataGrid from "../../../../components/CustomDataGrid";
//import dummy data
import lokalAdsData from "../../../../data/lokalAdsData";
import EditAdvertismentDialog from "./EditAdvertismentDialog/EditAdvertismentDialog";

function DataGridAds({ openEdit, setOpenEdit, handleSave, handleDelete }) {
  //Set Active Edit
  const [editingAd, setEditingAd] = useState({
    lokalAdsID: null,
    shopID: null,
    name: null,
    start_date: null,
    end_date: null,
    approved_at: null,
    type: null,
    status: null,
    message: null,
    ad_image: null,
  });

  //Initialize category Info field
  lokalAdsData.forEach((row) => {
    row.categoryInfo = [
      row.lokalAdsID,
      row.shopID,
      row.name,
      row.start_date,
      row.end_date,
      row.approved_at,
      row.type,
      row.status,
      row.message,
      row.ad_image,
    ];
  });

  const handleOpen = ({
    lokalAdsID,
    shopID,
    name,
    start_date,
    end_date,
    approved_at,
    type,
    status,
    message,
    ad_image,
  }) => {
    setOpenEdit(true);
    setEditingAd({
      lokalAdsID,
      shopID,
      name,
      start_date,
      end_date,
      approved_at,
      type,
      status,
      message,
      ad_image,
    });
  };
  const handleClose = () => {
    setOpenEdit(false);
  };

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
              objectFit: "cover",
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
      field: "categoryInfo",
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
        const {
          lokalAdsID,
          shopID,
          name,
          start_date,
          end_date,
          approved_at,
          type,
          status,
          message,
          ad_image,
        } = params.row;
        statusComponent = (
          <IconButton
            onClick={() =>
              handleOpen({
                lokalAdsID,
                shopID,
                name,
                start_date,
                end_date,
                approved_at,
                type,
                status,
                message,
                ad_image,
              })
            }
          >
            <Info sx={{ color: `${theme.palette.primary.main}` }} />
          </IconButton>
        );
        return statusComponent;
      },
    },
  ];
  return (
    <div>
      <CustomDataGrid
        data={lokalAdsData}
        columns={columns}
        rowID={"lokalAdsID"}
        autoHeight
        disableDensity
      />

      <EditAdvertismentDialog
        open={openEdit}
        handleClose={handleClose}
        handleSave={handleSave}
        handleDelete={handleDelete}
        data={editingAd}
      />
    </div>
  );
}

export default DataGridAds;
