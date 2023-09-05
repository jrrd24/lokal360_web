import React from "react";
import VoucherContainer from "../../../../components/ShopOnly/VoucherContainer";
import { Typography } from "@mui/material";
import CustomDataGrid from "../../../../components/CustomDataGrid";
import voucherData from "../../../../data/voucherData";
import { IconButton, Box } from "@mui/material";
import { Cancel, CheckCircle, Edit } from "@mui/icons-material";
import theme from "../../../../Theme";

function DataGridVouchers() {
  // Add a customField to your data
  voucherData.forEach((row) => {
    row.voucherField = (
      <Box sx={{ m: 1 }}>
        <VoucherContainer
          data={{
            type: row.promo_type,
            logo: row.logo_img_link,
            shopName: row.name,
            value: row.discount_amount,
            minSpend: row.min_spend,
            validUntil: row.end_date,
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
      data={voucherData}
      columns={columns}
      rowID={"voucherID"}
      autoHeight
      disableDensity
      disableExport
    />
  );
}

export default DataGridVouchers;
