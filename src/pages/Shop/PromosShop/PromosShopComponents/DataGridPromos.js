import React, { useState } from "react";
import { IconButton, Typography, Box, Stack } from "@mui/material";
import theme from "../../../../Theme";
import { Edit, LocalShipping, Percent } from "@mui/icons-material";
import { FaPesoSign } from "react-icons/fa6";
import CustomDataGrid from "../../../../components/CustomDataGrid";
import EditPromoDialog from "./EditPromoDialog/EditPromoDialog";
import { useRequestProcessor } from "../../../../hooks/useRequestProcessor";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import useAuth from "../../../../hooks/useAuth";
import { LoadingCircle } from "../../../../components/Loading/Loading";

function DataGridPromos({ openEdit, setOpenEdit, handleSave, handleDelete }) {
  //Set Active Edit
  const [editingPromo, setEditingPromo] = useState({
    promoID: null,
    shopID: null,
    promoTypeID: null,
    discount_amount: null,
    min_spend: null,
    promo_type_name: null,
  });

  // API CALL GET ALL SHOP PROMOS
  const { useCustomQuery } = useRequestProcessor();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const { data: promoData, isLoading } = useCustomQuery(
    "getShopPromo",
    () =>
      axiosPrivate
        .get(`/api/promo/get_all_shop_promo/?shopID=${auth.shopID}`)
        .then((res) => res.data),
    { enabled: true }
  );

  if (isLoading) {
    return <LoadingCircle />;
  }

  //Initialize category Info field
  promoData?.forEach((row) => {
    row.categoryInfo = [
      row.promoID,
      row.shopID,
      row.promoTypeID,
      row.discount_amount,
      row.min_spend,
      row.promo_type_name,
    ];
  });

  const handleOpen = ({
    promoID,
    shopID,
    promoTypeID,
    discount_amount,
    min_spend,
    promo_type_name,
  }) => {
    setOpenEdit(true);
    setEditingPromo({
      promoID,
      shopID,
      promoTypeID,
      discount_amount,
      min_spend,
      promo_type_name,
    });
  };
  const handleClose = () => {
    setOpenEdit(false);
  };

  // Precompute values for each row
  const computedPromoData = promoData.map((row) => {
    let discountValue = null;
    if (row.promoTypeID === 1) {
      discountValue = `${row.discount_amount}`;
    } else if (row.promoTypeID === 2) {
      discountValue = `${row.discount_amount * 100}%`;
    } else if (row.promoTypeID === 3) {
      discountValue = `${row.discount_amount}`;
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
      width: 80,
    },

    {
      field: "promo_type_name",
      headerName: "Promo Type",
      width: 240,
      renderCell: (params) => {
        const promoType = params.value;
        let statusComponent;
        let iconColor = "";
        let iconComponent = null;

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
          {params.row.promoTypeID === 2
            ? `${params.value} off`
            : params.row.promoTypeID === 1
            ? `₱${params.value} off`
            : `Up to ₱${params.value} off`}
        </Typography>
      ),
    },
    {
      field: "min_spend",
      headerName: "Min Spend",
      width: 160,
      renderCell: (params) => <Typography>₱ {params.value}</Typography>,
    },
    {
      field: "categoryInfo",
      headerName: "Action",
      width: 60,
      sortable: false,
      filterable: false,
      hideable: false,
      disableExport: true,
      renderCell: (params) => {
        let statusComponent;
        const {
          promoID,
          shopID,
          promoTypeID,
          discount_amount,
          min_spend,
          promo_type_name,
        } = params.row;

        statusComponent = (
          <IconButton
            onClick={() =>
              handleOpen({
                promoID,
                shopID,
                promoTypeID,
                discount_amount,
                min_spend,
                promo_type_name,
              })
            }
          >
            <Edit sx={{ color: `${theme.palette.primary.main}` }} />
          </IconButton>
        );
        return statusComponent;
      },
    },
  ];

  return (
    <div>
      <CustomDataGrid
        data={computedPromoData}
        columns={columns}
        rowID={"promoID"}
      />

      <EditPromoDialog
        open={openEdit}
        handleClose={handleClose}
        handleSave={handleSave}
        handleDelete={handleDelete}
        data={editingPromo}
      />
    </div>
  );
}

export default DataGridPromos;
