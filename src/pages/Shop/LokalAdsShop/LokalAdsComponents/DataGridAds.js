import React, { useState } from "react";
import { IconButton, Avatar } from "@mui/material";
import theme from "../../../../Theme";
import { Info } from "@mui/icons-material";
import AdsStatus from "../../../../components/ShopOnly/StatusAndTags/AdsStatus";
import CustomDataGrid from "../../../../components/CustomDataGrid";
import EditAdvertismentDialog from "./EditAdvertismentDialog/EditAdvertismentDialog";
import { useRequestProcessor } from "../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import useAuth from "../../../../hooks/useAuth";
import { LoadingCircle } from "../../../../components/Loading/Loading";
import { BASE_URL } from "../../../../api/Api";
import moment from "moment";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function DataGridAds({ openEdit, setOpenEdit, handleSave, handleDelete }) {
  //Set Active Edit
  const [editingAd, setEditingAd] = useState({
    lokalAdsID: null,
    shopID: null,
    ad_name: null,
    start_date: null,
    end_date: null,
    approved_at: null,
    type: null,
    status: null,
    message: null,
    ad_image: null,
  });

  //API CALL GET ALL SHOP ADS
  const { useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();
  const { data: lokalAdsData, isLoading } = useCustomQuery(
    "getShopAds",
    () =>
      axiosPrivate
        .get(`/api/ad/get_all/?shopID=${auth.shopID}`)
        .then((res) => res.data),
    { enabled: true }
  );

  if (isLoading) {
    return <LoadingCircle />;
  }

  //Initialize category Info field
  lokalAdsData.forEach((row) => {
    const startDate = moment(row.start_date).format("MM/DD/YYYY");
    const endDate = moment(row.end_date).format("MM/DD/YYYY");
    row.categoryInfo = [
      row.lokalAdsID,
      row.shopID,
      row.ad_name,
      (row.start_date = startDate),
      (row.end_date = endDate),
      row.approved_at,
      (row.type = row.type === 1 ? "Shop Page" : "Sitewide"),
      row.status,
      row.message,
      row.ad_image,
    ];
  });

  const handleOpen = ({
    lokalAdsID,
    shopID,
    ad_name,
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
      ad_name,
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
        const img = `${BASE_URL}/${params.value}`;
        let statusComponent;
        statusComponent = (
          <Zoom>
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
          </Zoom>
        );

        return statusComponent;
      },
    },
    {
      field: "ad_name",
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
      width: 130,
    },
    {
      field: "approved_at",
      headerName: "Approved At",
      filterable: false,
      width: 135,
    },
    {
      field: "start_date",
      headerName: "Ad Start Date",
      filterable: false,
      width: 135,
    },
    {
      field: "end_date",
      headerName: "Ad End Date",
      filterable: false,
      width: 135,
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
          ad_name,
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
                ad_name,
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
