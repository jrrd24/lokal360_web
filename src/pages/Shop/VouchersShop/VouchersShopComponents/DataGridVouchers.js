import React, { useState } from "react";
import VoucherContainer from "../../../../components/ShopOnly/VoucherContainer";
import { Typography } from "@mui/material";
import CustomDataGrid from "../../../../components/CustomDataGrid";
import { IconButton, Box } from "@mui/material";
import { Cancel, CheckCircle, Edit } from "@mui/icons-material";
import theme from "../../../../Theme";
import EditVoucherDialog from "./EditVoucherDialog/EditVoucherDialog";
import voucherData from "../../../../data/voucherData";
import { useRequestProcessor } from "../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import useAuth from "../../../../hooks/useAuth";
import { LoadingCircle } from "../../../../components/Loading/Loading";
import { BASE_URL } from "../../../../api/Api";

function DataGridVouchers({ openEdit, setOpenEdit, handleSave, handleDelete }) {
  //Set Active Edit
  const [editingVoucher, setEditingVoucher] = useState({
    voucherID: null,
    promoID: null,
    shopID: null,
    start_date: null,
    end_date: null,
    is_active: null,
    name: null,
    promo_type: null,
    discount_amount: null,
    min_spend: null,
  });

  // API CALL GET ALL SHOP VOUCHERS
  const { useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();
  const { data: voucherData, isLoading } = useCustomQuery(
    "getShopVoucher",
    () =>
      axiosPrivate
        .get(`/api/voucher/?shopID=${auth.shopID}`)
        .then((res) => res.data),
    { enabled: true }
  );

  if (isLoading) {
    return <LoadingCircle />;
  }

  //Initialize category Info field
  voucherData.forEach((row) => {
    row.categoryInfo = [
      row.voucherID,
      row.promoID,
      row.shopID,
      row.start_date,
      row.end_date,
      row.is_active,
      row.name,
      row.promo_type,
      row.discount_amount,
      row.min_spend,
    ];
  });

  const handleOpen = ({
    voucherID,
    promoID,
    shopID,
    start_date,
    end_date,
    is_active,
    name,
    promo_type,
    discount_amount,
    min_spend,
  }) => {
    setOpenEdit(true);
    setEditingVoucher({
      voucherID,
      promoID,
      shopID,
      start_date,
      end_date,
      is_active,
      name,
      promo_type,
      discount_amount,
      min_spend,
    });
  };
  const handleClose = () => {
    setOpenEdit(false);
  };

  // Add voucherData field for vouchers
  voucherData.forEach((row) => {
    row.voucherField = (
      <Box sx={{ m: 1 }}>
        <VoucherContainer
          data={{
            type: row.promo_type,
            logo: `${BASE_URL}/${row.logo_img_link}`,
            shopName: row.shop_name,
            value: row.discount_amount,
            minSpend: row.min_spend,
            validUntil: row.end_date,
            isActive: row.is_active,
          }}
        />
      </Box>
    );
  });

  // Define data grid columns
  const columns = [
    {
      field: "voucherID",
      headerName: "ID",
      hideable: false,
      width: 80,
    },
    {
      field: "voucherField",
      headerName: "Voucher",
      width: 320,
      sortable: false,
      filterable: false,
      hideable: false,
      renderCell: (params) => params.value,
    },
    {
      field: "promo_type",
      headerName: "Promo Type",
      width: 150,
      renderCell: (params) => params.value,
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
          voucherID,
          promoID,
          shopID,
          start_date,
          end_date,
          is_active,
          name,
          promo_type,
          discount_amount,
          min_spend,
        } = params.row;

        statusComponent = (
          <Box>
            <IconButton
              onClick={() =>
                handleOpen({
                  voucherID,
                  promoID,
                  shopID,
                  start_date,
                  end_date,
                  is_active,
                  name,
                  promo_type,
                  discount_amount,
                  min_spend,
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
        data={voucherData}
        columns={columns}
        rowID={"voucherID"}
        autoHeight
        disableDensity
        disableExport
      />

      <EditVoucherDialog
        open={openEdit}
        handleClose={handleClose}
        handleSave={handleSave}
        handleDelete={handleDelete}
        data={editingVoucher}
      />
    </div>
  );
}

export default DataGridVouchers;
