import React from "react";
import { Typography, Stack, Avatar } from "@mui/material";
import CustomDataGrid from "../../../../../components/CustomDataGrid";

function ProductsBought({ orderItems }) {
  const columns = [
    {
      field: "product_image",
      headerName: "Image",
      width: 70,
      disableExport: true,
      renderCell: (params) => {
        const img = params.value;
        let statusComponent;
        statusComponent = (
          <Avatar
            src={img || require("../../../../../assets/lokal360_Logo.png")}
            sx={{
              backgroundColor: "#FFF",
              width: 45,
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
      field: "product_name",
      headerName: "Product",
      width: 200,
    },

    {
      field: "variation_name",
      headerName: "Variation",
      width: 125,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
      filterable: false,
      renderCell: (params) => {
        const totalPrice = params.value;
        const formattedPrice = totalPrice.toFixed(2);
        let statusComponent;
        statusComponent = <p>₱ {formattedPrice}</p>;
        return statusComponent;
      },
    },
    {
      field: "quantity",
      headerName: "Qty.",
      width: 60,
    },
  ];
  return (
    <div>
      <Stack spacing={3} width={"100%"}>
        {/*Section Name */}
        <Stack
          direction={"row"}
          sx={{ alignItems: "baseline", justifyContent: "space-between" }}
        >
          <Typography variant="sectionTitleSmall">Products Bought</Typography>
        </Stack>

        <CustomDataGrid
          data={orderItems}
          columns={columns}
          rowID={"orderItemID"}
          disableGridToolbar
          noRowsWarning={"Error Loading Products /  No Products"}
          rowsPerPage={5}
        />
      </Stack>
    </div>
  );
}

export default ProductsBought;
