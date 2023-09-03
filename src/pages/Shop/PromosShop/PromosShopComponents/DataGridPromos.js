import React from "react";
import { IconButton, Typography, Box, Stack } from "@mui/material";
import promoData from "../../../../data/promoData";
import theme from "../../../../Theme";
import { Edit, LocalShipping, Percent } from "@mui/icons-material";
import { FaPesoSign } from "react-icons/fa6";
import CustomDataGrid from "../../../../components/CustomDataGrid";

function DataGridPromos() {
  // Precompute values for each row
  const computedPromoData = promoData.map((row) => {
    let discountValue = null;
    if (row.promo_type === "Peso Discount") {
      discountValue = `${row.discount_amount.toFixed(2)}`;
    } else if (row.promo_type === "Percent Discount") {
      discountValue = `${row.discount_amount * 100}%`;
    } else if (row.promo_type === "Free Shipping") {
      discountValue = `${row.discount_amount.toFixed(2)}`;
    }

    return {
      ...row,
      computed_discount_value: discountValue,
    };
  });

  // Define data grid columns
  const columns = [
    {
      field: "promoID",
      headerName: "ID",
      hideable: false,
      type: "number",
      width: 60,
    },

    {
      field: "promo_type",
      headerName: "Promo Type",
      width: 250,
      renderCell: (params) => {
        const promoType = params.value;
        let statusComponent;
        let iconColor = ""; // Define iconColor here
        let iconComponent = null; // Define iconComponent here

        if (promoType === "Peso Discount") {
          iconColor = theme.palette.promo.peso;
          iconComponent = (
            <FaPesoSign
              style={{
                color: theme.palette.text.contrastText,
                fontSize: 20,
              }}
            />
          );
        } else if (promoType === "Percent Discount") {
          iconColor = theme.palette.promo.percent;
          iconComponent = (
            <Percent
              sx={{
                color: theme.palette.text.contrastText,
                fontSize: 20,
              }}
            />
          );
        } else if (promoType === "Free Shipping") {
          iconColor = theme.palette.promo.freeShipping;
          iconComponent = (
            <LocalShipping
              sx={{
                color: theme.palette.text.contrastText,
                fontSize: 20,
              }}
            />
          );
        }

        statusComponent = (
          <Stack
            spacing={2}
            direction="row"
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            {/* Icon Container */}
            <Box
              sx={{
                backgroundColor: iconColor,
                ...theme.components.box.iconContainer,
              }}
            >
              {iconComponent}
            </Box>
            <Typography variant="status">{promoType}</Typography>
          </Stack>
        );

        return statusComponent;
      },
    },

    {
      field: "computed_discount_value",
      headerName: "Discount Amount",
      width: 200,
      renderCell: (params) => (
        <Typography>
          {params.row.promo_type === "Percent Discount"
            ? `${params.value} off`
            : params.row.promo_type === "Peso Discount"
            ? `₱${params.value} off`
            : `Up to ₱${params.value} off`}
        </Typography>
      ),
    },
    {
      field: "min_spend",
      headerName: "Min Spend",
      width: 160,
      renderCell: (params) => (
        <Typography>₱ {params.value.toFixed(2)}</Typography>
      ),
    },
    {
      field: "",
      headerName: "Action",
      width: 60,
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

  return (
    <CustomDataGrid
      data={computedPromoData}
      columns={columns}
      rowID={"promoID"}
    />
  );
}

export default DataGridPromos;
